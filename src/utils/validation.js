export const validateName = name => {
  if (!name) {
    return 'Name is required';
  }
  return '';
};

export const isValidEmail = email => {
  if (!email) {
    return 'Email is required';
  }
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email address';
  }
  return '';
};

export const isValidMobileNumber = mobileNumber => {
  if (!mobileNumber) {
    return 'Mobile number is required';
  }
  const mobileNumberRegex = /^[0-9]{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    return 'Invalid mobile number';
  }
  return '';
};

export const isValidPassword = password => {
  if (!password) {
    return 'Password is required';
  }
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passwordRegex.test(password)) {
    return 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number';
  }
  return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return 'Confirm password is required';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateSignUpForm = (
  name,
  email,
  mobileNumber,
  password,
  confirmPassword,
) => {
  const errors = {};
  errors.name = validateName(name);
  errors.email = isValidEmail(email);
  errors.mobileNumber = isValidMobileNumber(mobileNumber);
  errors.password = isValidPassword(password);
  errors.confirmPassword = validateConfirmPassword(password, confirmPassword);
  return errors;
};
