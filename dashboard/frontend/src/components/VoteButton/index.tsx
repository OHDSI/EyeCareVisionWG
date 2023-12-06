// import Button from '@mui/material/Button'
// import React from 'react'

// export default function VoteButton() {

//     const style: React.CSSProperties = {
//         marginLeft: '2em'
//     }

//     return (
//         <Button style={style} size="small" variant="outlined" href="https://www.google.com" target="_blank">Select</Button>
//     )
// }

import * as React from 'react';
import Button from '@mui/material/Button';
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Request
      </Button>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={props}
      />
    </div>
  );
}