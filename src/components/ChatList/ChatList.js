import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const ChatList = () => {
        return (
          <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper', position: "fixed", top:-1, left: 5, m: 0  }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Vera Shipunova" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Vera Shipunova"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      You:
                    </Typography>
                    {"yes"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{width: 200}} />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Olga Voronaya" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Olga Voronaya"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     
                    </Typography>
                    {"Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{width: 200}} />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Alexandra Qui" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Alexandra Qui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     You:
                    </Typography>
                    {'We will'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{width: 200}} />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Mike" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Mike"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                    </Typography>
                    {'Hello! I would like to do smth...'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        );
}