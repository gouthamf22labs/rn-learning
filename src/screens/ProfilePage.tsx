import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {Field, Formik} from 'formik';
import CustomInput from '../components/CustomInput';
import {fonts} from '../utils/fonts';
import {loginSchema} from '../validationSchemas/loginScreenSchema';

const ProfilePage = () => {
  return (
    <Formik
      initialValues={{
        fullname: '',
        nickname: '',
        dob: '',
        email: '',
        phonenumber: '',
        gender: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={loginSchema}>
      {({handleSubmit, isValid}) => (
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.textStyle}>Fill Your Profile</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStyle}>Image picker</Text>
          </View>
          <View style={styles.fieldcontainer}>
            <Field
              name="fullname"
              placeholder="Full Name"
              keyboardType="email-address"
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />
            <Field
              name="nickname"
              placeholder="Nickname"
              secureTextEntry
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />
            <Field
              name="dob"
              placeholder="Date of Birth"
              secureTextEntry
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />
            <Field
              name="email"
              placeholder="Email"
              secureTextEntry
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />
            <Field
              name="phonenumber"
              placeholder="Phone Number"
              secureTextEntry
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />
            <Field
              name="gender"
              placeholder="Gender"
              secureTextEntry
              placeholderTextColor="#9E9E9E"
              component={CustomInput}
            />

            <TouchableWithoutFeedback
              onPress={handleSubmit}
              disabled={!isValid}>
              <View style={styles.loginButton}>
                <Text style={styles.textStyle}>Continue</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'column',
    alignContent: 'flex-start',
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
  fieldcontainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  bottomSizeContainer: {
    width: '100%',
  },
  bottomTextContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.thin,
  },

  horizontalLineStyle: {
    paddingTop: 5,
    borderColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
  },
  bottomTextThin: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.thin,
  },
  bottomTextThinGreen: {
    color: '#1AB65C',
    fontSize: 16,
    fontFamily: fonts.thin,
    marginLeft: 5,
  },
});
export default ProfilePage;
