import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormLabel } from '@mui/material';
import { ConceptData, FormSpecification } from '@state/content';

const DEFAULT_FORM_QUESTIONS: FormSpecification = [
    {
        type: "TextField",
        label: {
            text: "Comment",
            subtext: "If you'd like to register interest in this data being available, please indicate how it would be used for observational research."
        }
    }
]



export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  voteProps: ConceptData;
}

export default function SurveyDialog(props: SimpleDialogProps) {
    const { onClose, open, voteProps } = props;

    const style: React.CSSProperties = {
        padding: '1em',
        minWidth: '30em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    const handleClose = () => {
        onClose();
    };

    const sectionStyle: React.CSSProperties = {
        marginBottom: '1em',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(event.target as HTMLFormElement);
        let parsedFormData = [];
        for (let [key, value] of formData.entries()) {
            parsedFormData.push(key);
            parsedFormData.push(value);
        }

        const data = [
            new Date().toLocaleDateString(),
            voteProps.concept_name,
            `https://athena.ohdsi.org/search-terms/terms/${voteProps.concept_id}`,
            ...parsedFormData
        ];
        

        // Step 4: Make an API Request
        // Replace 'your-api-endpoint' with your actual API endpoint
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/submit_vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(_ => {
            // Handle success
            handleClose();
        })
        .catch(error => {
            console.log(error);
        });
    };

    const formSpecification = voteProps.formSpecification ? voteProps.formSpecification : DEFAULT_FORM_QUESTIONS

    return (
    <Dialog onClose={handleClose} open={open}>
        <Box style={style}>
        <DialogTitle><Button size="large" target="_blank" href={`https://athena.ohdsi.org/search-terms/terms/${voteProps.concept_id}`}>{voteProps.concept_name}</Button></DialogTitle>
            <form onSubmit={handleSubmit}>
            <FormControl style={{marginBottom: "2em", width: "100%", display:"flex", flexDirection:"column", alignItems:"start"}}>
                {formSpecification.map((question, index) => {
                    if (question.type == "TextField") {
                        return (
                            <div style={sectionStyle} key={index}>
                                <FormLabel style={{marginBottom: "0.5em"}}><b>{question.label.text}</b><br />{question.label.subtext}</FormLabel>
                                <TextField
                                id="standard-multiline-static"
                                multiline
                                rows={3}
                                name={`Question ${index.toString()}: ${question.label.text}`}
                                placeholder="Response here"
                                variant="outlined"
                                style={{width: '100%'}}
                                />
                            </div>
                        )
                    }
                })}
            </FormControl>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "start", gap: "1em", width: "100%"}}>
                <Button type="submit" variant="contained">Submit</Button>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            </div>
            </form>
        </Box>
    </Dialog>
    );
}