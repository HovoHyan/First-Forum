import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UsersSlice/usersSlice";
import { activeUsersReducer } from "./Slices/ActiveUsersSlice/activeUsersSlice";
import { allCountrySlicesReducer } from "./Slices/CountrySlice/country";
import { postsReducer } from "./Slices/PostsSlice/postsSlice";
import { texnikaPageReducer } from "./Slices/TexnikaSlice/texnikaPageSlice";
import { recipePageReducer } from "./Slices/RecipSlice/recipePageSlice";

const store = configureStore({
  reducer: {
    countryData: allCountrySlicesReducer,
    allUsersData: usersReducer,
    activeUsersData: activeUsersReducer,
    postsData: postsReducer,
    allTexnikaData: texnikaPageReducer,
    allRecipeData: recipePageReducer,
  },
});

export default store;
