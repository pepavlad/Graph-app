import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../interfaces/User';
import './UserPage.scss';
import { downloadGraph, getAllGraphs } from '../../redux/thunk/graphs';
import { selectGraphs } from '../../redux/selectors/graph';
import Input from '../../components/Input/Input';

const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<User>();
  const [graphNames, setGraphNames] = useState<string[]>();
  const history = useHistory();
  const dispatch = useDispatch();
  const graphs: string[] = useSelector(selectGraphs);
  const loadGraph = (event: React.MouseEvent) => {
    dispatch(downloadGraph((event.target as HTMLAnchorElement).id));
    history.push('/home');
  };
  useEffect(() => {
    dispatch(getAllGraphs());
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
  useEffect(() => {
    setGraphNames(graphs);
  }, [graphs]);
  if (!userData || !graphs) {
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
          {graphs.map(graphname => (
            <li className='graph_item' key={graphname}>
              {graphname}
              <div className='icons'>
                <i
                  className='material-icons'
                  onClick={loadGraph}
                  id={graphname}
                >
                  open_in_browser
                </i>
                <i className='material-icons'>delete</i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
