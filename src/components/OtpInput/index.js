const OTPInputField = ({setPinReady, code, setCode, maxLength}) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const textInputRef = useRef(null);
  const [inputContainerIsFocused, setinputContainerIsFocused] = useState(false);
  const handleOnBlur = () => {
    setinputContainerIsFocused(false);
  };

  const handleOnPress = () => {
    setinputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = '';
    const digit = code[index] || emptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const StyledOTPInput =
      inputContainerIsFocused && isDigitFocused ? OTPInputFocused : OTPInput;

    return (
      <StyledOTPInput key={index}>
        <OTPInputText>{digit}</OTPInputText>
      </StyledOTPInput>
    );
  };
  return (
    <OTPInputContainer>
      <OTPInpContainer style={styles.container} onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </OTPInpContainer>
      <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="OneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
    </OTPInputContainer>
  );
};

export default OTPInputField;
