import cellsReducers from "./cellsReducer"
import {combineReducers} from "redux"
import bundlesReducer from "./bundlesReducer"

const reducers = combineReducers({
    cells:cellsReducers,
    bundles:bundlesReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>