import { combineReducers } from "redux";

import { carReducer } from "./carReducer";
import { additionalPriceReducer } from "./additionalPriceReducer";
import { additionalFeaturesReducer } from "./additionalFeaturesReducer";

export const rootReducer = combineReducers({
    carReducer,
    additionalPriceReducer,
    additionalFeaturesReducer
})