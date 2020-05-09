import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// UI - Components
import Card from '../UI/Card';

const styles = StyleSheet.create({
  renderItem: {
    flex: 1
  }
});

const DetailDesc = ({ renderItem, content }) => (
  <Card>
    {content.map(desc => (
      <Text key={desc}>{desc}</Text>
    ))}
    <View style={styles.renderItem}>{renderItem}</View>
  </Card>
);

export default DetailDesc;
