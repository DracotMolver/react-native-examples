import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
// UI - Components
import Card from '../UI/Card';
// styles
import { globalStyles } from '../../assets/styles/global';

const ItemList = ({ keyContent, onPress, data }) => (
  <FlatList
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => onPress(item)}>
        <Card>
          <Text style={globalStyles.title}>{item[keyContent]}</Text>
        </Card>
      </TouchableOpacity>
    )}
    data={data}
  />
);

export default ItemList;
