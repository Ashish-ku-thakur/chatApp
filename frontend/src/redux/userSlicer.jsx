import { createSlice } from "@reduxjs/toolkit";

let userSlicer = createSlice({
  name: "user",
  initialState: {
    authuser: null,
    otherUsers: null,
    otherUsers2: null,
    selectedUser: null,
    onlineUsers: null
  },
  reducers: {
    setAuthuser: (state, action) => {
      state.authuser = action?.payload;
    },
    setOtherusers: (state, action) => {
      state.otherUsers = action?.payload;
    },
    setOtherusers2: (state, action) => {
      state.otherUsers2 = action?.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action?.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action?.payload;
    },
  },
});

export default userSlicer.reducer;
export let { setAuthuser, setOtherusers, setSelectedUser, setOtherusers2, setOnlineUsers } = userSlicer.actions;
