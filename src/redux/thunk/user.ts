import { Dispatch } from 'redux';
import getUserData from '../../services/user';
import { User } from '../../interfaces/User';
import { setDataAction } from '../actions/user';

const setData = (data: User) => {
  return (dispatch: Dispatch): void => {
        dispatch(setDataAction(data))
  };
};

export default setData;