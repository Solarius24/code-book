import cellsReducers from "@cli-jsnote-sol/local-client/src/state/reducers/cellsReducer"
import {combineReducers} from "redux"
import bundlesReducer from "@cli-jsnote-sol/local-client/src/state/reducers/bundlesReducer"

const reducers = combineReducers({
    cells:cellsReducers,
    bundles:bundlesReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>