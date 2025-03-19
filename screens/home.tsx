import { StyleSheet, Text, View } from 'react-native';
import ButtonCreate from '../components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App para crear notas!!!</Text>
      <ButtonCreate/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#110022',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#DCDCDC',
    fontSize: 20,
  }
});
