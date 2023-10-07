import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@cli-jsnote-sol/local-client/src/state";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
