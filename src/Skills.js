import React from'react';
import './App.js';
import 'aos/dist/aos.css';
import styles from './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(45),
        height: theme.spacing(30),
      },
    },
  }));

export default function Skills(){
    const classes = useStyles();
    return (
        <div className='row'>
        <div className={styles.vision}>
            <h1 className='whoami_header'style={{marginLeft:400}}>Skills</h1>
            <br />
            <div data-aos="slide-up" className={styles.svgImage}>
            <div className={classes.root}>
            <Paper elevation={10} className='services_card'>
                <h2 >Full Stack Developer</h2>
                <img srcSet='https://samerawada.com/assets/developer-home-9ebd4b99bed05209505fa7258c4cec5ac1e0b183a2f874145fd484c0186d0c9f.gif' height={200} width={350}alt="SVG logo" />
                </Paper>
                <Paper elevation={10} className='services_card'>
                <h2 >Graphic Designer</h2>
                <img srcSet='https://www.fouragain.com/wp-content/uploads/2020/03/Graphic-Designer.gif' height={200} width={350}alt="SVG logo" />
                </Paper>
                </div>
            </div>
            </div>
             </div>
    )
}