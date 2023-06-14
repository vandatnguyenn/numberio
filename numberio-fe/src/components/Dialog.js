import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Thông báo"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Lưu thành công
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Tắt thông báo</Button>
            <Button onClick={handleClose} autoFocus>
                Đồng ý
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}