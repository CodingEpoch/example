import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  paper: {
    minWidth: 330,
    backgroundColor: "#000000",
    width: "100%",
  },
  card: {
    width: "100%",
    paddingBottom: "56.25%",
  },
  media: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
  },
  button: {
    marginTop: "auto",
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailGallery: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  thumbnail: {
    width: "15%",
    height: "80px",
    objectFit: "cover",
    padding: "5px",
    marginTop: "5px",
    marginBottom: "5px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[7],
      backgroundColor: "#555555",
    },
    [theme.breakpoints.down("md")]: {
      width: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25%",
    },
  },
}));

const CarouselX = ({ items }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [isManualClick, setIsManualClick] = useState(false);

  const handleClick = (index) => {
    setAutoPlayEnabled(false);
    setIsManualClick(true);
    setActiveIndex(index);
  };

  const handleChange = (index) => {
    if (!isManualClick) return;
    setAutoPlayEnabled(false);
    setTimeout(() => {
      setAutoPlayEnabled(true);
      setIsManualClick(false);
    }, 250);
  };

  return (
    <div className={classes.carousel}>
      <Paper elevation={0} className={classes.paper}>
        <Carousel
          navButtonsAlwaysVisible={true}
          animation="fade"
          autoPlay={autoPlayEnabled}
          onChange={handleChange}
          interval={7500}
          timeout={500}
          swipe={true}
          index={activeIndex}
          pauseOnHover={true}
        >
          {items.map((item, index) => (
            <div>
              <Card className={classes.card} key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes.media}
                />
              </Card>
              <div className={classes.btnContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  href={item.buttonLink}
                  className={classes.button}
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
        <div className={classes.thumbnailGallery}>
          {items.map((item, index) => (
            <img
              src={item.image}
              alt={item.title}
              className={classes.thumbnail}
              key={index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default CarouselX;
