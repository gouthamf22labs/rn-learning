import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fonts} from '../utils/fonts';

const CustomInput = (props: any) => {
  const {handleChange, errors, name, values, touched, handleBlur, ...rest} =
    props;
  const hasError = errors?.name && touched?.name;
  return (
    <TextInput
      style={[styles.textInput, hasError && styles.errorInput]}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      {...rest}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: '100%',
    margin: 10,
    color: 'white',
    backgroundColor: '#1F222A',
    borderColor: '#1F222A',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingLeft: 18,
    fontFamily: fonts.regular,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});
export default CustomInput;
