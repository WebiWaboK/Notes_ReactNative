import { StyleSheet, Text, View } from 'react-native';
import ButtonCreate from '../components/button';
import { useLocalSearchParams } from 'expo-router';
export default function App() {

  const { title, note } = useLocalSearchParams<{ title: string; note: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App para crear notas!!!</Text>
      <ButtonCreate/>

      {title && note && (
                <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>{title}</Text>
                    <Text style={styles.noteText}>{note}</Text>
                </View>
            )}
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
  },

  noteContainer: {
    backgroundColor: '#333',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },

  noteTitle: {
    color: '#DCDCDC',
    fontSize: 18,
    fontWeight: 'bold',
  },

  noteText: {
    color: '#DCDCDC',
    fontSize: 16,
  },
});
