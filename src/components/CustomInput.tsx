import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

const CustomInput = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: '100%',
    margin: 10,
    color: 'white',
    backgroundColor: '#1F222A',
    borderColor: '#1AB65C',
    borderWidth: 1.5,
    borderRadius: 8,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});
export default CustomInput;
