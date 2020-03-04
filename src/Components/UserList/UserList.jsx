import React from 'react';
import Button from '@material-ui/core/Button';
import EditUserModal from '../EditUserModal/EditUserModal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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


export default function UserList({ saveСhangedUser, currentUser, users, editUser, setIsOpenEdit, isOpenEdit, deleteUser, searchTerm}) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {users.map(user => (
              <Grid item id={user.id} key={user.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="user-male-icon.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.lastName}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" variant="outlined" color="primary" 
                      onClick={() => {
                        setIsOpenEdit(true);
                        editUser(user);
                      }}  >
                      Edit
                    </Button>
                    <Button size="small" variant="outlined" color="secondary"
                      onClick={() => {
                        deleteUser(user.id);
                      }}  >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>             
            ))}
          </Grid>
          <EditUserModal 
            saveСhangedUser={saveСhangedUser} 
            currentUser={currentUser} 
            setIsOpenEdit={setIsOpenEdit} 
            isOpenEdit={isOpenEdit}/>
        </Container>
      </main>
    </>
  );
}