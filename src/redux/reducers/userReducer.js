import { createSlice } from '@reduxjs/toolkit';

const initialState={
  user:null,
  error:"",
};

const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    allRequest(state,action){
      state.user=null;
      state.error="";
    },
    loginSuccess(state,action){
state.user = action.payload;
state.error="";
    },
    loginFail(state,action){
      state.error=action.payload;
    }
  }
})


export const userActions = userSlice.actions
export default userSlice.reducer