import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import features from "./features-data";
import { Slide } from "@material-ui/core";
import "./Features.css";

export default function Features() {
  const featuresRef = React.createRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            console.log("Should be Visible");
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer2.observe(featuresRef.current);
    console.log(featuresRef.current);

    return () => {
      observer2.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <div className="features-root padder" ref={featuresRef}>
      <Slide in={visible} direction="up" timeout={1000}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
          className=""
        >
          {features.map((feature) => (
            <Grid
              key={feature.title}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className=""
              justifyContent="center"
            >
              <div className="testing">
                <Paper className="feature-paper tile-bg">
                  <div className="feature">
                    <div className="feature-icon">
                      {feature.icon}
                      <h1 className="feature-title">{feature.title}</h1>
                      <h3 className="feature-subheader">{feature.subheader}</h3>
                    </div>
                  </div>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </Slide>
    </div>
  );
}
