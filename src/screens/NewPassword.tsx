import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomInput from '../components/CustomInput';
import {fonts} from '../utils/fonts';
import {forgotPasswordSchema} from '../validationSchemas/forgotPasswordSchema';
import CustomButton from '../components/CustomButton';

const NewPassword = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
        checkbox: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={forgotPasswordSchema}>
      {({
        isValid,
        handleBlur,
        handleChange,
        setFieldValue,
        setFieldTouched,
        values,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={styles.widthContainer}>
            <View style={styles.subContainer}>
              <View
                style={{
                  flex: 1,
                  borderColor: 'white',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  justifyContent: 'center',
                }}>
                <Text style={styles.textStyle}>Logo</Text>
              </View>
              <View style={{justifyContent: 'flex-end', flex: 1}}>
                <Text style={styles.bottomTextThin}>
                  Create Your New Password
                </Text>
                <View style={styles.fieldcontainer}>
                  <CustomInput
                    style={styles.textInputStyle}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    name="password"
                    placeholder="password"
                    secureTextEntry
                    placeholderTextColor="white"
                  />
                  <CustomInput
                    style={styles.textInputStyle}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    secureTextEntry
                    placeholderTextColor="white"
                  />
                  <CustomCheckbox
                    name="checkbox"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    style={{marginTop: 8, marginBottom: 8}}
                  />
                  <CustomButton
                    handleSubmit={handleSubmit}
                    isValid={isValid}
                    buttonText="Continue"
                  />
                </View>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View>
                        <Text style={styles.textStyle}>Logo</Text>
                      </View>
                      <Text style={styles.modelTextGreen}>
                        Congratulations!
                      </Text>
                      <Text style={styles.modelTextWhite}>
                        Your account is ready to use
                      </Text>
                      <View style={styles.modelButtonContainer}>
                        <TouchableWithoutFeedback
                          onPress={() => setModalVisible(false)}>
                          <View style={styles.modelButton}>
                            <Text style={styles.textStyle}>Go to Homepage</Text>
                          </View>
                        </TouchableWithoutFeedback>
                      </View>
                    </View>
                  </View>
                </Modal>
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
  },
  subContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  widthContainer: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 100,
    flex: 1,
  },
  largeTextStyle: {
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.extraBold,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.regular,
    textAlign: 'center',
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
  bottomTextThin: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.thin,
    marginBottom: 20,
  },

  verifyButtonStyles: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 30,
  },

  fieldcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#1F222A',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    backgroundColor: '#1AB65C',
    alignItems: 'center',
    marginTop: 30,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modelTextGreen: {
    color: '#1AB65C',
    fontSize: 20,
    fontFamily: fonts.bold,
    marginTop: 20,
  },
  modelTextWhite: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.thin,
    marginTop: 20,
  },
  modelButtonContainer: {
    width: '100%',
    marginTop: 30,
  },
  modelButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewPassword;
