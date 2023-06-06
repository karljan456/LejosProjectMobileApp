import { StyleSheet, View } from 'react-native';
import Selector from './components/Selector';

export default function App() {

  return (
    <View style={styles.container}>
      <Selector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CBB17',
    height: '100%',
    width: '100%',
  },
});
