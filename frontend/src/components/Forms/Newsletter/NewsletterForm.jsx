import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  makeStyles,
  Typography,
  Container,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const focusedColor = "orange";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whtie",
  },
  container: {
    maxWidth: "600px",
    backgroundColor: "blue",
    color: "white",
    boxShadow: theme.shadows[10],
    borderRadius: '7px',
    padding: theme.spacing(6),
    direction: "column",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: "2.25rem",
    textAlign: "center",
    fontWeight: 700,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: '65%',
    border: '2px solid blue',
    margin: theme.spacing(1),
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiFormLabel-root": {
      color: "blue",
      backgroundColor: 'white',
      fontWeight: "700",
      fontSize: "0.9rem",
    },
    "& input": {
      backgroundColor: 'white',
      color: "blue",
      borderRadius: '7px'
    },
  },
  submit: {
    height: '50px',
    width: '100px',
    backgroundColor: 'white',
    color: 'blue',
    '&hover': {
      backgroundColor: 'white',
      color: 'blue'
    }
  },
  error: {
    color: theme.palette.error.main,
  },
  text: {
    marginTop: 5,
    color: "white",
  },
}));

export default function NewsletterForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          Subscribe to our Newsletter
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <TextField
            className={classes.input}
            autoComplete="email"
            name="emailaddress"
            variant="outlined"
            notchedOutline
            placeholder="Your Email"
            required
            id="emailaddress"
            label="Email Address"
          />
              <CustomButton
                variant="contained"
                disabled={state !== "initial"}
                type={state === "success" ? "button" : "submit"}
                className={classes.submit}
                endIcon={state === "success" ? <CheckIcon /> : null}
              >
                {state === "success" ? "Subscribed" : "Submit"}
              </CustomButton>
        </form>
        <Typography
          variant="body2"
          className={error ? classes.error : classes.text}
          align="center"
          gutterBottom
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "No spam, just news."}
        </Typography>
      </Container>
    </Box>
  );
}
