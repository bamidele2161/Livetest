import * as types from "./actionType";
import axios from 'axios';

const getTasks = (tasks) => ({
    type: types.GET_TODO,
    payload: tasks,
});

const taskDeleted = (id) => ({
    type: types.DELETE_TODO,
    payload: id,
})

const taskAdded = (task) => ({
    type: types.ADD_TODO,
    payload: task,
})


export const loadTasks = () => {
    return function (dispatch) {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
            console.log("response", response);
            dispatch(getTasks(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };
};
    
export const deleteTask = (id) => {
    return function (dispatch) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
            console.log("response", response);
            dispatch(taskDeleted(id));
        })
        .catch((error) => {
            console.log(error)
        });
    };
};

export const addTask = (task) => {
    return function (dispatch) {
        axios.post(`https://jsonplaceholder.typicode.com/todos`, task)
        .then((response) => {
            console.log("response", response);
            dispatch(taskAdded(response.data));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
