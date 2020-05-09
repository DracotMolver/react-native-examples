import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 4,
    backgroundColor: '#fff',
    marginVertical: 6,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: '#333',
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 5,
    elevation: 2,
    flex: 1
  },
  cardContent: {
    margin: 14,
    flex: 1
  }
});

const Card = ({ children }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>{children}</View>
  </View>
);

export default Card;
