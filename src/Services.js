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

  export default function Services(){
    const classes = useStyles();
    return (
        <div className='row'>
        <div className={styles.vision}>
            <h1 
            style={{marginRight:500}}
            >Services</h1>
            <br />
            <div data-aos="fade-right" 
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"className={styles.svgImage}>
            <div className={classes.root}>
            <Circle elevation={10} className='services_card' style={{height:50,width:50}}>
                <h2 >Personal Static Website</h2>
                </Circle>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://cdn0.iconfinder.com/data/icons/wireframes-7/100/Profile-512.png'height={70}/>
                <h2 >Portfolio</h2>
                </Paper>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://cdn3.iconfinder.com/data/icons/seo-115/64/website-page-company-business-512.png'height={70}/>
                <h2 >Ecommerce</h2>
                </Paper>
                <Paper elevation={10} className='services_card'>
                <img srcSet='https://toppng.com/uploads/preview/business-icon-establish-a-company-ico-11562937071dk415zbolw.png'height={70}/>
                <h3 >Buisness Websites</h3>
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