import Question from "./components/Question"

const QuestionData = 
[
  {
    "prompt": "I was a girl in the village, doing alright...",
  "type": "multiple-choice",
  "choices": [
    "and then I saw a magical light!",
    "and then a horse came over, became a sight!",
    "then I became a princess overnight!",
    "Why are the lyrics from a kid's show again?",
  ],
  "correct": 2
},
  {
    "prompt": "Which programming languages are best suited for Front-End Site Design?",
  "type": "multiple-answer",
  "choices": [
    "HTML",
    "MongoDB",
    "PHP",
    "CSS",
  ],
  "correct": [0,3]
},
  {
  "prompt": "Will I get an A on this? Pretty please? Pretty pretty please?",
  "type": "true-false",
  "choices": [
    "True",
    "False",
  ],
  "correct": 0
},
]

export default QuestionData