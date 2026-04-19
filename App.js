import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Question from './src/components/Question'
import Summary from './src/components/Summary';
import QuestionData from './src/QuestionData';

const Stack = createNativeStackNavigator(); 


export { Question, Summary };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
        <Stack.Screen name="Question">
          {(props) => (
            <Question {...props} route={{ ...props.route, params: { data: QuestionData, index: 0, answers: [] } }} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}