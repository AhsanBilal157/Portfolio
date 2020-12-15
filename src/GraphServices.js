import React from 'react';
import './App.js';
import 'aos/dist/aos.css';
import styles from './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '@material-ui/core/CircularProgress';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    },
  }));

  export default function GraphServices(){
    const classes = useStyles();
    return (
        <div className='row'>
        <div className={styles.vision}>
            <h1 
            style={{marginRight:500}}
            >Services</h1>
            <br />
            <div data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"className={styles.svgImage}>
            <div className={classes.root}>
            <Circle elevation={10} className='services_card' style={{height:50,width:50}}>
                <h2 >Personal Static Website</h2>
                </Circle>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://cdn4.iconfinder.com/data/icons/graphic-design-services-4/64/Flyer-design-advertising-Brochure-512.png'height={70}/>
                <h2 >Logo and Flyer Design</h2>
                </Paper>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://cdn.dribbble.com/users/39708/screenshots/2883542/ux-ui-design.png'height={70}/>
                <h2 >UI/UX Design</h2>
                </Paper>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://icon-library.com/images/graphic-design-icon-png/graphic-design-icon-png-16.jpg'height={70}/>
                <h3 >Vector Portrairts / Illustrations</h3>
                </Paper>
                <Circle elevation={10} className='services_card'style={{height:50,width:50}}>
                <h2 >Managment Softwares</h2>
                </Circle>
                </div>
            </div>
            </div>
             </div>
    )
}