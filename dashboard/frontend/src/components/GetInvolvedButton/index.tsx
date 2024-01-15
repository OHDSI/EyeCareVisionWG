import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { DialogTitle } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

export default function GetInvolvedButton() {
  const [open, setOpen] = React.useState(false);

      const style: React.CSSProperties = {
        padding: '1em',
        minWidth: '30em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Get Involved
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <Box style={style}>
          <DialogTitle>Get Involved</DialogTitle>
          <DialogContent>
            <p>
              If you'd like to get involved in wider efforts around getting ophthalmology data transformed into the OMOP standard, please see the <a href="https://ohdsi.github.io/EyeCareVisionWG/index.html">home page</a> of this site for details on joining.
            </p>
            <p>
              However, if you have questions about ETL efforts specifically, please contact either Michelle Hribar (hribarm[at]ohsu.edu) or Will Halfpenny (whalfpenny[at]health.ucsd.edu).
            </p>
          </DialogContent>
        </Box>
    </Dialog>
    </div>
  );
}