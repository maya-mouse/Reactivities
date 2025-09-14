import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";



export default function HomePage() {
  return (
    <Paper sx={{color: 'white', display: 'flex', flexDirection: 'column',
      gap: 6, alignItems: 'center', alignContent: 'center', justifyContent: 'center',
      height: '100vh',
      backgroundImage:  'linear-gradient(125deg, #9d53ffff 0%, #d55bf4ee 45%, #f44bcacd 78%)'
    }}>
      <Box sx={{display: 'flex', alignItems: 'center', alignContent: 'center', 
        color: 'white', gap: 3}}>
        <Group sx={{height: 110, width: 110, mt: 3}} />
        <Typography variant="h1">
          Reactivities
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to Reactivities
      </Typography>
      <Button component={Link} to='/activities'
      size="large" variant="contained"
      sx={{height:80, borderRadius: 4, fontSize: '1.5rem'}}>
        Take me to the activities!
      </Button>
    </Paper>
  )
}
