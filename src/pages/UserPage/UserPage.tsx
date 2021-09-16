import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { User } from '../../interfaces/User';
import './UserPage.scss';
import Input from '../../components/Input/Input';
import SavedGraphItem from '../../components/SavedGraphItem/SavedGraphItem';

const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<User>();
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase
        .database()
        .ref()
        .child('users')
        .child(user.uid)
        .on('value', snapshot => {
          setUserData(snapshot.val());
        });
    }
  }, []);
  if (!userData) {
    return (
      <div className='progress'>
        <div className='indeterminate'> </div>
      </div>
    );
  }
  return (
    <div className='userpage'>
      <div className='title'>
        <img
          src='https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png'
          alt=''
        />
        <p className='username'>Hello, {userData.firstName}</p>
        <a className='waves-effect waves-light btn'>Change avatar</a>
      </div>
      <div className='graphs_title'>
        Your graphs
        <p className='description'>Choose graph to load or delete</p>
      </div>
      <div className='userinfo'>
        <Input
          type='text'
          name='firstName'
          placeholder='First name'
          label='First name'
          value={userData.firstName}
          readOnly
        />
        <Input
          type='text'
          name='lastName'
          placeholder='Last name'
          label='Last name'
          value={userData.lastName}
          readOnly
        />
        <Input
          type='number'
          name='age'
          placeholder='Your age'
          label='Your age'
          min='18'
          value={userData.age}
          readOnly
        />
        <div className='userinfo_btns'>
          <a className='waves-effect waves-light btn edit'>
            <i className='material-icons right'>create</i>
            Edit
          </a>
        </div>
      </div>
      <div className='graphs'>
        <ul>
          <SavedGraphItem />
          <SavedGraphItem />
          <SavedGraphItem />
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
