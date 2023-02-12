import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "left",
    borderBottom: "1px solid white !important",
    marginBottom: "10px !important",
    paddingBottom: "2px !important",
  },
  body: {
    color: "black",
    marginTop: 15,
    marginBottom: 30,
    textAlign: 'right'
  },
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto'
  }
}));

export default function ContentBlock({ title, body, textClass }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={textClass}>
        {body}
      </Typography>
    </div>
  );
}
