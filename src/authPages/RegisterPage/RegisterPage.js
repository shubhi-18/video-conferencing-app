import React,{ useState,useEffect} from 'react';
import { Typography, getImageListItemBarUtilityClass } from '@mui/material';

import AuthBox from '../../shared/components/AuthBox';
import RegisterPageInputs from './RegisterPageInputs';
import { validateRegisterForm } from '../../shared/utils/validators';
import RegisterPageFooter from './RegisterPageFooter';





const RegisterPage =() =>{
  const [mail,setMail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  
  

  const [isFormValid,setIsFormValid]=useState(false);

  

  

  
  



  
  
  const handleRegister = () =>{
    

    console.log(mail);
    console.log(username);
    console.log(password);
    
    console.log('registering');
  };

   
  useEffect(() =>{
    setIsFormValid(validateRegisterForm({
      mail,
      username,
      password,
  }))
  },[mail,username,password,setIsFormValid]);
  return <AuthBox>

    <Typography variant='h5' sx={{color: 'white'}}>
      Create an account
    </Typography>
    <RegisterPageInputs 
      mail={mail}
      setMail={setMail}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
    <RegisterPageFooter
     handleRegister={handleRegister}
     isFormValid={isFormValid} 
    />
  </AuthBox>
};




export default RegisterPage;