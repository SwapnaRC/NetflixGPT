export const checkValidData = (email, password) => {
    // const isUsernameValid = /^[a-zA-Z0-9]+$/.test(uname); 
    // console.log(uname)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPwdValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!isEmailValid)  return "Email is not valid"
    if(!isPwdValid)  return "Password is  incorrect"
    // if(!isUsernameValid) return "Username is not valid"
    return null;
}