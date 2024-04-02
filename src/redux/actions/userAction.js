import { userActions } from '../reducers/userReducer';


export const login=({username,pw})=>async(dispatch)=>{
  try{
    console.log(username,'username')
    console.log(pw,'pw')
if(username === 'jenny' && pw === '1234'){
  dispatch(userActions.loginSuccess({status:'success',username}))
  
}else{
  dispatch(userActions.loginFail('Try Again!'))
 
}
  }catch(error){
    dispatch(userActions.loginFail('Try Again!'))
  }
}