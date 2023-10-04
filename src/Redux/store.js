
import {configureStore} from "@reduxjs/toolkit" 
import userSlice from "./UsersSlice"
export default configureStore({
  reducer: {
    users: userSlice,
    
  }
})