import * as React from 'react';
import { LegacyRef, useRef } from 'react';
import './display.scss';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';

import { useAppSelector } from '../reducer/hook';
import { ListOfEmployeeState } from '../reducer/employeeReducer';

interface Data {
  firstName: string
  lastName: string
  startDate: string
  department: string
  dateOfBirth: string
  street: string
  city: string
  state: string
  zipCode: number
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'firstName',
    numeric: false,
    disablePadding: true,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: false,
    disablePadding: true,
    label: 'Last Name',
  },
  {
    id: 'startDate',
    numeric: false,
    disablePadding: true,
    label: 'Start Date',
  },
  {
    id: 'department',
    numeric: false,
    disablePadding: true,
    label: 'Department',
  },
  {
    id: 'dateOfBirth',
    numeric: false,
    disablePadding: true,
    label: 'Date Of Birth',
  },
  {
    id: 'street',
    numeric: false,
    disablePadding: true,
    label: 'Street',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: true,
    label: 'City',
  },
  {
    id: 'state',
    numeric: false,
    disablePadding: true,
    label: 'State',
  },
  {
    id: 'zipCode',
    numeric: false,
    disablePadding: true,
    label: 'Zip Code',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('firstName');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  

  let reduxRows = useAppSelector((state: ListOfEmployeeState) => state.employeeList);

  const [rows, setRows] = React.useState<ListOfEmployeeState | any>(reduxRows);

  const sortBySearch = (event: any) => {
    console.log(event.target.value);
  
    const selectedRows = reduxRows.filter(function (elm){
      if (elm.firstName.indexOf(event.target.value) > -1) {
        return true;

      }
      
      if (elm.lastName.indexOf(event.target.value) > -1) {
        return true;

      }

      if (elm.department.indexOf(event.target.value) > -1) {
        return true;

      }

      if (elm.street.indexOf(event.target.value) > -1) {
        return true;

      }

      if (elm.city.indexOf(event.target.value) > -1) {
        return true;

      }

      if (elm.state.indexOf(event.target.value) > -1) {
        return true;

      }

      // if (elm.zipCode.indexOf(event.target.value) > -1) {
      //   return true;

      // }
    })

    // console.log(selectedRows)
    setRows(selectedRows);
  }

  // React.useEffect(() => {
  // }, [])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.firstName);

      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className='display'>
      <Box sx={{ width: '90%', height: '100%', marginTop: '10px' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Toolbar>
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Current Employees
            </Typography>
            <TextField size="small" id="outlined-basic" label="Search" variant="outlined" onChange={sortBySearch}/>
          </Toolbar>
          <TableContainer>
          {rows.length === 0 ? 
            <div className='notFound'>
              Employee not found 
            </div>
          :
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
             
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
             
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row : any) => {
                    const isItemSelected = isSelected(row.firstName);
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.firstName}
                        selected={isItemSelected}
                      >
                        <TableCell align="center">{row.firstName}</TableCell>
                        <TableCell align="center">{row.lastName}</TableCell>
                        <TableCell align="center">{row.startDate}</TableCell>
                        <TableCell align="center">{row.department}</TableCell>
                        <TableCell align="center">{row.dateOfBirth}</TableCell>
                        <TableCell align="center">{row.street}</TableCell>
                        <TableCell align="center">{row.city}</TableCell>
                        <TableCell align="center">{row.state}</TableCell>
                        <TableCell align="center">{row.zipCode}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          }
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </div>
  );
}