import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Product Detail Screen id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
