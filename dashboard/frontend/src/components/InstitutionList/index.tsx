import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';

export interface InstitutionListProps {
    open: boolean;
    onClose: () => void;
    institutions: string[];
    concept_name: string;
}

export default function InstitutionList(props: InstitutionListProps) {
    const { open, onClose, institutions, concept_name } = props;

    const handleClose = () => {
        onClose();
    };

    const style: React.CSSProperties = {
        padding: '1em',
        minWidth: '30em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: "2.5em",
        textAlign: "center",
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div style={style}>
                <DialogTitle>Institutions<br></br><i style={{fontSize:"0.8em"}}>{concept_name}</i></DialogTitle>
                {institutions.length > 0 ?
                    institutions.map((institution, index) => (
                        <div key={index}>{institution}</div>
                    )) :
                    "-"
                }
            </div>
        </Dialog>
    );
}