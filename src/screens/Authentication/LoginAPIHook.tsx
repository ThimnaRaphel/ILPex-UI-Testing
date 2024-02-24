import api from '../../network/API';
 
// import {setStringItem} from '../utils/Utils';
// import Constants from '../utils/Constants';
 
import {useNavigation} from '@react-navigation/native';
 
interface LoginProps{
  LoginUserName : string,
  LoginPassword :  string
}

interface LoginResponse {
  ErrorMessage : string,
  statusCode : string,
  success : boolean,
  LoginResp : any
}

const loginUser =async({LoginUserName,LoginPassword} : LoginProps):Promise<LoginResponse>=>{

  console.log("hi");
  let success: boolean = false;
  let ErrorMessage: string = '';
  let statusCode: string = '';
  let LoginResp: any;

const loginPayload ={
  email: LoginUserName,
  password: LoginPassword,
};

try{
  const loginResponse = await api.post('api/v1/userLogin',loginPayload,
  );
  statusCode=loginResponse.status.toString();
  {
    statusCode==='200'? (success=true):(success=false)
  }
  LoginResp=loginResponse.data;
  console.log(LoginResp);
}
catch (error: any) {
  console.log('Error while logging in:', error);
  ErrorMessage = error.message;
}

return {success, statusCode, LoginResp, ErrorMessage};
};

export default loginUser;