import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: null,
    password: '',
  },
  reducers: {
    loginUser: (state, action) => {
      const { username, password } = action.payload
      const user = state.users.find(user => user.username === username && user.password === password)
      if (user) {
        state.loggedIn = user
      }
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { loginUser, setPassword } = userSlice.actions

export default userSlice.reducer