import React, { useState } from 'react';
import {
  Modal as ModalNative,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  modalToggleBtn: {
    borderRadius: 3,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginLeft: 16
  }
});

const ModalHOC = () => {
  const [toggle, setToggle] = useState(false);

  function onToggle() {
    setToggle(prevState => !prevState);
  }

  return {
    onOpen: onToggle,
    Modal: ({ title }) => (
      <ModalNative
        animationType="slide"
        transparent={false}
        visible={toggle}
        testID="modal-native">
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text testID="modal-text">{title}</Text>
            <Icon
              onPress={onToggle}
              testID="modal-icon"
              color="blue"
              style={styles.modalToggleBtn}
              size={32}
              name="close"
            />
          </View>
        </SafeAreaView>
      </ModalNative>
    )
  };
};

export default ModalHOC;
