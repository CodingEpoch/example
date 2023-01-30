import React, { useState } from "react";
import { makeStyles, InputLabel } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  answersContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "250px",
    alignItems: 'flex-start'
  },
  answerContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: "10px",
  },
  questionContainer: {
    margin: "auto",
    color: "white",
    marginTop: '15px',
    backgroundColor: "#1c1c1c",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
  },
  labelDiv: {
    width: "50%",
    justifyContent: 'flex-start',
    display: 'flex'
  },
  label: {
    color: "white",
    fontSize: "16px",
    display: "flex",
    flexDirection: "row",
    textAlign: "right",
    width: "100px",
    justifyContent: 'flex-start'
  },
}));

const Poll = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState({});
  const [results, setResults] = useState([]);
  const [checked, setChecked] = useState(false);
  const [end, setEnd] = useState(false);

  const questions = [
    {
      question: "What is your favorite food?",
      answers: [
        { label: "Pizza", value: "pizza", results: "25%" },
        { label: "Sushi", value: "sushi", results: "25%" },
        { label: "Steak", value: "steak", results: "25%" },
        { label: "Salad", value: "salad", results: "25%" },
      ],
      name: "food",
    },
  ];

  const handleCheck = (e) => {
    setChecked(e.target.value);
    console.log("checked");
  };

  const submitButton = () => {
    setResults(checked);
    setEnd(true);
  };

  useEffect(() => {
    setQuestion(questions[0]);
    setAnswer(questions[0].answers);
  }, []);

  return (
    <div className={classes.questionContainer}>
      <>
        <div>
            <h2>Poll of the Day</h2>
          <h3>{question.question}</h3>
        </div>
        <div className={classes.answersContainer}>
          {!end
            ? answer.map((x) => (
                <div className={classes.answerContainer}>
                  <div className={classes.labelDiv}>
                    <label className={classes.label}>{x.label}</label>
                  </div>
                  <div>
                    <input
                      key={x.value}
                      value={x.label}
                      onChange={handleCheck}
                      name={question.name}
                      type="radio"
                    />
                  </div>
                </div>
              ))
            : answer.map((ans) => {
                return (
                  <div className={classes.answerContainer}>
                    <div className={classes.labelDiv}>
                      <label className={classes.label}>{ans.label}</label>
                    </div>
                    <div>
                      <input
                        key={ans.value}
                        value={ans.label}
                        onChange={handleCheck}
                        name={question.name}
                        type="radio"
                      />
                      <span>{ans.results}</span>
                    </div>
                  </div>
                );
              })}
        </div>
        <div>
          <button onClick={submitButton}>Submit</button>
        </div>
      </>
    </div>
  );
};

export default Poll;
