import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';
import { StripeProvider } from '@stripe/stripe-react-native';
export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey='pk_test_51N9rxbGNEwXQC17lfE44gnaQICdOPJPoLKFPpmvSa5iNmHoNyfex4OKFAzFcd8ViJqVCLNOrIqMZrNDlzw2nEuVK007h6quzav'>
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>

      </MovieContext>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
