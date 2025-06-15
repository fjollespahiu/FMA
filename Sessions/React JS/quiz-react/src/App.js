import { useState } from 'react';

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2  // index of "Paris"
    },
    {
      question: "What color is the sky?",
      options: ["Green", "Blue", "Red", "Yellow"],
      answer: 1  // index of "Blue"
    },
    {
      question: "How many legs does a spider have?",
      options: ["4", "6", "8", "10"],
      answer: 2  // index of "8"
    }
  ];

  const [userAnswers, setUserAnswers] = useState([]);
  const handleAnswer = (i, j) => {
    const chosenOption = [...userAnswers]
    chosenOption[i] = j

    setUserAnswers(chosenOption)
  }

  const [score, setScore] = useState(0);
  const handleScore = () => {
        setScore(questions.filter((q, i) => userAnswers[i] === q.answer).length)

  };

  return (
    <div>
      <h2>Simple Quiz</h2>
      {
        questions.map((q, i) => {
          return (<div key={i}>
            <p>{q.question}</p>
            {
              q.options.map((opt, j) => {
                return (
                  <div key={j}>

                    <label >
                      <input
                        type="radio"
                        name={`q${i}`}
                        value={j}
                        onChange={() => handleAnswer(i, j)}
                      />{opt}
                    </label>
                  </div>
                )
              })
            }
            <br />
          </div>
          )
        })
      }
      {

      }
      <p>You scored {score} out of {questions.length}</p>
      <button onClick={handleScore}>Submit Quiz</button>
    </div>
  );
}

export default App;
