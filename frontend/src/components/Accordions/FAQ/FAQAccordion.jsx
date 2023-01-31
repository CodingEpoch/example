import React, { useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import faqData from "./faqData";
import { Grid } from "@material-ui/core";
import AccordionQA from "../../Parts/AccordionQA";
import { Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "#1C1C1C",
    color: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  title: {
    textAlign: "center",
    color: "#f9f9f9",
    fontWeight: "700",
    fontFamily: "Poppins",
    paddingBottom: 15,
    marginTop: 10
  },
  containergrid: {
    display: "flex",
    width: "100%",
  },
  tab: {
    backgroundColor: "blue",
    width: "20%",
    color: "#f9f9f9",
    fontWeight: "700",
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    minWidth: "auto",
    marginRight: theme.spacing(1),
    "&:focus": {
      color: "#f9f9f9",
    },
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  tabsIndicator: {
    backgroundColor: "white",
  },
}));

const FAQAccordion = () => {
  const classes = useStyles();

  const [currentCategory, setCurrentCategory] = useState("Shipping");

  const handleTabChange = (event, newValue) => {
    setCurrentCategory(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={`${classes.containergrid} bg-secondary`}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={`${classes.title} text-primary`}>
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Paper elevation={6} className={`${classes.root} bg-primary`}>
          <Tabs
            value={currentCategory}
            onChange={handleTabChange}
            classes={{ indicator: classes.tabsIndicator }}
          >
            {Object.keys(faqData).map((category) => (
              <Tab
                label={category}
                value={category}
                classes={{ root: `${classes.tab} bg-secondary text-primary`  }}
              />
            ))}
          </Tabs>
          <Grid container spacing={2} style={{ marginTop: 0 }}>
            {faqData[currentCategory].map((faq) => (
              <Grid item xs={12}>
                <AccordionQA faq={faq} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default FAQAccordion;
