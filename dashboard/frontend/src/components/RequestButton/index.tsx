import * as React from 'react';
import Button from '@mui/material/Button';
import SurveyDialog from '@components/DialogBox';
import { ConceptData } from '@state/content';

export default function RequestButton(props: ConceptData) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Request additional code
      </Button>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={props}
      />
    </div>
  );
}