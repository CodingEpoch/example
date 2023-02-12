import HeroCarousel from "../../components/Heroes/HeroCarousel/HeroCarousel";
import StandardImage from "../../components/Images/StandardImage";
import { makeStyles } from "@material-ui/core";

const userStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "auto",
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "300px",
    width: "300px",
  },
});

export default function HeaderComponent1() {
  const classes = userStyles();

  return (
    <div className={`${classes.container}`}>
      <div>
        <HeroCarousel />
      </div>
      <div>
        <StandardImage
          className={classes.image}
          url={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pointgadget.com%2Fwp-content%2Fuploads%2F2020%2F05%2Ffree-stock-images-websites.jpg&f=1&nofb=1&ipt=f78fff3e2e8177f704830347fc14d868952333508af882dd095aa7091f6311d8&ipo=images"
          }
          alt={"photo"}
        />
      </div>
    </div>
  );
}
