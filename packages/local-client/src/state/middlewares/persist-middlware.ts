import { Dispatch } from 'redux';
import { Action } from '@cli-jsnote-sol/local-client/src/state/actions';
import { ActionType } from '@cli-jsnote-sol/local-client/src/state/action-types';
import { saveCells } from '@cli-jsnote-sol/local-client/src/state/action-creators';
import { RootState } from '@cli-jsnote-sol/local-client/src/state/reducers';

export const persistMiddlware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};
