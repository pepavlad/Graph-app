import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getUserPhoto } from '../../redux/thunk/user';
import './UserPage.scss';
import { getAllGraphs } from '../../redux/thunk/graphs';
import { selectIsLoading } from '../../redux/selectors/graph';
import {
  selectUser,
  selectUserPhoto,
  selectIsLoadingPhoto,
  selectPhotoUrlError,
} from '../../redux/selectors/user';
import UserHeader from './components/UserHeader/UserHeader';
import UserInfo from './components/UserInfo/UserInfo';
import GraphsList from './components/GraphsList/GraphsList';

const UserPage: React.FC = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoadingGraph = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllGraphs());
    dispatch(getData());
  }, []);

  if (!userData.firstName.length || isLoadingGraph) {
    return (
      <div className='progress'>
        <div className='indeterminate'> </div>
      </div>
    );
  }

  return (
    <div className='userpage'>
      <UserHeader userData={userData} />
      <UserInfo userData={userData} />
      <GraphsList />
    </div>
  );
};

export default UserPage;
