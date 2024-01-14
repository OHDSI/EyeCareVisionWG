import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AthenaLogo from '../AthenaLogo'

import { useSelector } from 'react-redux'
import { ContentSelectors, ConceptData } from '@state/content';

import VoteButton from '@components/VoteButton';

export default function BasicTable() {
    const concepts = useSelector(ContentSelectors.selectContent).data as ConceptData[]

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
                <TableCell style={{width:"20em", overflowX:"auto", paddingRight: "3em"}} align="left"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank">{row.concept_name}</a></TableCell>
                <TableCell align="center"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank"><AthenaLogo /></a></TableCell>
                <TableCell  align="center">{row.otherData ? row.otherData[0] : ""}</TableCell>
                {/* <TableCell >{row.otherData ? row.otherData[1] : ""}</TableCell> */}
                <TableCell align="center"><VoteButton concept_id={row.concept_id} concept_name={row.concept_name} formSpecification={row.formSpecification} /></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}