import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import features from "./features-data";
import { Slide } from "@material-ui/core";
import "./Features.css";
<<<<<<< HEAD:frontend/src/components/Features/FeatureTiles/FeatureTiles.jsx
import { SlideOnScroll } from "../../Animations/IntoView/Slide/SlideViewPort";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    fontSize: '2.25rem',
    textAlign: 'center',
    marginTop: '50px'
  },
  hr: {
    width: '75%',
  }

}))
=======
import { SlideOnScroll } from "../../../Animations/IntoView/Slide/SlideViewPort";
>>>>>>> 39eeb5fee5bc3bdda808d641a005827db51aece5:frontend/src/components/Features/Content/FeatureTiles/FeatureTiles.jsx

export default function FeatureTiles() {

  const classes = useStyles()

  return (
    <>
    <hr className={`${classes.hr} b-1-primary`}/>
    <h2 className={`${classes.header} text-primary ls-2`}>Features</h2>
    <div className="features-root padder">
      <Slide in={true} direction="up" timeout={1000}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              justifyContent="center"
            >
              <SlideOnScroll direction="down">
                <div className="testing">
                  <Paper className="feature-paper tile-bg">
                    <div className="feature">
                      <div className="feature-icon">
                        {feature.icon}
                        <h1 className="feature-title">{feature.title}</h1>
                        <h3 className="feature-subheader">
                          {feature.subheader}
                        </h3>
                      </div>
                    </div>
                  </Paper>
                </div>
              </SlideOnScroll>
            </Grid>
          ))}
        </Grid>
      </Slide>
    </div>
    </>
  );
}
