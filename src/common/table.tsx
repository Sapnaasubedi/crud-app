'use client';

import {
    CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { type CSSProperties } from 'react';

import { v4 as uuidv4 } from 'uuid';


export interface TableColumn<T> {
  key?: string; // Unique key of this column, ignore if dataIndex is unique
  dataIndex: string;
  title: string;
  render?: (value: any, record: T) => string | JSX.Element | JSX.Element[];
  style?: CSSProperties;
}

interface ListTableProps<T> {
  isValidating: boolean;
  columns: Array<TableColumn<T>>;
  data?: T[];
}

const ListTable = <T,>({
  isValidating,
  columns,
  data = [],
}: ListTableProps<T>): JSX.Element => (
  <TableContainer component={Paper} sx={{ borderRadius: `8px` }}>
    <Table sx={{ border: `1px solid #c6c6c6` }}>
      <TableHead>
        <TableRow sx={{ backgroundColor:  `white` }}>
          {columns.map(({ key, dataIndex, title }) => (
            <TableCell key={key ?? dataIndex}>
              <Typography
                variant="body2"
                component="p"
                fontWeight="600"
                color="black"
              >
                {title}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {isValidating ? (
          <CircularProgress />
        ) : (
          data?.map((d: any) => (
            <TableRow
              key={d.id ?? uuidv4()}
              sx={{
                ':hover': {
                  backgroundColor: "grey",
                },
                '& td:first-child': {
                  whiteSpace: `pre`,
                },
              }}
            >
              {columns.map(({ key, dataIndex, render, style }) => (
                <TableCell key={key ?? dataIndex} style={style}>
                  {render === undefined ? (
                    <Typography
                      variant="body2"
                      component="p"
                      color="black"
                    >
                      {d[dataIndex]}
                    </Typography>
                  ) : (
                    render(d[dataIndex], d)
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ListTable;
