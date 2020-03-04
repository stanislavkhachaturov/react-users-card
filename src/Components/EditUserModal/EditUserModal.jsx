import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditUserForm from '../EditUserForm/EditUserForm'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ saveСhangedUser, currentUser, setIsOpenEdit, isOpenEdit }) {
  const classes = useStyles();

  const handleClose = () => {
    setIsOpenEdit(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsOpenEdit(false);
  // }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpenEdit}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpenEdit}>
          <div className={classes.paper}>
            <EditUserForm setIsOpenEdit={setIsOpenEdit} saveСhangedUser={saveСhangedUser} currentUser={currentUser}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}