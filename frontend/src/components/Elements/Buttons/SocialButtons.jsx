import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    color: "white",
    padding: 7,
    borderRadius: 10,
    backgroundColor: 'blue',
    "&:hover": {
      transform: "scale(1.05)",
      color: "blue",
      backgroundColor: 'white !important'
    },
  },
  icon: {
    backgroundColor: 'white !important'
  }
}));

export default function SocialSection({ title }) {
  const classes = useStyles();

  return (
    <>
      {title && (
        <Typography
          variant="h5"
          style={{
            paddingTop: 40,
          }}
        >
          Follow Us
        </Typography>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <IconButton
        className={classes.icon}
          aria-label="facebook"
          href="https://www.facebook.com/example"
        >
          <FacebookIcon fontSize="large" className={classes.socialIcons} />
        </IconButton>
        <IconButton className={classes.icon} aria-label="twitter" href="https://twitter.com/example">
          <TwitterIcon fontSize="large" className={classes.socialIcons} />
        </IconButton>
        <IconButton
        className={classes.icon}
          aria-label="instagram"
          href="https://www.instagram.com/example"
        >
          <InstagramIcon fontSize="large" className={classes.socialIcons} />
        </IconButton>
        <IconButton
          className={classes.icon}
          aria-label="linkedin"
          href="https://www.linkedin.com/company/example"
        >
          <LinkedInIcon fontSize="large" className={classes.socialIcons} />
        </IconButton>
      </div>
    </>
  );
}
