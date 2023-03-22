import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {fonts} from '../utils/fonts';
import CustomButton from '../components/CustomButton';

const ForgotPassword = ({navigation}: any) => {
  const [state, setState] = useState('sms');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.imageContainer}>
            <Text style={styles.largeTextStyle}>Logo</Text>
          </View>

          <Text style={[styles.textStyle, {marginTop: 30}]}>
            Select which contact details should we use to reset the password
          </Text>
          <TouchableWithoutFeedback
            style={
              state === 'sms' ? styles.cardStylesBorderGreen : styles.cardStyles
            }
            onPress={() => setState('sms')}>
            <View></View>
            <View>
              <Text style={styles.bottomTextThinGrey}>via SMS:</Text>
              <Text style={styles.bottomTextThin}>+1 111*****09</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={
              state === 'email'
                ? styles.cardStylesBorderGreen
                : styles.cardStyles
            }
            onPress={() => setState('email')}>
            <View></View>
            <View>
              <Text style={styles.bottomTextThinGrey}>via Email:</Text>
              <Text style={styles.bottomTextThin}>dan**in@yourdomain.com</Text>
            </View>
          </TouchableWithoutFeedback>
          <CustomButton
            buttonText="Continue"
            onPress={() => navigation.navigate('otppage')}
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
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
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
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 40,
  },
  bottomTextThinGrey: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: fonts.extraBold,
  },
  cardStyles: {
    backgroundColor: '#1F222A',
    width: '100%',
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#9E9E9E',
  },
  cardStylesBorderGreen: {
    backgroundColor: '#1F222A',
    width: '100%',
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#1DBA5F',
  },
});
export default ForgotPassword;
