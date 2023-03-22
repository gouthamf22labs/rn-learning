import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request} from 'react-native-permissions';

import {Formik} from 'formik';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../components/CustomButton';
import CustomDateTimePicker from '../components/CustomDateTimePicker';
import CustomDropDown from '../components/CustomDropDown';
import CustomInput from '../components/CustomInput';
import CustomPhoneInput from '../components/CustomPhoneInput';
import {fonts} from '../utils/fonts';
import {profileScreenSchema} from '../validationSchemas/profileScreenSchema';

const ProfilePage = () => {
  const profilePath = '../../assets/images/user-profile.png';
  const pickSingle = (setFieldValue: any) => {
    request(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO).then(result => {
      console.log(result);
      ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
        sortOrder: 'none',
        compressImageMaxWidth: 1000,
        compressImageMaxHeight: 1000,
        compressImageQuality: 1,
        compressVideoPreset: 'MediumQuality',
        includeExif: true,
        cropperStatusBarColor: 'white',
        cropperToolbarColor: 'white',
        cropperActiveWidgetColor: 'white',
        cropperToolbarWidgetColor: '#3498DB',
      })
        .then((image: any) => {
          console.log('received image', image.path);
          setFieldValue('image', image.path);
        })
        .catch(e => {
          console.log(e);
          Alert.alert(e.message ? e.message : e);
        });
    });
  };
  return (
    <Formik
      initialValues={{
        fullname: '',
        nickname: '',
        dob: new Date().toLocaleString().split(',')[0],
        email: '',
        phonenumber: '',
        gender: '',
        image: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={profileScreenSchema}>
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
        <KeyboardAvoidingView style={styles.continerStyles}>
          <TouchableOpacity
            onPress={() => pickSingle(setFieldValue)}
            style={{
              width: 120,
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 60,
              backgroundColor: 'grey',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 60,
                backgroundColor: 'grey',
              }}
              source={
                values.image.length ? {uri: values.image} : require(profilePath)
              }
            />
          </TouchableOpacity>
          <View style={styles.fieldcontainer}>
            <CustomInput
              name="fullname"
              style={styles.textInputStyle}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Full Name"
              placeholderTextColor="grey"
            />
            {errors['fullname'] && touched['fullname'] && (
              <Text style={styles.errorText}>{errors['fullname']}</Text>
            )}
            <CustomInput
              name="nickname"
              style={styles.textInputStyle}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Nickname"
              placeholderTextColor="grey"
            />
            {errors['nickname'] && touched['nickname'] && (
              <Text style={styles.errorText}>{errors['nickname']}</Text>
            )}

            <CustomDateTimePicker
              name="dob"
              setFieldValue={setFieldValue}
              values={values}
            />
            {errors['dob'] && touched['dob'] && (
              <Text style={styles.errorText}>{errors['dob']}</Text>
            )}
            <CustomInput
              name="email"
              style={styles.textInputStyle}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="email"
              placeholderTextColor="grey"
            />
            {errors['email'] && touched['email'] && (
              <Text style={styles.errorText}>{errors['email']}</Text>
            )}

            <CustomPhoneInput
              name="phonenumber"
              setFieldValue={setFieldValue}
              values={values}
            />
            {errors['phonenumber'] && touched['phonenumber'] && (
              <Text style={styles.errorText}>{errors['phonenumber']}</Text>
            )}

            <CustomDropDown
              name="gender"
              setFieldValue={setFieldValue}
              values={values}
              setFieldTouched={setFieldTouched}
            />
            {errors['gender'] && touched['gender'] && (
              <Text style={styles.errorText}>{errors['gender']}</Text>
            )}
            <CustomButton
              handleSubmit={handleSubmit}
              isValid={isValid}
              buttonText="Continue"
              style={{marginBottom: 20}}
            />
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  continerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#181A20',
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
  errorText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'left',
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
