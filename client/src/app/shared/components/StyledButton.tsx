import { Button, styled, type ButtonProps } from "@mui/material";
import type { LinkProps } from "react-router";

type StyleButtonProps = ButtonProps & Partial<LinkProps>

const StyleButton = styled(Button)<StyleButtonProps>(({theme})=>({
    '&.Mui-disabled':{
        backgroundColor: theme.palette.grey[600],
        color: theme.palette.text.disabled
    }
}));

export default StyleButton