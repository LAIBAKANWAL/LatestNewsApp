import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Share, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsRequest } from '../redux/reducer/news_reducer';

const NewsFeedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.urlToImage ? <Image source={{ uri: item.urlToImage }} style={styles.image} /> : null}
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('Likes')}>
          <Text style={styles.action}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
          <Text style={styles.action}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShare(item.url)}>
          <Text style={styles.action}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleShare = async (url) => {
    try {
      const result = await Share.share({
        message: `Check out this news: ${url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  action: {
    color: 'blue',
  },
});

export default NewsFeedScreen;
