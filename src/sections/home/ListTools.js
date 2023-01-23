import {Grid, ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TOOLS_FRAMEWORKS_1 = [
    "Python - Django",
    "JavaScript - Node.js",
    "PHP",
    "React - Redux",
    "Tailwind CSS - Material UI",
  ]
  
  const TOOLS_FRAMEWORKS_2 = [
    "Solidity - Web3",
    "MySQL - PostgreSQL",
    "C++",
    "Facebook Ads - Google Ads",
    "Open to Work Remotely",
  ]

export default function ListTools(){
    return(
        <Grid container>
                
                <Grid item xs={12} sm={6}>
                  <List>
                    {TOOLS_FRAMEWORKS_1.map((item) =>(
                      <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                    ) )}
                    
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>

                  {TOOLS_FRAMEWORKS_2.map((item) =>(
                      <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                    ) )}
                    

                  </List>
                </Grid>
              </Grid>
    )
}