import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export default function AccountDialog(props) {
  const handleClose = () => {
    props.openDialog(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
    >
      <DialogTitle>
        Delete Account
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure?
          Once you delete your account, we cannot take it back.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.onConfirm} disabled={props.fetching} color="primary">
          Delete my account
        </Button>
      </DialogActions>
    </Dialog>
  );
}
