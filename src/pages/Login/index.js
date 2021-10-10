import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import styles from './styles';
import {fonts, images, colors, perfectSize} from '../../theme';
export default function Login() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar translucent barStyle="light-content" />
        <TouchableOpacity style={styles.backArrowContainer}>
          <Image source={images.backArrow} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.title}>{'Welcome\nBack'}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.textInputPlaceholderColor}
          selectionColor={colors.selectionTintColor}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => this.secondTextInput.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          style={[styles.textInput, {marginTop: perfectSize(18)}]}
          placeholder="Password"
          placeholderTextColor={colors.textInputPlaceholderColor}
          selectionColor={colors.selectionTintColor}
          autoCapitalize="none"
          secureTextEntry
          blurOnSubmit={false}
          ref={input => (this.secondTextInput = input)}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={styles.forgotPassword}>{'FORGOT?'}</Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{'Login'}</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>
          {'By logging in, you are agreeing to our\n'}
          <Text style={{fontFamily: fonts.quicksandBold}}>
            {'Terms and Conditions '}
          </Text>
          {'and '}
          <Text style={{fontFamily: fonts.quicksandBold}}>
            {'Privacy Policy'}
          </Text>
        </Text>
      </View>
    </>
  );
}
