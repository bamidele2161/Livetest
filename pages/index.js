import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {loadTasks, deleteTask} from '../components/redux/actions'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
    const {tasks} = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this task ?")) {
      dispatch(deleteTask(id));
    };
  };
  return(
    <div className="dashboard-container">
        <div className="navbar-container">
            <h1 className="navbar-brand" style={{fontSize: "40px"}}>task List</h1>
        </div>

        <div className="task-botton">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button color="primary" 
              onClick={() => navigate('/addtask')}
            >Add New task</Button>
          </ButtonGroup>
        </div>

        <TableContainer component={Paper} style={{marginTop:"50px"}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Titlte</StyledTableCell>
                <StyledTableCell align="center">Completed</StyledTableCell>
                <StyledTableCell align="center">Add</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {tasks.map((task) => (
                <StyledTableRow key={task.id}>
                  <StyledTableCell component="th" scope="row">
                    {task.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{task.title}</StyledTableCell>
                  <StyledTableCell align="center">{task.taskname}</StyledTableCell>
                  <StyledTableCell align="center">{task.completed}</StyledTableCell>

                  <StyledTableCell align="center">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button color="warning"
                      onClick={() => navigate(`/addtask/${task.id}`)}>Add</Button>
                    </ButtonGroup>
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button 
                      color="error"
                      onClick={() => handleDelete(task.id)}
                      >Delete</Button>
                    </ButtonGroup>
                  </StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    </div>
  );
}
