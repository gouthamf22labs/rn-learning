import React from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';
import {Field, Formik} from 'formik';
import CustomInput from '../components/CustomInput';
import CustomCheckbox from '../components/CustomCheckbox';
import {fonts} from '../utils/fonts';
import {loginSchema} from '../validationSchemas/loginScreenSchema';

const Signup = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={loginSchema}>
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
            <View style={{marginTop: 8}}>
              <Field name="checkbox" component={CustomCheckbox} />
            </View>
            <TouchableWithoutFeedback
              onPress={handleSubmit}
              disabled={!isValid}>
              <View style={styles.loginButton}>
                <Text style={styles.textStyle}>Sign up</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.bottomSizeContainer}>
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

            <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.bottomTextThin}>
                  Already have an account
                </Text>
                <Text style={styles.bottomTextThinGreen}>Sign in</Text>
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
    borderRadius: 30,
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
export default Signup;
