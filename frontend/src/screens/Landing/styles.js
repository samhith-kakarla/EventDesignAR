import { StyleSheet } from 'react-native';

import * as colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  mainView: {
    flex: 1,
    paddingTop: 160,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subView: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    height: 140,
    width: 140,
  },
  logoText: {
    width: '100%',
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  contentText: {
    width: '100%',
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
  },
  buttonView: {
    width: '100%',
  },
  landingButton: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    borderColor: 'transparent',
  },
  buttonContainer: {
    borderRadius: 10,
    marginBottom: 10,
  },
  landingButtonText: {
    color: colors.gray4,
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.gray4,
  },
  link: {
    fontSize: 12,
    color: colors.blue,
  },
  headerText: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 28,
  },
  text: {
    color: colors.red,
    fontWeight: '400',
    fontSize: 22,
  },
  errorText: {
    color: colors.red3,
    fontWeight: '600',
    fontSize: 18,
  },
  inputBox: {
    flexDirection: 'row',
    fontSize: 16,
    padding: 12,
    backgroundColor: '#333333',
    color: '#7B8794',
    borderRadius: 8,
    borderColor: '#7B8794',
    borderWidth: 0.5,
    borderStyle: 'solid',
    marginTop: 10,
    marginBottom: 15,
    fontWeight: '600',
  },
  inputBoxText: {
    flex: 1,
    marginLeft: 5,
    color: '#7B8794',
    fontWeight: '600',
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  image: {
    width: 265,
    height: 250,
  },
  onboardingButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    width: 250,
  },
  onboardingText: {
    alignSelf: 'flex-start',
    width: 250,
    marginLeft: 50,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
  },
  onboardingSubtitle: {
    fontSize: 18,
    width: 350,
    fontWeight: '100',
    marginTop: 20,
  },
  mainButton: {
    backgroundColor: colors.orange2,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    marginHorizontal: 25,
    marginTop: 10,
  },
  labelText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
  navigationView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  navigationLabelText: {
    color: '#7B8794',
    fontWeight: 'bold',
    fontSize: 14,
  },
  navigationText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.pink,
  },
});

export default styles;
