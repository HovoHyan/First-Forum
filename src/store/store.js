import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UsersSlice/usersSlice";
import { activeUsersReducer } from "./Slices/UsersSlice/activeUsersSlice";
import { allCountrySlicesReducer } from "./Slices/UsersSlice/country";
import { postsReducer } from "./Slices/UsersSlice/postsSlice";

const store = configureStore({
  reducer: {
    countryData: allCountrySlicesReducer,
    allUsersData: usersReducer,
    activeUsersData: activeUsersReducer,
    postsData: postsReducer,
  },
});

export default store;
