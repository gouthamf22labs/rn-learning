import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {fonts} from '../utils/fonts';

function CustomDateTimePicker(props: any) {
  const {setFieldValue, name, setFieldTouched} = props;

  const [date, setDate] = useState(() => new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.textInput}>
      <TouchableWithoutFeedback
        onPress={() => setOpen(true)}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          androidVariant="nativeAndroid"
          onDateChange={e => {
            console.log(e);
            setDate(e);
          }}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setFieldValue(name, date?.toLocaleString().split(',')[0]);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text
          style={{
            color: 'grey',
            width: '100%',
            height: '100%',
            textAlignVertical: 'center',
          }}>
          {date ? date.toLocaleString().split(',')[0] : 'Date picker'}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
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
});
export default CustomDateTimePicker;
