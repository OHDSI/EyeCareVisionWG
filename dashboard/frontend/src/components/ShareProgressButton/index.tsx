import * as React from 'react';
import Button from '@mui/material/Button';
import SurveyDialog from '@components/DialogBox';
import { ConceptData, FormSpecification } from '@state/content';

const SHARE_PROGRESS_FORM: FormSpecification = [
  {
      type: "TextField",
      label: {
          text: "Personal Details",
          subtext: "Please include your name, position, institution and email address. We will get in touch to clarify any information, and double-check that you're happy for us to share your progress."
      }
  },
  {
      type: "TextField",
      label: {
          text: "ETL Progress",
          subtext: "Please detail which concepts you have transformed to OMOP, or are currently working on."
      }
  },
  {
    type: "TextField",
    label: {
        text: "Other information",
        subtext: "Anything else you'd like to add. "
    }
}
]

export default function ShareProgressButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const conceptData: ConceptData = {
    concept_id: 0,
    concept_name: "Share your institutional progress",
    formSpecification: SHARE_PROGRESS_FORM
  }

  return (
    <div>
      <Button color="success" style={{maxWidth: "15em"}} variant="outlined" onClick={handleClickOpen}>
        Share institution progress
      </Button>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={conceptData}
      />
    </div>
  );
}