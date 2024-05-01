import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UsersSlice/usersSlice";
import { activeUsersReducer } from "./Slices/ActiveUsersSlice/activeUsersSlice";
import { allCountrySlicesReducer } from "./Slices/CountrySlice/country";
import { postsReducer } from "./Slices/PostsSlice/postsSlice";
import { texnikaPageReducer } from "./Slices/TexnikaSlice/texnikaPageSlice";
import { recipePageReducer } from "./Slices/RecipSlice/recipePageSlice";
import { messagesReducer } from "./Slices/MessagesSlice/messagesSlice";

const store = configureStore({
  reducer: {
    countryData: allCountrySlicesReducer,
    allUsersData: usersReducer,
    activeUsersData: activeUsersReducer,
    postsData: postsReducer,
    allTexnikaData: texnikaPageReducer,
    allRecipeData: recipePageReducer,
    allMessagesData: messagesReducer,
  },
});

export default store;
