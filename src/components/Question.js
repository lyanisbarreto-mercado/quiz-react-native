import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonGroup } from '@rneui/themed';

import QuestionData from '../QuestionData'

const Question = ({ navigation }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);

    const [selectedChoiceMulti, setSelectedChoiceMulti] = useState([])
    const isMulti = QuestionData[currentQuestion].type === 'multiple-answer';

    const [score, setScore] = useState(0);
    const [choice, setChoice] = useState(null);
    const [currentAnswers, setCurrentAnswers] = useState([]);

    console.log(choice);
    console.log(score);
        const progress = () => {
    let userAnswer;

    if (isMulti) {
        userAnswer = selectedChoiceMulti;

        const correctOptions = QuestionData[currentQuestion].correct;

        const correctChoice =
        correctOptions.length === selectedChoiceMulti.length &&
        correctOptions.every(i => selectedChoiceMulti.includes(i));

        if (correctChoice) {
        setScore(prev => prev + 1);
        }

    } else {
        userAnswer = selectedChoice;

        const correctChoice =
        QuestionData[currentQuestion].correct === selectedChoice;

        if (correctChoice) {
        setScore(prev => prev + 1);
        }
    }

    const updatedAnswers = [...currentAnswers, userAnswer];
    setCurrentAnswers(updatedAnswers);

    if (currentQuestion === QuestionData.length - 1) {
        navigation.navigate("Summary", { score, answers: updatedAnswers
        });
        return;
    }

    setCurrentQuestion(prev => prev + 1);
    setSelectedChoice(null);
    setSelectedChoiceMulti([]);
    };

    const handleOption = (index) => {

        if (isMulti) {
            let updated;

            if (selectedChoiceMulti.includes(index)) {
                updated = selectedChoiceMulti.filter( i => i !== index)
            } else {
                updated = [...selectedChoiceMulti, index];
            }
                setSelectedChoiceMulti(updated)
            } else {
            setSelectedChoice(index);

            const correctChoice = QuestionData[currentQuestion].correct === index;

            
            
            if (correctChoice) {
                setChoice(correctChoice);
                setScore((prevScore) => prevScore + 1);
            }
            
        }
         
        };
        

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{QuestionData[currentQuestion].prompt}</Text>
      
                <ButtonGroup
                testID="choices"
                buttons={QuestionData[currentQuestion].choices}
                {...(isMulti
                    ? {selectedIndexes: selectedChoiceMulti}
                    : {selectedIndex: selectedChoice}
                )}
                onPress={(value) => handleOption(value)}
                vertical 
                />
        
      <Pressable onPress={progress}>
        <Text style={styles.progress} testID='next-question'>Next Question</Text>
      </Pressable>
    </View>
  )
}

export default Question

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },

  question: {
    fontSize: 20,
    paddingBottom: 20,
  },

  options: {
    backgroundColor: "lightpink",
    padding: 10,
    marginBottom: 10,
  },

  progress: {
    textAlign: "center",
    margin: 20,
    border: 'solid', 
    borderColor: "lightpink",
  },

  pressed: {
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
  }
})
