import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loggedInUser: null,
    password: '',
  },
  reducers: {
    loginUser: (state, action) => {
      const { username, password } = action.payload
      const user = state.users.find(user => user.username === username && user.password === password)
      if (user) {
        state.loggedInUser = user
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