import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AddUserModal from '../../Components/AddUserModal/AddUserModal';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import UserList from '../../Components/UserList/UserList';

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
  }
}));


export default function Album() {
  const classes = useStyles();

  const [users, setUsers] = useState([
    { id: 1, name: "Tom", lastName: "Last Name", address: "New York", status: "Developer"},
    { id: 2, name: "Nick", lastName: "Last Name", address: "address", status: "status"},
    { id: 3, name: "Ivan", lastName: "Last Name", address: "address", status: "status"},
    { id: 4, name: "Sergey", lastName: "Last Name", address: "address", status: "status"},
    { id: 5, name: "Roman", lastName: "Last Name", address: "address", status: "status"},
    { id: 6, name: "Mia", lastName: "Last Name", address: "address", status: "status"},
  ]);

  const [currentUser, setCurrentUser] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [searchTerm, setSearchValue] = useState('');

  const addUser = (user) => {
    const newArr = [
      ...users,
      user
    ];

    setUsers(newArr);
  }

  const editUser = (user) => setCurrentUser(user)

  const saveСhangedUser = (user) => {
    const newArr = users.map(u => {
      if (u.id === user.id) {
        return user;
      }
      return u;
    });
    setUsers(newArr);
  }

  const deleteUser = (user) => {
    const newArr = users.filter(u => u.id !== user);
    setUsers(newArr);
  }



  console.log('SEARCH TERM', searchTerm);

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log('Filtered users', filteredUsers);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            All users
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Users
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="space-between">
                <Grid item>
                  <InputBase
                    className={classes.input}
                    name="value"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchTerm.value}
                    placeholder="Search User"
                    inputProps={{ 'aria-label': 'search user' }}
                  />
                  <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button onClick={() => setIsOpen(true)} className={classes.createBtn}>Add new User</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <UserList 
          saveСhangedUser={saveСhangedUser} 
          setIsOpenEdit={setIsOpenEdit} 
          isOpenEdit={isOpenEdit} 
          currentUser={currentUser} 
          users={filteredUsers} 
          editUser={editUser} 
          deleteUser={deleteUser}
          searchTerm={searchTerm} />
        <AddUserModal 
          addUser={addUser} 
          setIsOpen={setIsOpen} 
          isOpen={isOpen} 
          setUsers={setUsers} />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </>
  );
}