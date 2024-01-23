import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadUserFromStorage = () => {
  const storedUser = Cookies.get("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  user: loadUserFromStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), { expires: 7 });
    },
    removeUser: (state) => {
      state.user = null;
      Cookies.remove("user");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
