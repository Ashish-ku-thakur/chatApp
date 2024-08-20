import { createSlice } from "@reduxjs/toolkit";

let massageSlicer = createSlice({
  name: "massage",
  initialState: {
    allMassage: '',
  },
  reducers: {
    setAllMassage: (state, action) => {
      state.allMassage = action?.payload;
    },
  },
});

export default massageSlicer.reducer;
export let { setAllMassage } = massageSlicer.actions;
