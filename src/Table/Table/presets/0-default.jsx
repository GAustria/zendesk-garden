import * as React from "react";
import Table from "../Table";
import Head from "../../Head/Head";
import HeaderRow from "../../HeaderRow/HeaderRow";
import HeaderCell from "../../HeaderCell/HeaderCell";
import TableBody from "../../TableBody/TableBody";
import TableRow from "../../TableRow/TableRow";
import Cell from "../../Cell/Cell";

export default (
  <Table uxpId="tableContainer0">
    <Head uxpId="tableHead0">
      <HeaderRow uxpId="tableHeaderRow2">
        <HeaderCell width="25%" uxpId="tableHeaderCell20">
          Hello 1
        </HeaderCell>
        <HeaderCell width="25%" uxpId="tableHeaderCell21">
          Hello 2
        </HeaderCell>
        <HeaderCell width="25%" uxpId="tableHeaderCell22">
          Hello 3
        </HeaderCell>
        <HeaderCell width="25%" uxpId="tableHeaderCell23">
          Hello 4
        </HeaderCell>
      </HeaderRow>
    </Head>
    <TableBody uxpId="tableBody0">
      <TableRow uxpId="tableRow0">
        <Cell width="25%" uxpId="tableCell0">
          Test 1
        </Cell>
        <Cell width="25%" uxpId="tableCell1">
          Test 2
        </Cell>
        <Cell width="25%" uxpId="tableCell2">
          Test 3
        </Cell>
        <Cell width="25%" uxpId="tableCell3">
          Test 4
        </Cell>
      </TableRow>
      <TableRow uxpId="tableRow1">
        <Cell width="25%" uxpId="tableCell10">
          Test 5
        </Cell>
        <Cell width="25%" uxpId="tableCell11">
          Test 6
        </Cell>
        <Cell width="25%" uxpId="tableCell12">
          Test 7
        </Cell>
        <Cell width="25%" uxpId="tableCell13">
          Test 8
        </Cell>
      </TableRow>
      <TableRow uxpId="tableRow2">
        <Cell width="25%" uxpId="tableCell20">
          Test 9
        </Cell>
        <Cell width="25%" uxpId="tableCell21">
          Test 10
        </Cell>
        <Cell width="25%" uxpId="tableCell22">
          Test 11
        </Cell>
        <Cell width="25%" uxpId="tableCell23">
          Test 12
        </Cell>
      </TableRow>
    </TableBody>
  </Table>
);
