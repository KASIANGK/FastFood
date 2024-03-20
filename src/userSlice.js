import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loggedInUser: false,
    user: 'username',
    password: 'password',
  },
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);

      if (state.user == action.payload.username && state.password == action.payload.password) {
        state.loggedInUser = true
        console.log(state.loggedInUser);
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { loggedInUser, logoutUser, loginUser, setPassword } = userSlice.actions

export default userSlice.reducer