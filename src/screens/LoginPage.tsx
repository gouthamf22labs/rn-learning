import React from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';
import {Field, Formik} from 'formik';
import CustomInput from '../components/CustomInput';
import * as yup from 'yup';
import {emailSchema} from '../validationSchemas/emailSchema';
import {passwordSchema} from '../validationSchemas/passwordSchema';
import CustomCheckbox from '../components/CustomCheckbox';
import {fonts} from '../utils/fonts';

const signUpValidationSchema = yup.object().shape({
  email: emailSchema.email,
  password: passwordSchema.password,
});

const LoginPage = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={signUpValidationSchema}>
      {({handleSubmit, isValid}) => (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.largeTextStyle}>Create your</Text>
            <Text style={[styles.largeTextStyle, {marginBottom: 50}]}>
              Account
            </Text>
          </View>
          <View style={styles.fieldcontainer}>
            <Field
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="white"
              component={CustomInput}
            />
            <Field
              name="password"
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="white"
              component={CustomInput}
            />
            <View>
              <Field name="checkbox" component={CustomCheckbox} />
            </View>
            <TouchableWithoutFeedback
              onPress={handleSubmit}
              disabled={!isValid}>
              <View style={styles.loginButton}>
                <Text style={styles.textStyle}>Login</Text>
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
    width: '80%',
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
});
export default LoginPage;
