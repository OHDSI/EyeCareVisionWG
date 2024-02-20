import * as React from 'react';
import Button from '@mui/material/Button';
import SurveyDialog from '@components/DialogBox';
import { ConceptData, FormSpecification } from '@state/content';

const USE_DATA_FORM: FormSpecification = [
  {
      type: "TextField",
      label: {
          text: "Personal Details",
          subtext: "Name, position, institution, email address, etc."
      }
  },
  {
      type: "TextField",
      label: {
          text: "Research Project",
          subtext: "For what research purpose would you like to use this data?"
      }
  },
  {
    type: "TextField",
    label: {
        text: "Other information",
        subtext: "Anything else you'd like to add."
    }
}
]

export default function UseDataButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const conceptData: ConceptData = {
    concept_id: 0,
    concept_name: "Enquire about using data network",
    formSpecification: USE_DATA_FORM
  }

  return (
    <div>
      <Button style={{maxWidth: "15em"}} variant="outlined" onClick={handleClickOpen}>
        Use data network for research
      </Button>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={conceptData}
      />
    </div>
  );
}