import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  answersContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "250px",
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
    backgroundColor: "#1c1c1c",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
  },
  labelDiv: {
    width: '70%',
  },
  label: {
    color: "white",
    fontSize: "16px",
    display: "inline",
    flexDirection: "row",
    textAlign: 'right',
    width: '100px',
  },
}));

const Questionnaire = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState({});
  const [previous, setPrevious] = useState(false);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [checked, setChecked] = useState(false);
  const [end, setEnd] = useState(false);
  const [prevArr, setPrevArr] = useState([]);

  const questions = [
    {
      question: "What is your favorite food?",
      answers: [
        { label: "Pizza", value: "pizza" },
        { label: "Sushi", value: "sushi" },
        { label: "Steak", value: "steak" },
        { label: "Salad", value: "salad" },
      ],
      name: "food",
    },
    {
      question: "What is your favorite animal?",
      answers: [
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
        { label: "Elephant", value: "elephant" },
        { label: "Lion", value: "lion" },
      ],
      name: "animal",
    },
    {
      question: "What is your favorite movie?",
      answers: [
        { label: "The Shawshank Redemption", value: "shawshank" },
        { label: "The Godfather", value: "godfather" },
        { label: "The Dark Knight", value: "darkknight" },
        { label: "The Godfather: Part II", value: "godfather2" },
      ],
      name: "movie",
    },
  ];

  const handleCheck = (e) => {

    setChecked(e.target.value);
    console.log("checked");
  };

  const nextButton = () => {
    if (checked !== false) {
      setResults(prev => [...prev, checked])
      setCount(count + 1);
      console.log(results);
    }
    setChecked(false)
    console.log(checked)
  };

  const previousButton = () => {
    setResults(prev => {let quest = [...prev]
    quest.splice(count, 1)
    return quest})
    setCount(count - 1);
    console.log(results)
  };

  useEffect(() => {
    if(results.length === 3){
      setEnd(true)
    }
  }, [results])

  useEffect(() => {
    if(results.length !== 3){
    setQuestion(questions[count]);
    setAnswer(questions[count].answers);
    console.log(results)
    if (count > 0) {
      setPrevious(true);
    } else {
      setPrevious(false);
    }
  }
  }, [count]);

  return (
    <div className={classes.questionContainer}>
      {count <= 2 && (
        <>
          <div>
            <h3>{question.question}</h3>
          </div>
          <div className={classes.answersContainer}>
            {answer.map((x) => (
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
            ))}
          </div>
          <div>
            {previous && <button onClick={previousButton}>Previous</button>}
            <button onClick={nextButton}>Next</button>
          </div>
        </>
      )}
      {end && (
        <div>
          <h2>{results}</h2>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
