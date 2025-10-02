import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { LoginSchema } from "../schemas/loginSchema"
import agent from "../api/agent";
import type { User } from "../types";
import { useLocation, useNavigate } from "react-router";
import type { RegisterSchema } from "../schemas/registerSchema";
import { toast } from "react-toastify";

export const useAccount = () =>{
    const queryClient = useQueryClient();
    const location = useLocation();
    const navigate = useNavigate();

    const loginUser = useMutation({
        mutationFn : async(cred: LoginSchema) =>{
            await agent.post('/login?useCookies=true', cred);
        },
        onSuccess : async() =>{
            await queryClient.invalidateQueries({
                queryKey: ["user"]
            });
        }
    });

    const registerUser = useMutation({
        mutationFn: async(creds: RegisterSchema) =>{
            await agent.post('/account/register', creds);
        },
        onSuccess: ()=>{
            toast.success("Register is successful - you can now login");
            navigate('/login');
        }
    });

    const logoutUser = useMutation({
        mutationFn: async () => 
        {
            await agent.post('/account/logout');
        },
        onSuccess:() =>{
            queryClient.removeQueries({queryKey: ["user"]});
            queryClient.removeQueries({queryKey: ["activities"]});
            navigate("/");
        }
    });

    const {data: currentUser, isLoading: loadingUserInfo} = useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const response = await agent.get<User>('/account/user-info');
            return response.data;
        },
        enabled: !queryClient.getQueryData(['user'])
        && location.pathname !== "/login"
        && location.pathname !== "/register"
    });

    return{
        loginUser,
        currentUser,
        logoutUser,
        loadingUserInfo,
        registerUser
    }
}