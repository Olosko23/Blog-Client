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
    setIsVerified: (state) => {
      state.user.isVerified = true;
      Cookies.set("user", JSON.stringify(state.user), { expires: 7 });
    },
  },
});

export const { setUser, removeUser, setIsVerified } = userSlice.actions;

export default userSlice.reducer;
