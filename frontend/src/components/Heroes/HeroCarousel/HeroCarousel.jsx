import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box, Slide } from "@material-ui/core";
import { SlideOnScroll } from "../../Animations/IntoView/Slide/SlideViewPort";
import HeroBlock from "../../Parts/HeroBlock";
import CarouselX from "../../Carousels/ImgCarousel/ImgCarousel";
import ContactButtons from "../../Parts/ContactButtons";
import SocialSection from "../../Parts/SocialSection";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
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

  return (
    <Box className={`${classes.root} bg-white`}>
      <Container style={{ maxWidth: "95%" }} className={classes.gridContainer}>
        <Grid container className={classes.grid}>
          <Slide in={true} direction="right" timeout={1000}>
            <Grid item xs={12} md={12} className={classes.gridItemLeft}>
              <HeroBlock
                title="Custom Designs"
                heading="Modern Framework, <br /> Design, and Hosting"
                text='Backed by years of experience and knowledge in the industry, EdgeLords aims to provide new and current entrepreneurs with a premium framework, excellent hosting, custom design, and human customer service in order to establish their brand successfully.'
                btnText="Get Started"
                btnLink="/about"
                className={classes.heroBlock}
              />

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
