import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SurveyDialog from '@components/DialogBox';
import { ConceptData } from '@state/content';

export default function VoteButton(props: ConceptData) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label='Request' color="primary" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={props}
      />
    </div>
  );
}