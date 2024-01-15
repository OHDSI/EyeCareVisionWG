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
          text: "What new concept would you like included?",
          subtext: "This should be something specific, that would fit into the OMOP CDM model. Ideally, you would provide a concept ID acquired using the Athena tool (https://athena.ohdsi.org/search-terms/start)"
      }
  },
  {
    type: "TextField",
    label: {
        text: "Justification",
        subtext: "Why you want it included. What research question would it help you answer?"
    }
}
]

export default function RequestNewConceptButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const conceptData: ConceptData = {
    concept_id: 0,
    concept_name: "Request New Concept",
    formSpecification: USE_DATA_FORM
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Request new concept
      </Button>
      <SurveyDialog
        open={open}
        onClose={handleClose}
        voteProps={conceptData}
      />
    </div>
  );
}