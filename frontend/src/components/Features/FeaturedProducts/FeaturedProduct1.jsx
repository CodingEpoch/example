import { Grid, useTheme, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TitleBlock from "../../Parts/TitleBlock";
import ProductCard1 from "./ProductCard1";
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    width: "100%",
  },
  cardContainer: {
    justifyContent: "center",
    display: "flex",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  flexGrid: {
    justifyContent: "center",
    display: "flex",
    maxWidth: "100%",
  },
  paper: {
    backgroundColor: "#242424",
    width: "70%",
    padding: 20,
  },
}));

function FeaturedProducts1({ products }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.flexGrid}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <TitleBlock
              subtitle="Featured Products"
              title="Check out our top picks"
              description="These products have been hand-selected by our team and are sure to
              impress."
              alignment="Center"
              showDivider={false}
            />
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{ marginTop: 10 }}
            >
              {products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  key={product.id}
                  className={classes.cardContainer}
                >
                  <ProductCard1 product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default FeaturedProducts1;
