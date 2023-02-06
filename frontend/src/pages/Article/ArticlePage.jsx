import { makeStyles } from "@material-ui/core";

const userStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    fontSize: "2.25rem",
  },
  image: {
    height: "300px",
    width: "600px",
  },
  articleContainer: {
    width: "72%",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    padding: "15px",
    boxShadow: "2px 2px 9px black, -2px -2px 9px black",
    borderRadius: "7px",
  },
  textContainer: {
    width: "50%",
  },
  title: {
    textAlign: "center",
  },
  imageContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  img: {
    width: "100%",
  },
  button: {
    width: "50%",
  },
});

const articleData = [
  {
    id: 1,
    title: "dick",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repellat et quas adipisci nesciunt delectus beatae voluptas veniam accusantium error recusandae tempora doloremque reprehenderit sed pariatur assumenda repudiandae nostrum ipsa?",
    image:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "dick",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repellat et quas adipisci nesciunt delectus beatae voluptas veniam accusantium error recusandae tempora doloremque reprehenderit sed pariatur assumenda repudiandae nostrum ipsa?",
    image:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "dick",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repellat et quas adipisci nesciunt delectus beatae voluptas veniam accusantium error recusandae tempora doloremque reprehenderit sed pariatur assumenda repudiandae nostrum ipsa?",
    image:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

function ArticlePage() {
  const classes = userStyles();

  return (
    <div className="landing-container">
      <div className={classes.container}>
        <div>
          <h2 className={`${classes.header} text-primary`}>Articles</h2>
        </div>
        <div>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>

        {articleData.map((item) => {
          return (
            <>
              <div key={item.id} className={`${classes.articleContainer} `}>
                <div className={`${classes.textContainer}`}>
                  <h3 className={classes.title}>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
                <div className={classes.imageContainer}>
                  <img
                    className={classes.img}
                    src="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                  <button className={`${classes.button} bg-primary text-white`}>
                    Read More
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <div>
            <h2>Recommended Articles</h2>
          </div>
          <div>
            {articleData.map((item) => {
              return (
                <div>
                  <h3>{item.title}</h3>
                  <img src={item.image} alt="" />
                  <p>{item.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
