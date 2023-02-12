import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import "./InformationSection.css";
import CoreValues from "./CoreValues";
import ContentBlock from "../../../Elements/TextBlocks/ContentBlock";
import StandardImage from "../../../Images/StandardImage";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "1400px",
    minHeight: "700px",
    backgroundColor: "white",
    color: "black",
  },
  heading: {
    fontWeight: 800,
    color: "blue",
    letterSpacing: "1.15px",
    textAlign: "center",
    marginBottom: 15,
    fontSize: "2.5rem",
  },
  core: {
    display: "flex",
    margin: "auto",
    border: "2px solid blue",
  },
  image: {
    height: "200px",
    width: "200px",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "85%",
    justifyContent: "center",
    margin: "auto",
    marginTop: "50px",
  },
  midContentBlock: {
    textAlign: "right !important",
  },
}));

export default function CompanyInfo2() {
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
              About
            </Typography>

            <div className={classes.contentContainer}>
              <StandardImage
                className={classes.image}
                url={
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pointgadget.com%2Fwp-content%2Fuploads%2F2020%2F05%2Ffree-stock-images-websites.jpg&f=1&nofb=1&ipt=f78fff3e2e8177f704830347fc14d868952333508af882dd095aa7091f6311d8&ipo=images"
                }
              />
              <ContentBlock
                textClass={classes.midContentBlock}
                title="Company History"
                body="EdgeLords was founded by two experienced developers that discovered a need for new and current entrepreneurs. We are a new business that promises to provide excellent customer service through human interaction."
              />
            </div>
            <div className={classes.contentContainer}>
              <ContentBlock
                title="Company Mission"
                body="Prospective and current entrepreneurs don't have many affordable and user friendly options that provide a design and hosting service package. We help fill that gap by providing you with a variety of services tailored to your needs."
              />
              <StandardImage
                className={classes.image}
                url={
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pointgadget.com%2Fwp-content%2Fuploads%2F2020%2F05%2Ffree-stock-images-websites.jpg&f=1&nofb=1&ipt=f78fff3e2e8177f704830347fc14d868952333508af882dd095aa7091f6311d8&ipo=images"
                }
              />
            </div>
            <div className={classes.contentContainer}>
              <StandardImage
                className={classes.image}
                url={
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pointgadget.com%2Fwp-content%2Fuploads%2F2020%2F05%2Ffree-stock-images-websites.jpg&f=1&nofb=1&ipt=f78fff3e2e8177f704830347fc14d868952333508af882dd095aa7091f6311d8&ipo=images"
                }
              />
              <ContentBlock
                textClass={classes.midContentBlock}
                title="Values"
                body="EdgeLords was founded by two experienced developers that discovered a need for new and current entrepreneurs. We are a new business that promises to provide excellent customer service through human interaction."
              />
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
