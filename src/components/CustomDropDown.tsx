import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {fonts} from '../utils/fonts';

const data = [
  {label: 'male', value: 'male'},
  {label: 'female', value: 'male'},
  {label: 'non-binary', value: 'male'},
];

const CustomDropDown = (props: any) => {
  const {setFieldValue, name, setFieldTouched} = props;

  const [value] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? name : '...'}
        value={value}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setIsFocus(false);
          console.log(item.value);
          setFieldValue(name, item.value);
        }}
      />
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
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
  dropdown: {
    width: '100%',
    flex: 1,
    backgroundColor: '#1F222A',
  },

  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
});
