import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';
import {fonts} from '../utils/fonts';
const CELL_COUNT = 4;

const OTPPage = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  let timerRef = useRef(0);
  const [timer, setTimer] = useState(60);
  function timerFunction() {
    timerRef.current = setInterval(() => setTimer(prev => prev - 1), 1000);
  }
  useEffect(() => {
    timerFunction();
    return () => clearInterval(timerRef.current);
  }, []);
  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerRef.current);
    }
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <View style={{justifyContent: 'flex-end', flex: 1.5}}>
          <View style={styles.imageContainer}></View>

          <View style={styles.textContainer}>
            <Text style={[styles.bottomTextThin, {marginBottom: 10}]}>
              Code has been sent to +11 111*******99
            </Text>
          </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={styles.textContainer}>
            {timer > 0 ? (
              <Text style={[styles.bottomTextThin, {marginTop: 50}]}>
                Resend code in
                <Text style={{color: 'green'}}> {timer}</Text>
                <Text> s</Text>
              </Text>
            ) : (
              <Text
                style={[
                  styles.bottomTextThin,
                  {marginTop: 50},
                  {color: 'green'},
                ]}>
                Resend the code
              </Text>
            )}
          </View>
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
          <CustomButton
            buttonText="Verify"
            onPress={() => navigation.navigate('newpasswordpage')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181A20',
  },
  subContainer: {
    width: '90%',
    flex: 1,
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 100,
  },
  largeTextStyle: {
    color: 'white',
    fontSize: 40,
    marginLeft: 20,
    fontFamily: fonts.extraBold,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.regular,
  },

  bottomSizeContainer: {
    width: '100%',
    backgroundColor: 'red',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer: {
    flexDirection: 'row',
  },

  bottomTextThin: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.extraBold,
  },
  bottomTextThinGreen: {
    color: '#1AB65C',
    fontSize: 16,
    fontFamily: fonts.thin,
    marginLeft: 5,
  },
  verifyButtonStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 30,
  },
  bottomTextThinGrey: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: fonts.extraBold,
  },

  root: {
    padding: 20,
    minHeight: 300,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#9E9E9E',
  },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 50,
  },
  cell: {
    width: 80,
    height: 65,
    lineHeight: 62,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#9E9E9E',
    textAlign: 'center',
    backgroundColor: '#1F222A',
    color: 'white',
    fontFamily: fonts.extraBold,
  },

  focusCell: {
    borderColor: '#1AB65C',
    backgroundColor: '#182724',
  },
});
export default OTPPage;
