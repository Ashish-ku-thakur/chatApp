import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer";
import massageSlicer from "./massageSlicer";
import socketSlicer from "./socketSlicer";

let store = configureStore({
  reducer: {
    user: userSlicer,
    massage: massageSlicer,
    socket:socketSlicer
  },
});

export default store;
