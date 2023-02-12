import {
  makeStyles,
  Grid,
  Box,
  Typography,
  Avatar,
  Container,
} from "@material-ui/core";
import { SlideOnScroll } from "../../../Animations/IntoView/Slide/SlideViewPort";
import testimonials from "./testimonials.json";

const useStyles = makeStyles((theme) => ({
  testimonialContent: {
    fontFamily: "Poppins",
    backgroundColor: "blue",
    color: "white",
    maxWidth: 500,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    borderRadius: 14,
    position: "relative",
    "&::before": {
      content: `""`,
      width: 0,
      height: 0,
      borderLeft: "solid transparent",
      borderLeftWidth: theme.spacing(2),
      borderRight: "solid transparent",
      borderRightWidth: theme.spacing(2),
      borderTop: "solid",
      borderTopWidth: theme.spacing(2),
      borderTopColor: "blue",
      position: "absolute",
      bottom: "-16px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[6],
    },
  },
  testimonialHeading: {
    fontFamily: "Poppins",
    fontSize: "1.0rem",
    marginBottom: 10,
    color: "gold",
    fontWeight: 600,
  },
  testimonialText: {
    fontFamily: "Poppins",
    textAlign: "center",
    color: "white",
    fontSize: ".85rem",
  },
  testimonialAvatar: {
    fontFamily: "Poppins",
    color: "white",
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(1),
    },
    "& .MuiAvatar-root": {
      width: 50,
      height: 50,
      marginRight: 10,
    },
  },
  testimonialAvatarName: {
    fontFamily: "Poppins",
    fontWeight: 600,
    textAlign: 'center',
    fontSize: "0.85rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  testimonialAvatarTitle: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: "0.85rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  speechBubbles: {
    fontFamily: "Poppins",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "white",
    color: "blue",
    justifyContent: "center",
    display: "flex",
  },
  speechBubblesHeading: {
    fontFamily: "Poppins",
    fontWeight: 700,
    margin: theme.spacing(0, 0, 0),
    textAlign: "center",
  },
  speechBubblesSubHeading: {
    fontFamily: "Poppins",
    fontWeight: 600,
    margin: 0,
    textAlign: "center",
    color: "blue",
    letterSpacing: "1.2px",
    fontSize: "1.3rem",
  },
  speechBubblesText: {
    fontFamily: "Poppins",
    textAlign: "center",
    backgroundColor: "#1C1C1C",
    color: "white",
  },
  avatar: {
    "& .MuiAvatar-root": {
      width: 80,
      height: 80,
    },
  },
  avatarContainer: {
    width: '40%',
    display: 'flex',
    margin: 'auto'
  },
  textContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.testimonialContent}>{children}</Box>;
};

export const TestimonialHeading = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.testimonialHeading}>
      {children}
    </Typography>
  );
};

const TestimonialText = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.testimonialText}>
      {children}
    </Typography>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.testimonialAvatar} alignItems="center">
      <Avatar src={src} alt={name} />
      <Grid item>
        <Typography variant="body1" className={classes.testimonialAvatarName}>
          {name}
        </Typography>
        <Typography variant="body2" className={classes.testimonialAvatarTitle}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default function BetterTestimonials1() {
  const classes = useStyles();
  return (
    <Box className={classes.speechBubbles}>
      <Container maxWidth="7xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classes.speechBubblesSubHeading}
            >
              Testimonials
            </Typography>
            <Typography variant="h4" className={classes.speechBubblesHeading}>
              Our Clients Speak
            </Typography>
          </Grid>
          {testimonials.map((testimonial, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              className={classes.speechBubbles}
            >
              <SlideOnScroll direction="down">
                <Grid direction="row">
                  <Testimonial className={`bg-primary`}>
                    <TestimonialContent className={`bg-primary`}>
                      <div className={classes.avatarContainer}>
                        <TestimonialAvatar
                          src={testimonial.avatar.src}
                          name={testimonial.avatar.name}
                          title={testimonial.avatar.title}
                        />
                      </div>
                      <div className={classes.textContainer}>
                        <TestimonialHeading>
                          {testimonial.heading}
                        </TestimonialHeading>

                        <TestimonialText>{testimonial.text}</TestimonialText>
                      </div>
                    </TestimonialContent>
                  </Testimonial>
                </Grid>
              </SlideOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
