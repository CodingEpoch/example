import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box, Slide, Button } from "@material-ui/core";
import { SlideOnScroll } from "../../Animations/IntoView/Slide/SlideViewPort";
import HeroBlock from "../../Elements/TextBlocks/HeroBlock/HeroBlock";
import CarouselX from "../../Images/Carousel/ImageCarousel";
import ContactButtons from "../../Elements/Buttons/ContactButtons";
import SocialSection from "../../Elements/Buttons/SocialButtons";
import { useEffect } from "react";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { useState } from "react";
import HeroBlockEdit from "../../Elements/TextBlocks/HeroBlock/HeroBlockEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
<<<<<<< HEAD
=======
    backgroundColor: theme.palette.background.default,
>>>>>>> 39eeb5fee5bc3bdda808d641a005827db51aece5
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    position: "relative",
  },
  gridContainer: {
    fontFamily: "Poppins",
    zIndex: 10,
    position: "relative",
  },
  grid: {
    fontFamily: "Poppins",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  gridItemLeft: {
    padding: "20px 20px 20px 0px",
    fontFamily: "Poppins",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: 'center',
    marginTop: '50px',
  },
}));

export default function HeroCarousel({ items }) {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [heroblock, setHeroblock] = useState({});
  const [data, setData] = useState({
    title: "",
    heading: "",
    text: "",
    buttonText: "",
  });

  const updateHeroBlock = (updatedHeroBlock) => {
    setHeroblock(updatedHeroBlock);
    setData(updatedHeroBlock);
    setEditing(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get("/heroblock/")
        .then((response) => {
          setData(response.data);
          console.log(data);
        })
        .catch((err) => {
          setError(err);
        });
    };
    fetchData();
  }, []);

  return (
    <Box className={`${classes.root} bg-white`}>
      <Container style={{ maxWidth: "95%" }} className={classes.gridContainer}>
        <Grid container className={classes.grid}>
          <Slide in={true} direction="right" timeout={1000}>
<<<<<<< HEAD
            <Grid item xs={12} md={12} className={classes.gridItemLeft}>
              <HeroBlock
                title="Custom Designs"
                heading="Modern Framework, <br /> Design, and Hosting"
                text='Backed by years of experience and knowledge in the industry, EdgeLords aims to provide new and current entrepreneurs with a premium framework, excellent hosting, custom design, and human customer service in order to establish their brand successfully.'
                btnText="Get Started"
                btnLink="/about"
                className={classes.heroBlock}
              />

=======
            <Grid item xs={12} md={6} className={classes.gridItemLeft}>
              {!editing ? (
                <HeroBlock
                  title={data.title}
                  heading={data.heading}
                  text={data.text}
                  btnText={data.buttonText}
                  btnLink="/about"
                />
              ) : (
                <HeroBlockEdit
                  heroblock={data}
                  updateHeroBlock={updateHeroBlock}
                />
              )}
              <Button onClick={() => setEditing(!editing)}>
                {editing ? "Cancel" : "Edit"}
              </Button>
>>>>>>> 39eeb5fee5bc3bdda808d641a005827db51aece5
              <Grid item xs={12} md={12} className={classes.contactContainer}>
                <ContactButtons />
                <SocialSection />
              </Grid>
            </Grid>
          </Slide>
        </Grid>
      </Container>
    </Box>
  );
}
