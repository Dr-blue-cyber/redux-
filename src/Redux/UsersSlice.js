import {createSlice} from "@reduxjs/toolkit" 

let lastId = 0

export const userSlice = createSlice({
  name: 'users', 
  initialState: [], 
  reducers: {
    addUser: (state,action)=>{
      debugger;
      console.log(action.payload);
      const {name, email} = action.payload
      state.push({
        id: ++lastId, 
        name, 
        email,
      })
    },

    updateUser:{
      
    }
  }

}); 

export const {addUser, updateUser} = userSlice.actions
export default userSlice.reducer;