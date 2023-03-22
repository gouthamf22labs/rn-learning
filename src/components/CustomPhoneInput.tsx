import React from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {fonts} from '../utils/fonts';

function CustomPhoneInput(props: any): JSX.Element {
  const {setFieldValue, name, values, setFieldTouched} = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <PhoneInput
          defaultValue={values.phonenumber}
          value={values.phonenumber}
          defaultCode="IN"
          layout="first"
          textInputStyle={{color: 'grey'}}
          containerStyle={{backgroundColor: '#1F222A'}}
          textContainerStyle={{backgroundColor: '#1F222A'}}
          codeTextStyle={{color: 'grey'}}
          onChangeText={text => {
            setFieldValue(name, text);
          }}
        />
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    margin: 10,
    backgroundColor: '#1F222A',
    borderColor: '#1F222A',
    borderWidth: 1.5,
    borderRadius: 8,
    fontFamily: fonts.regular,
  },
  wrapper: {
    height: '100%',
    width: '100%',
  },
});
export default CustomPhoneInput;
