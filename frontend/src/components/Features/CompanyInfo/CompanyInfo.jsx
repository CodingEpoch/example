import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import "./InformationSection.css";
import ContentBlock from "../../Parts/ContentBlock";
import CoreValues from "../../Parts/CoreValues";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "1400px",
    minHeight: "700px",
    backgroundColor: "white",
    color: 'black'
  },
  heading: {
    fontWeight: 800,
    color: "blue",
    letterSpacing: '1.15px',
    textAlign: "center",
    marginBottom: 15,
    fontSize: "2.5rem",
  },
  core: {
    display: 'flex',
    margin: 'auto',
    border: '2px solid blue'
  }
}));

export default function CompanyInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center">
        <Card
          elevation={6}
          className={classes.root}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h1" className={classes.heading}>
              EDGELORDS
            </Typography>
            <ContentBlock
              title="Company Mission"
              body="Prospective and current entrepreneurs don't have many affordable and user friendly options that provide a design and hosting service package. We help fill that gap by providing you with a variety of services tailored to your needs."
            />

            <CoreValues className={classes.core}/>
            <ContentBlock
              title="Company History"
              body="EdgeLords was founded by two experienced developers that discovered a need for new and current entrepreneurs. We are a new business that promises to provide excellent customer service through human interaction."
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
