import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import ContactForm from "../../Forms/Contact/ContactForm";
import SocialSectionForm from "../../Parts/SocialSectionForm";
import ContactSection from "./ContactSection";
import HoursSection from "./HoursSection";
import ContactFormButtons from "../../Parts/ContactFormButtons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "85%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "#1C1C1C",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
}));

export default function BetterContact() {
  const classes = useStyles();
  const options = [
    { label: "General Inquiry", value: "General Inquiry" },
    { label: "Support", value: "Support" },
    { label: "Partnership", value: "Partnership" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div className={`${classes.root} bg-secondary`}>
      <Paper className={`${classes.paper} bg-primary text-white`} elevation={9}>
        <Grid container className={`bg-primary`} spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <ContactSection />
            <HoursSection />
            <SocialSectionForm title={true} />
            <ContactFormButtons />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ maxWidth: "85%" }}>
              <Typography variant="h5" style={{ paddingBottom: 20 }}>
                Contact Us
              </Typography>
              <ContactForm className={`text-black`} selectOptions={options} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
