import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 345,
    minWidth: 345,
    margin: 10,
    borderRadius: '7px',
    backgroundColor: "blue",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows[14],
    },
  },
  media: {
    height: 180,
    margin: "0px 0px 10px 0px",
    backgroundColor: "#212121",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "blue",
    padding: 10,
    color: "#fafafa",
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
    width: "100%",
    backgroundColor: "blue",
  },
  readMoreButton: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    display: "flex",
    justifyContent: "center",
    fontSize: "2px",
    backgroundColor: 'white',
    color: "blue",
    marginRight: 10,
    marginBottom: 5,
  },
  btnText: {
    padding: 0,
    margin: 0,
    fontSize: "14px",
  },
}));

export default function ArticleCard({ article }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={6}>
      <CardContent className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image={article.image}
          title={article.title}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
        </div>
        <Typography variant="body2" component="p">
          {article.preview}
        </Typography>
      </CardContent>
      <div className={classes.cardActions}>
        <Button
          variant="text"
          color="inherit"
          size="small"
          justifyContent="center"
          component={Link}
          to={`/articles/${article.id}`}
          className={classes.readMoreButton}
        >
          <h4 className={classes.btnText}>More</h4>
        </Button>
      </div>
    </Card>
  );
}
