import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: "contain"
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  createBtn: {
    backgroundColor: '#3f51b5',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    "&:hover": {
      color: "#3f51b5"
    },
  },
  cardActions: {
    display: "flex !impotant",
    justifyContent: "spase-between !impotant"
  }
}));

export default function UserCardPage(props) {
  const classes = useStyles();
  const id = props.match.params.id;

  const [currentUser, setCurrentUser] = useState({});

  const getUser = async () => {
    try {
      
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/users/" + id, {
        headers: {
          "Authorization": `Basic ${token}`
        }
      });
      const userCard = response.data;
      
      setCurrentUser(userCard);   
    } catch (error) {
      console.log("error", error)
    }
  };

  useEffect( () => { 
    getUser(); 
  }, []);


  // const editUser = async (user) => {
  //   try {
  //     await axios.patch("http://localhost:5000/users/edit", user, {
  //       headers: {
  //         "Authorization": `Basic ${token}`
  //       }
  //     });        

  //     //setCurrentUser(newUser);

  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  // const deleteUser = async (userId) => {
  //   try {
  //     await axios.post("http://localhost:5000/users/delete", { userId }, {
  //       headers: {
  //         "Authorization": `Basic ${token}`
  //       }
  //     });    
      
  //     //setCurrentUser(newUser);

  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}  maxWidth="md">
          {/* End hero unit */}
          <Grid >
              <Grid item id={currentUser._id} key={currentUser._id} xs={10}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="../user-male-icon.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      First name: {currentUser.firstName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Last name: {currentUser.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Address: {currentUser.address}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Status: {currentUser.status}
                    </Typography>
                  </CardContent>
                  {/* <CardActions className={classes.cardActions}>
                    <Button size="small" variant="outlined" color="primary" 
                      onClick={() => {
                        editUser(currentUser);
                      }}  >
                      Edit
                    </Button>
                    <Button size="small" variant="outlined" color="secondary"
                      onClick={() => {
                        deleteUser(currentUser.id);
                      }}  >
                      Delete
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid> 
          </Grid>
        </Container>
      </main>
    </>
  );
}