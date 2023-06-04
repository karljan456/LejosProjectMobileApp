import { StyleSheet, Text, View } from 'react-native';
import Controller from './components/Controller';

export default function App() {

  return (
    <View style={styles.container}>
      <Controller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CBB17',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height:'100%'
  },
});
