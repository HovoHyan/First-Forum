import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UsersSlice/usersSlice";
import { activeUsersReducer } from "./Slices/ActiveUsersSlice/activeUsersSlice";
import { allCountrySlicesReducer } from "./Slices/CountrySlice/country";
import { texnikaPageReducer } from "./Slices/TexnikaSlice/texnikaPageSlice";
import { recipePageReducer } from "./Slices/RecipSlice/recipePageSlice";
import { messagesReducer } from "./Slices/MessagesSlice/messagesSlice";
import { animalPageReducer } from "./Slices/AnimalSlice/animalPageSlice";

const store = configureStore({
  reducer: {
    countryData: allCountrySlicesReducer,
    allUsersData: usersReducer,
    activeUsersData: activeUsersReducer,
    allTexnikaData: texnikaPageReducer,
    allRecipeData: recipePageReducer,
    allMessagesData: messagesReducer,
    allAnimalData: animalPageReducer,
  },
});

export default store;
