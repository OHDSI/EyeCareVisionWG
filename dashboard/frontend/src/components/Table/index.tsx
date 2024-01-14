import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AthenaLogo from '../AthenaLogo'
import InstitutionList from '../InstitutionList'
import { CircularProgress } from '@mui/material';

import { useSelector } from 'react-redux'
import { ContentSelectors, ConceptData } from '@state/content';

import VoteButton from '@components/VoteButton';
import React from 'react';

export default function BasicTable() {
    const concepts = useSelector(ContentSelectors.selectContent).data as ConceptData[]
    const [whichModal, setWhichModal] = React.useState(-1);

    if (concepts.length == 0) {
        return <CircularProgress />
    }

    return (
        <TableContainer style={{ width: 'auto'}} component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow style={{backgroundColor: "silver"}}>
                {/* <TableCell>&nbsp;</TableCell> */}
                <TableCell align="left">Concept</TableCell>
                <TableCell align="left">Athena Link</TableCell>
                <TableCell align="left">Institutions</TableCell>
                {/* <TableCell align="left">N instutitions in progress</TableCell> */}
                <TableCell align="right">Comment</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {concepts.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                {/* <TableCell component="th" scope="row">
                    {index}
                </TableCell> */}
                <TableCell style={{width:"30em", overflowX:"auto", paddingRight: "3em"}} align="left"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank">{row.concept_name}</a></TableCell>
                <TableCell align="center"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank"><AthenaLogo /></a></TableCell>
                <TableCell  align="center"><a style={{cursor: "pointer", color: "darkblue"}} onClick={() => setWhichModal(index)}>{row.otherData ? row.otherData[0] : ""}</a>
                    <InstitutionList concept_name={row.concept_name} open={whichModal == index} onClose={() => setWhichModal(-1)} institutions={(row.otherData && row.otherData.length >= 3) ? row.otherData[2].split(";") : []} />
                </TableCell>
                {/* <TableCell >{row.otherData ? row.otherData[1] : ""}</TableCell> */}
                <TableCell align="center"><VoteButton concept_id={row.concept_id} concept_name={row.concept_name} formSpecification={row.formSpecification} /></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}