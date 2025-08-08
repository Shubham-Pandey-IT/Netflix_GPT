export const isValidData = (email, password) => {


  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ); 

  if (!isValidEmail(email) || !isValidPassword(password))
    return "please Enter a valid Email or Password";
 // return "okk its fine !!"
};
