import React from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {signUp} from '../Services/userService'

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =/^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmPasswordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignUp() {
    //remove confirm
    const [signUpObj, setSignUpObj] = React.useState({ firstName: "", lastName:"", email: "", password: "", confirm:""});
    let obj = {
        firstName : signUpObj.firstName,
        lastName : signUpObj.lastName,
        email : signUpObj.email,
        password: signUpObj.password
        }

    const [regexObj, setRegExObj] = React.useState({
        firstNameBorder:false,
        lastNameBorder:false,
        emailBorder: false,
        passwordBorder: false,
        confirmBorder:false,
        firstNameHelper:"",
        lastNameHelper:"",
        emailHelper: "",
        passwordHelper: "",
        confirmHelper:"",
      });

    const takeFirstName = (event) => {
        setSignUpObj((prevState)=>({...prevState,firstName:event.target.value}))
    }
    const takeLastName = (event) => {
        setSignUpObj((prevState)=>({...prevState,lastName:event.target.value}))
    }
    const takeEmail = (event) => {
        setSignUpObj((prevState)=>({...prevState,email:event.target.value}))
    }
    const takePassword = (event) => {
        setSignUpObj((prevState)=>({...prevState,password:event.target.value}))
    }
    const takeConfirm = (event) => {
        setSignUpObj((prevState)=>({...prevState,confirm:event.target.value}))
    }
    const submit = () => {
        let firstNameTest = firstNameRegex.test(signUpObj.firstName);
        let lastNameTest = lastNameRegex.test(signUpObj.lastName);
        let emailTest = emailRegex.test(signUpObj.email);
        let passwordTest = passwordRegex.test(signUpObj.password);
        let confirmPasswordTest = confirmPasswordRegex.test(signUpObj.confirm);
        
        if (firstNameTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              firstNameBorder: true,
              firstNameHelper: "Invalid First Name",
            }));
        }
        if (lastNameTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              lastNameBorder: true,
              lastNameHelper: "Invalid Last Name",
            }));
        }
        if (emailTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              emailBorder: true,
              emailHelper: "Enter correct email",
            }));
        }
        if (passwordTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              passwordBorder: true,
              passwordHelper: "Enter correct Password",
            }));
        }
        if (confirmPasswordTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              confirmBorder: true,
              confirmHelper: "Enter correct Password",
            }));
        }
        if (firstNameTest === true && firstNameTest === true && emailTest === true && passwordTest === true ) {
            signUp(obj).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
          }
    }
  return (
    <div>
        <header>
            <div class='container'>
                <div class='left'>
                    <img class='GoogleLogo' src='GoogleLogo2.png' width='70'></img>
                    <h3 class='Createtext'>Create your Google Account</h3>
                    {/* <form> */}
                        <div class='names'>
                        <TextField 
                        sx={{

                            width: { sm: 100, md: 170 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        id="outlined-basic" 
                        label="First name" 
                        variant="outlined" 
                        size="small"
                        margin="normal"
                        onChange={takeFirstName}
                        error={regexObj.firstNameBorder}
                        helperText={regexObj.firstNameHelper}/>
                        <TextField 
                        sx={{

                            width: { sm: 100, md: 170 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        id="outlined-basic" 
                        label="Last name" 
                        variant="outlined" 
                        size="small"
                        margin="normal"
                        onChange={takeLastName}
                        error={regexObj.lastNameBorder}
                        helperText={regexObj.lastNameHelper}/>
                        </div>

                        <div id='uname'>
                        <TextField 
                        sx={{

                            width: { sm: 100, md: 350 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        fullWidth label="Email" 
                        id="fullWidth" 
                        size="small"
                        margin="normal"
                        onChange={takeEmail}
                        error={regexObj.emailBorder}
                        helperText={regexObj.emailHelper}
                        />
                            <label class='gmail'>@gmail.com</label>
                        </div>
                        <span>You can use letters, numbers & period.</span>
                        <br/>
                        <a href="#">Use my current email address instead</a>
                        
                        <div class='password'>
                        <TextField 
                        sx={{

                            width: { sm: 100, md: 170 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        size="small"
                        className='password1'
                        margin="normal"
                        onChange={takePassword}
                        error={regexObj.passwordBorder}
                        helperText={regexObj.passwordHelper}/>

                        <TextField 
                        sx={{

                            width: { sm: 100, md: 170 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        id="outlined-basic" 
                        label="Confirm" 
                        variant="outlined" 
                        size="small"
                        margin="normal"
                        onChange={takeConfirm}
                        error={regexObj.confirmBorder}
                        helperText={regexObj.confirmPasswordRegex}
                        />
                        </div>

                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        <br/>
                        <div> </div>
                        {/* <input type='checkbox' class='checkbox'></input>
                        &nbsp;Show password */}
                        <div class='b-Links'>
                            <a href="#" class='sign-In-Link'>Sign in instead</a>
                            <Button type="submit" variant="contained" onClick={submit} >Next</Button>
                        </div>
                    {/* </form> */}
                </div>
                <div class='right'>
                    <img class='accountLogo'src='accountLogo.svg'></img>
                    <p>One account. All of Google working for you</p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default SignUp
