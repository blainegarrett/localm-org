// --- Post bootstrap -----
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PageBase from '../components/layout/PageBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

let useStyles = makeStyles(theme => {
  return {
    videoContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh'
      //zIndex: 1
    },
    videoBackground: {
      display: 'block',
      position: 'absolute',
      left: '50%',
      top: '0',
      transform: 'translate(-50%, 0%)',
      width: '100vw'
    },
    fixedFooter: {
      position: 'fixed',
      bottom: 0,
      color: '#666666',
      width: '100vw',
      minHeight: '100px'
    },
    teaserText: {
      position: 'relative',
      bottom: '-30px',
      color: '#ffffff',
      fontSize: '70px',
      paddingLeft: '48px',

      [theme.breakpoints.down('sm')]: {
        bottom: '-20px',
        fontSize: '50px'
      },

      [theme.breakpoints.down('xs')]: {
        bottom: '-10px',
        fontSize: '25px',
        paddingLeft: '8px'
      }
    },
    messageContainer: {
      padding: '48px',
      backgroundColor: '#ffffff',
      [theme.breakpoints.down('xs')]: {
        padding: '16px',
        fontSize: '12px'
      }
    },

    ['@media (max-aspect-ratio: 1920/1080)']: {
      videoBackground: {
        height: '100vh',
        width: 'auto'
      }
    },
    ['@media (max-aspect-ratio: 1080/1920)']: {
      videoBackground: {
        height: '100vh',
        width: 'auto'
      }
    }
  };
});

function PageRouteComponent() {
  let classes = useStyles();

  return (
    <PageBase>
      <div className={classes.videoContainer}>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className={classes.videoBackground}
        >
          <source
            src="https://storage.googleapis.com/cdn.mplsart.com/ultratemp/lmo_teaser.mp4"
            type="video/mp4"
          />
        </video>
        <div className={classes.fixedFooter}>
          <div>
            <Typography component="span" className={classes.teaserText}>
              Local Music Online
            </Typography>
            <div className={classes.messageContainer}>
              Returning soon ... in some capacity ... maybe. ~B
            </div>
          </div>
        </div>
      </div>
    </PageBase>
  );
}

export default PageRouteComponent;
