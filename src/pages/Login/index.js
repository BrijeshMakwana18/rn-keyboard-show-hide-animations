import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Animated,
} from 'react-native';
import styles from './styles';
import {fonts, images, colors, perfectSize} from '../../theme';
export default function Login() {
  const backArrowMarginLeft = useRef(
    new Animated.Value(perfectSize(0)),
  ).current;
  const titleMarginTop = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        _keyboardDidShow,
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        _keyboardDidHide,
      );

      return () => {
        this.keyboardDidHideListener?.remove;
        this.keyboardDidShowListener?.remove;
      };
    }
  });
  const _keyboardDidShow = () => {
    Animated.timing(backArrowMarginLeft, {
      toValue: perfectSize(-500),
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.parallel([
      Animated.timing(titleMarginTop, {
        toValue: perfectSize(-200),
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(titleOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const _keyboardDidHide = () => {
    Animated.timing(backArrowMarginLeft, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.parallel([
      Animated.timing(titleMarginTop, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar translucent barStyle="light-content" />
        <Animated.View style={{marginLeft: backArrowMarginLeft}}>
          <TouchableOpacity style={styles.backArrowContainer}>
            <Image source={images.backArrow} style={styles.backArrow} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{marginTop: titleMarginTop, opacity: titleOpacity}}>
          <Text style={styles.title}>{'Welcome\nBack'}</Text>
        </Animated.View>
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
