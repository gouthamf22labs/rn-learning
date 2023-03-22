import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomInput from '../components/CustomInput';
import {fonts} from '../utils/fonts';
import {signupScreenSchema} from '../validationSchemas/signupScreenSchema';

const Signup = ({navigation}: any) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        checkbox: false,
      }}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={signupScreenSchema}>
      {({
        handleSubmit,
        isValid,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        values,
      }) => (
        <View style={styles.container}>
          <View style={styles.widthContainer}>
            <Text style={styles.largeTextStyle}>Create your</Text>
            <Text style={[styles.largeTextStyle, {marginBottom: 50}]}>
              Account
            </Text>
            <View style={styles.fieldcontainer}>
              <CustomInput
                name="email"
                style={styles.textInputStyle}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="white"
              />
              {errors['email'] && touched['email'] && (
                <Text style={styles.errorText}>{errors['email']}</Text>
              )}
              <CustomInput
                style={styles.textInputStyle}
                handleChange={handleChange}
                handleBlur={handleBlur}
                name="password"
                placeholder="password"
                secureTextEntry
                placeholderTextColor="white"
              />
              {errors['password'] && touched['password'] && (
                <Text style={styles.errorText}>{errors['password']}</Text>
              )}
              <CustomCheckbox
                name="checkbox"
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                values={values}
                style={{marginTop: 8}}
              />
            </View>
            <CustomButton
              handleSubmit={handleSubmit}
              isValid={isValid}
              buttonText="Sign up"
            />
            <Text
              style={[
                styles.bottomTextThinGreen,
                {marginTop: 30, textAlign: 'center'},
              ]}
              onPress={() => navigation.navigate('forgotflow')}>
              Forgot the password?
            </Text>
            <View style={styles.bottomTextContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View style={styles.horizontalLineStyle} />
              </View>
              <Text style={styles.bottomText}>or Continue with</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View style={styles.horizontalLineStyle} />
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.bottomTextThin}>
                  Already have an account?
                </Text>
                <Text
                  onPress={() => navigation.navigate('loginpage')}
                  style={styles.bottomTextThinGreen}>
                  Sign in
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  textInputStyle: {
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
  textContainer: {
    width: '100%',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'left',
  },
  largeTextStyle: {
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.extraBold,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.regular,
  },
  fieldcontainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },

  bottomTextContainer: {
    marginTop: 30,
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
export default Signup;
