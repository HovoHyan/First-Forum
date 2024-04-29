import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UsersSlice/usersSlice";
import { activeUsersReducer } from "./Slices/UsersSlice/activeUsersSlice";
import { allCountrySlicesReducer } from "./Slices/UsersSlice/country";
import { postsReducer } from "./Slices/UsersSlice/postsSlice";
import { texnikaPageReducer } from "./Slices/UsersSlice/texnikaPageSlice";

const store = configureStore({
  reducer: {
    countryData: allCountrySlicesReducer,
    allUsersData: usersReducer,
    activeUsersData: activeUsersReducer,
    postsData: postsReducer,
    allTexnikaData: texnikaPageReducer,
  },
});

export default store;
