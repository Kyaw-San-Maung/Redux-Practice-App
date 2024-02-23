import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux ToolKit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slice...",
    content: "The More I say slice, the more i want pizza.",
  },
];

export const CounterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    PostAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { PostAdd } = CounterSlice.actions;
export default CounterSlice.reducer;
