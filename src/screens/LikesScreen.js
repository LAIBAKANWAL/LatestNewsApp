import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LikesScreen = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likes: {likes}</Text>
      <Button title="Like" onPress={handleLike} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default LikesScreen
