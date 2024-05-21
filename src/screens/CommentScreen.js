import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const CommentScreen = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a comment"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Post" onPress={addComment} />
      <FlatList
        data={comments}
        renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  comment: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CommentScreen;
