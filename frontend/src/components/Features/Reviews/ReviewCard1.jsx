import StarRatings from "react-star-ratings";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  papercard: {
    backgroundColor: "#1B1B1B",
    marginTop: 20,
    maxWidth: 370,
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    color: "white",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  customerName: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  starsDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const ReviewCard1 = ({ review }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.papercard} elevation={6}>
      <Typography variant="body2" className={classes.customerName}>
        {review.name}
      </Typography>
      <div style={{ minHeight: 85 }}>
        <Typography variant="body1" style={{ color: "white" }}>
          "{review.text}"
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className={classes.starsDiv}>
          <Avatar className={classes.avatar} src={review.avatar} />

          <StarRatings
            name="rating"
            rating={review.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
          />
        </div>
      </div>
    </Paper>
  );
};

export default ReviewCard1;
