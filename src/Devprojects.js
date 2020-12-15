import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            height: theme.spacing(15),
        },
    },
}));
const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 style={{ marginLeft: 80 }}>Projects</h1>
            <div data-aos="zoom-in">
                <div className={classes.root} >
                    <br />
                    <Paper elevation={3} style={{ marginRight: 400 }}>
                        <h2 style={{ marginLeft: 50, color: 'purple' }}>Shoe_Store Private 👟 </h2>
                        <p style={{ marginLeft: 50 }}>JavaScript Updated 5 days ago</p>
                    </Paper></div></div>
                    <div data-aos="zoom-in-up">
                        <div className={classes.root} >
                            <br />
                            <Paper elevation={3} style={{ marginLeft: 500 }}>
                                <h2 style={{ marginLeft: 50, color: 'purple' }}>Corona_Tracker Private 🦠😷 </h2>
                                <p style={{ marginLeft: 50 }}>This application trackes the corona record JavaScript Updated 8 days ago</p>
                            </Paper></div></div>
                        <div data-aos="zoom-in-down">
                            <div className={classes.root} >
                                <br />
                                <Paper elevation={3} style={{ marginRight: 400 }}>
                                    <h2 style={{ marginLeft: 50, color: 'purple' }}>Portfolio Private  </h2>
                                    <p style={{ marginLeft: 50 }}>JavaScript Updated 1 days ago</p>
                                </Paper></div>
                                <br />
                                <br />
                                <Button variant="contained" href='https://github.com/AhsanBilal157?tab=repositories' style={{backgroundColor:'purple',color:'white',marginLeft:500}}>See More Projects</Button>
                            </div></div>
    );
}


export default Projects;