import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '45%'
  },
  icon: {
    fontSize: "2rem",
    color: "gold",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "1.5rem",
    border: 0,
  },
  description: {
    fontSize: "0.95rem",
    fontWeight: 400,
    fontFamily: "Roboto",
    color: "white",
  },
  stepContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 550,
    margin: "auto",
  },
  detailsContainer:{
    display: 'flex',
    width: '45%'
  },
  materialsContainer: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    border: '2px solid blue',
    padding: '10px'
  }
}));

export default function FloatingFeature1({ step }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.stepContainer}>
      <Grid className={classes.materialsContainer}>
        <Grid direction="column" className={classes.iconContainer} item>
          <step.icon className={classes.icon} />
          <Typography className={`${classes.heading} ls-1`}>{step.title}</Typography>
        </Grid>
        <Grid direction="column" className={classes.detailsContainer} item>
          <Typography variant="body1" className={classes.description}>
            {step.description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
