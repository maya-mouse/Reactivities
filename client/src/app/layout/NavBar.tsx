
import { Group } from "@mui/icons-material";
import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar(){
    return(
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background : 'linear-gradient(125deg, #9d53ffff 0%, #d55bf4ee 45%, #f44bcacd 78%)'
      }}>
        <Container maxWidth="xl">
         <Toolbar sx={{display : "flex", justifyContent : "space-between"}}>
          <Box>
            <MenuItem sx = {{display : "flex", gap : 2}} 
            component={NavLink} to='/'>
            <Group fontSize="large" />
            <Typography variant="h4" fontWeight="bold">Reactivities</Typography>
            </MenuItem>
          </Box>
          <Box sx={{display: 'flex'}}>
            <MenuItemLink  to='/activities'>Activities
            </MenuItemLink>
              <MenuItemLink to='/createActivity'>Create activity
            </MenuItemLink>
          </Box>
          <MenuItem>User menu</MenuItem>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    )
}