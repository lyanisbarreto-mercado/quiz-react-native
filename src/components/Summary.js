import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Question from './Question'
import QuestionData from '../QuestionData'
import { useRoute } from '@react-navigation/native'

const Summary = () => {
  const route = useRoute();
  const { score , answers } = route.params;

  return (
    <View style={styles.container}>
      <Text testID='total' style={styles.finalScore}>
        You got: {score}/3 correct!
      </Text>

      {QuestionData.map((item, index) => {
        const userAnswer = answers[index];

        return (
          <View style={styles.question} key={index}>
            <Text>{item.prompt}</Text>

            {item.choices.map((choice, i) => {
              const isSelected = Array.isArray(userAnswer)
                ? userAnswer.includes(i)
                : userAnswer === i;
                const isCorrect = Array.isArray(item.correct)
                ? item.correct.includes(i)
                : item.correct === i;

              return (
                <Text
                  key={i}
                  style={[
                    styles.answer,
                    isSelected && !isCorrect && styles.wrong,
                    isSelected && isCorrect && styles.chosen,
                    isCorrect && styles.correct, 

                  ]}
                >
                  - {choice}
                </Text>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default Summary

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10,
  },

  finalScore: {
    fontSize: 20,
    margin: 20,
  },

  question: {
    margin: 10,
    alignItems: 'left'
  },
  answer: {
    margin: 10
  },

  correct: {
    backgroundColor: 'lightgreen',
    borderRadius: 20,
  },

  wrong: {
    textDecorationLine: 'line-through'
  },

  chosen: {
    fontWeight: 'bold'
  }

});