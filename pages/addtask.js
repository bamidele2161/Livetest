import {useState} from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addTask } from '../components/redux/actions';
import Router from 'next/router'

const Addtask = () => {
    const [error, setError] = useState("");
    const [state, setState] = useState({
        name: "",
  });
  const {name} = state;
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
        setError("Please input the field");
    }
    else {
        dispatch(addTask(state));
        Router.push("/");
        setError("");
    }
}

const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
}
  return (
    <div className="add-task-container">
    {error && <p style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", margin: "auto", color: "red"}}>{error}</p> }
        <h1 style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", margin: "auto"}}>Add Task</h1>
         <div 
            className="add-form" 
            onSubmit={handleSubmit}
            style={{
                borderRadius: "10px",
                padding: "0px 50px"
            }}
        > 
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                marginTop="50px"

                style={{
                    borderRadius: "10px",
                    padding: "40px",
                    boxShadow: "2px 2px 5px 4px rgb(227, 227, 227)"
                }}
            >
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    placeholder="New Task" 
                    value={name} 
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", marginLeft: "-95px"}}
                />
                <br />

                <Stack spacing={2} direction="row" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", marginLeft: "-95px"}}>
                    <Button variant="outlined" onClick={() => Router.push("/")}>Cancel</Button>
                    <Button variant="contained" color="success" type="submit">Add</Button>
                </Stack>
            </Box>

            
        </div>
    </div>
  )
}

export default Addtask