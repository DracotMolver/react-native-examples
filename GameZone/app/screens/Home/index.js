import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// UI - Components
import ModalHOC from '../../components/UI/Modal';
// Components
import ItemList from '../../components/ItemList';
// styles
import { globalStyles } from '../../assets/styles/global';

const styles = StyleSheet.create({
  modalToggleBtn: {
    marginBottom: 10,
    borderRadius: 3,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10
  }
});

const Home = () => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Gotta catch Them All(again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3'
    }
  ]);

  const navigation = useNavigation();
  const { onOpen, Modal } = ModalHOC();

  function onPressGoReviewHandler(item) {
    navigation.navigate('ReviewDetails', item);
  }

  return (
    <View style={globalStyles.container}>
      <Modal title="Add New Game" />
      <Icon
        onPress={onOpen}
        color="blue"
        style={styles.modalToggleBtn}
        size={32}
        name="add"
      />
      <ItemList
        keyContent="title"
        onPress={onPressGoReviewHandler}
        data={reviews}
      />
    </View>
  );
};

export default Home;
