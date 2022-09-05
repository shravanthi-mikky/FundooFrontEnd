import React from 'react'
import './SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {signIn} from '../Services/userService'
import { useNavigate } from 'react-router-dom';

const emailRegex =/^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {
  const navigate = useNavigate()

  const [signInObj, setSignInObj] = React.useState({ email: "", password: "" });
  const [regexObj, setRegExObj] = React.useState({
    emailBorder: false,
    passwordBorder: false,
    emailHelper: "",
    passwordHelper: "",
  });

  const takeEmail = (event) => {
    setSignInObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (event) => {
    setSignInObj((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const submit = () => {
    let emailTest = emailRegex.test(signInObj.email);
    let passwordTest = passwordRegex.test(signInObj.password);

    if (emailTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else if (emailTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else if (passwordTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (emailTest === true && passwordTest === true) {
      signIn(signInObj)
      /* navigate('/DashBoard') */
      .then((response)=>{console.log(response); localStorage.setItem("token",response.data.token);navigate('/DashBoard')})
      
      .catch((error)=>{console.log(error)});
    }
  };
  return (
    <div class='headerOfSignIn'>
         <div class='maindiv'>
            <div class='Child-one'>
                <img class='GoogleLogo' src='GoogleLogo2.png' alt="Google"  width='75' ></img>
                <p class='Sign-In-Heading'>Sign in</p>
                <p class='text2'>Use your Google Account</p>
            </div>
            <div class='Child-two'>
                <TextField 
                fullWidth label="Email" 
                id="fullWidth" 
                size="small" 
                
                onChange={takeEmail}
                error={regexObj.emailBorder}
                helperText={regexObj.emailHelper}/>

                <TextField 
                fullWidth label="Password" 
                id="fullWidth" 
                size="small" 
                margin="normal"
                onChange={takePassword}
                error={regexObj.passwordBorder}
                helperText={regexObj.passwordHelper}/>

                <a class='Link' href="#">Forgot password?</a>
                <p class='text3'>Not your computer? Use Guest mode to sign in privately.</p>
                <a class='Link'href="#">Learn More</a>
                
            </div>
            <div class='Bottom-Part'>
                <a href="#" class='Link'>Create account</a>
                <Button variant="contained" onClick={submit}>Next</Button>
            </div>
         </div>
    </div>
  )
}

export default SignIn
