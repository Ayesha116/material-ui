import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  girdpart: {
    backgroundColor : "purple",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    color: "orange",
    backgroundColor: "brown",
  },
}));

function App() {

  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>ayesha</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>ariba</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>alishba</Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}      
      

export default App;
