import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  productName: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1.5rem",
    margin: 'auto',
    width: '75%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  productPrice: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1.25rem",
  },
  productDescription: {
    fontWeight: "400",
    fontFamily: "Roboto",
    marginTop: theme.spacing(2),
    color: "white",
    fontSize: "0.85rem",
  },
  card: {
    backgroundColor: "#1C1C1C",
    maxWidth: 375,
    minWidth: 325,
    height: "100%",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows[14],
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    width: "100%",
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
    color: "white",
  },
  cardActions: {
    justifyContent: "center",
  },
  button: {
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    minWidth: 100,
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
    },
  },
  titleContainer: {
    display: 'flex',
    margin: 'auto',
    justifyContent: '',
    alignItems: 'center'
  }
}));

function ProductCard1({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={9}>
      <CardMedia
        className={classes.cardMedia}
        image={product.image}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.titleContainer}>
          <Typography
            className={classes.productName}
            component="h2"
          >
            {product.name}
          </Typography>
          <Typography className={classes.productPrice}>
            ${product.price}
          </Typography>
        </div>

        <div style={{ display: "flex", marginLeft: '5px' }}>
          <StarRatings
            rating={product.rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="1.2px"
          />
        </div>
        <Typography className={classes.productDescription}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <CustomButton variant="contained" className={classes.button}>
          View
        </CustomButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard1;
