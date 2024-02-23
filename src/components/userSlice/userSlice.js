import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Kyaw San Maung" },
  { id: "1", name: "Yell Min Thu" },
  { id: "2", name: "Min Khant" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
