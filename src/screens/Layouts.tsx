import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
function Layouts(): JSX.Element {
  //   const windowwidth = Dimensions.get('window');
  //   const screenwidth = Dimensions.get('screen');
  //   console.log(windowwidth);
  //   console.log(screenwidth);
  React.useEffect(() => {
    const windowwidth = Dimensions.get('window');
    const screenwidth = Dimensions.get('screen');
    console.log('window:', windowwidth);
    console.log('screen', screenwidth);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Layouts</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: 70,
  },
});
export default Layouts;
