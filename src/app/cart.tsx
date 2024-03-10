import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, FlatList } from 'react-native';
import { useCart } from '@/providers/CartProvider';
import CartListItem from '@/components/CartListItem';

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <Stack.Screen options={{ animation: 'slide_from_bottom' }} />
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;
