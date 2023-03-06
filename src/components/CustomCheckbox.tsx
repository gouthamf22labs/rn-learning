import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {StyleSheet} from 'react-native';
import {fonts} from '../utils/fonts';

const CustomCheckbox = (props: any) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor="#1AB65C"
      unfillColor="#182724"
      text="Remember me"
      textStyle={{textDecorationLine: 'none'}}
      style={styles.checkBoxStyle}
      innerIconStyle={{
        borderRadius: 10,
        borderWidth: 2,
      }}
    />
  );
};
const styles = StyleSheet.create({
  checkBoxStyle: {
    marginTop: 10,
    borderRadius: 4,
    fontFamily: fonts.regular,
  },
});

export default CustomCheckbox;
