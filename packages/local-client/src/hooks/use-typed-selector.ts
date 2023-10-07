import {TypedUseSelectorHook} from "react-redux"
import { RootState } from "@cli-jsnote-sol/local-client/src/state";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector