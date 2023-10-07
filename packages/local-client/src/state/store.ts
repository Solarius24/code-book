import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducers from "@cli-jsnote-sol/local-client/src/state/reducers"
import { persistMiddlware } from "@cli-jsnote-sol/local-client/src/state/middlewares/persist-middlware"

export const store = createStore(reducers,{},applyMiddleware(persistMiddlware,thunk))

