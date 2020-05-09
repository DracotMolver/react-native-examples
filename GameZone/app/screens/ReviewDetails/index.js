import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
// Components
import DetailDesc from '../../components/DetailDesc';
// styles
import { globalStyles, ratingImages } from '../../assets/styles/global';

const ReviewDetails = () => {
  const route = useRoute();
  const { title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
      <DetailDesc
        content={[title, body]}
        renderItem={
          <>
            <Text>GameZone Rating:</Text>
            <Image progressiveRenderingEnabled source={ratingImages[rating]} />
          </>
        }
      />
    </View>
  );
};

export default ReviewDetails;
