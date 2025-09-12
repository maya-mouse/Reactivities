import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";


export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
  return (
    <MenuItem component={NavLink} to={to}
    sx={{fontSize: '1.2rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        '&.active':{
            color: '#2c0863c7',
            fontSize: '1.3rem'
        }
    }}>
    {children}
    </MenuItem>
  )
}
