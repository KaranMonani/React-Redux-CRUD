import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

export const AddUser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    })
    const [error, setError] = useState("")
    const { name, email, contact, address } = state
    let history = useHistory();
    let dispatch = useDispatch();
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !contact || !email) {
            setError("Please input all the input fields")
        }
        else {
            dispatch(addUser(state));
            history.push("/");
            setError("")
        }
    }

    return (
        <>
            <Button style={{ marginTop: '20px' }} variant="contained" color="secondary" onClick={() => history.push("/")}>Go Back</Button>
            <h2>Add User</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField name="name" onChange={handleInputChange} id="standard-basic" label="Name" type="text" value={name} />
                <br />
                <TextField name="email" onChange={handleInputChange} id="standard-basic" label="Email" type="email" value={email} />
                <br />
                <TextField name="contact" onChange={handleInputChange} id="standard-basic" label="Contact" type="number" value={contact} />
                <br />
                <TextField name="address" onChange={handleInputChange} id="standard-basic" label="Address" type="text" value={address} />
                <br />
                <Button style={{ width: '100px' }} variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </>
    )
}
