import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux'
import { ContentSelectors } from '@state/content';

import AthenaLogo from "@components/AthenaLogo";

import VoteButton from '@components/VoteButton';

export default function BasicTable() {
    const concepts = useSelector(ContentSelectors.selectContent).data

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell align="right">Concept Name</TableCell>
                <TableCell align="right">Link</TableCell>
                <TableCell align="right">Vote</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {concepts.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {index}
                </TableCell>
                <TableCell align="left">{row.concept_name}</TableCell>
                <TableCell align="right"><a href={`https://athena.ohdsi.org/search-terms/terms/${row.concept_id}`} target="_blank"><AthenaLogo height="1.5em" /></a></TableCell>
                <TableCell align="right"><VoteButton /></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}