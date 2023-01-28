import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import articles from "./articles.json";
import ArticleCard from "./ArticleCard";
import TitleBlock from "../../Parts/TitleBlock";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    color: "#fafafa",
    [theme.breakpoints.down("1100")]: {
      flexDirection: "column",
    },
  },
  cardroot: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 345,
    minWidth: 345,
    margin: 10,
    backgroundColor: "#212121",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
<<<<<<< HEAD
  media: {
    height: 180,
    margin: "0px 0px 10px 0px",
    backgroundColor: "#212121",
    
  },
  actionArea: {
    "&:hover": {
      opacity: '.8',
    },
  },
  actionAreaLink: {
    textDecoration: "none",
    color: "inherit",
  },
=======
>>>>>>> Paintersrp/main
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#212121",
    padding: 10,
    color: "#fafafa",
  },
}));

export default function LatestNews() {
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        setArticlesData(articles);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[0, 1, 2].map((article) => (
          <Grid item key={article} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <h1>Loading</h1>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        An error occurred while loading the articles.
      </Typography>
    );
  }

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <TitleBlock
          subtitle="In the Knows"
          title="Latest News"
          alignment="center"
          showDivider={false}
        />
      </Grid>
      {articlesData.map((article) => (
        <Grid
          item
          key={article.id}
          xs={12}
          sm={6}
          md={4}
          className={classes.cardroot}
        >
<<<<<<< HEAD
          <Card className={classes.card}>
            <CardActionArea
              component={Link}
              to={`/articles/${article.id}`}
              className={classes.actionArea}
            >
              {" "}
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" className={classes.title} component="h2">
                  {article.title}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={article.image}
                  title={article.title}
                />

                <Typography variant="body2" component="p">
                  {article.preview}
                </Typography>
              </CardContent>
            </CardActionArea>
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
=======
          <ArticleCard article={article} />
>>>>>>> Paintersrp/main
        </Grid>
      ))}
    </Grid>
  );
}
