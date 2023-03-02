import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {StyleSheet} from 'react-native';

const CustomCheckbox = (props: any) => {
  return (
    <>
      <BouncyCheckbox
        size={25}
        fillColor="green"
        unfillColor="#182724"
        text="Remember me"
        style={styles.checkBoxStyle}
      />
    </>
  );
};
const styles = StyleSheet.create({
  checkBoxStyle: {
    marginTop: 10,
    borderRadius: 0,
  },
});

export default CustomCheckbox;
