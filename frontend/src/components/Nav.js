import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { applyColumns, applyFilename, getColumns, getFilename } from '../features/data/dataSlice';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Nav = () => {

    const classes = useStyles();
    const file = useSelector(getFilename);
    const dispatch = useDispatch();
    
    const handleUpload = (event) => {
        //console.log(event.target.files[0]);
        //dispatch(fileUpload(event.target.files[0]));
        
        var formData = new FormData();
        formData.append("file", event.target.files[0]);
        axios.post("http://localhost:8000/api/post/columns", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
            dispatch(applyFilename(res.data.filename));
            dispatch(applyColumns(res.data.values));
        })

    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        App
                    </Typography>
                    <Button
                                variant="contained"
                                component="label"
                            >
                                {file ? file : "Upload Data" }
                        <input
                                    type="file"
                                    id="datafile"
                                    style={{ display: "none" }}
                                    onChange={handleUpload}
                                    required
                                />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
