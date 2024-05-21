import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NewsFeedScreen from './src/screens/NewsFeedScreen';
import CommentScreen from './src/screens/CommentScreen';
import LikesScreen from './src/screens/LikesScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewsFeed">
          <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
          <Stack.Screen name="Comment" component={CommentScreen} />
          <Stack.Screen name="Likes" component={LikesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
