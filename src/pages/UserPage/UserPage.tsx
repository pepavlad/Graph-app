import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  updateData,
  updateUserPhoto,
  getUserPhoto,
} from '../../redux/thunk/user';
import { User } from '../../interfaces/User';
import './UserPage.scss';
import {
  downloadGraph,
  getAllGraphs,
  deleteGraph,
} from '../../redux/thunk/graphs';
import { selectGraphs, selectIsLoading } from '../../redux/selectors/graph';
import { selectUser, selectUserPhoto } from '../../redux/selectors/user';

const UserPage: React.FC = () => {
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const userData = useSelector(selectUser);
  const userPhoto = useSelector(selectUserPhoto);
  const [photoURL, setPhotoURL] = useState<string>(
    'https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png'
  );
  const [data, setData] = useState<User>({
    firstName: '',
    lastName: '',
    age: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const graphs: string[] = useSelector(selectGraphs);
  const loadGraph = (event: React.MouseEvent) => {
    dispatch(downloadGraph((event.target as HTMLAnchorElement).id));
    history.push('/home');
  };
  const delGraph = (event: React.MouseEvent) => {
    dispatch(deleteGraph((event.target as HTMLAnchorElement).id));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { firstName, lastName, age } = event.target as HTMLInputElement & {
      firstName: { value: string };
      lastName: { value: string };
      age: { value: string };
    };
    dispatch(updateData(firstName.value, lastName.value, age.value));
    toggleReadonly();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const toggleReadonly = () => {
    setIsReadonly(prevState => !prevState);
  };
  const uploadPhoto = (event: React.FormEvent) => {
    const { file } = event.target as HTMLInputElement & {
      file: { files: any };
    };
    dispatch(updateUserPhoto(file.files[0]));
    dispatch(getUserPhoto());
  };
  useEffect(() => {
    dispatch(getAllGraphs());
    dispatch(getData());
    dispatch(getUserPhoto());
  }, []);

  useEffect(() => {
    setData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      age: userData.age,
    });
  }, [userData]);

  useEffect(() => {
    setPhotoURL(userPhoto);
  }, [userPhoto]);

  if (!userData.firstName.length || isLoading) {
    return (
      <div className='progress'>
        <div className='indeterminate'> </div>
      </div>
    );
  }
  return (
    <div className='userpage'>
      <div className='title'>
        <img src={userPhoto} alt='' />
        <p className='username'>Hello, {userData.firstName}</p>
        <form action='#' onSubmit={uploadPhoto}>
          <div className='file-field input-field'>
            <div className='btn file'>
              <span>Choose file</span>
              <input type='file' name='file' />
            </div>
            <div className='file-path-wrapper'>
              <input className='file-path validate' type='text' />
            </div>
          </div>
          <button className='waves-effect waves-light btn upload'>
            Upload
          </button>
        </form>
      </div>
      <div className='graphs_title'>
        Your graphs
        <p className='description'>Choose graph to load or delete</p>
      </div>
      <div className='userinfo'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            value={data.firstName}
            onChange={handleChange}
            readOnly={isReadonly}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last name'
            value={data.lastName}
            onChange={handleChange}
            readOnly={isReadonly}
          />
          <input
            type='number'
            name='age'
            value={data.age}
            placeholder='Your age'
            onChange={handleChange}
            min='18'
            readOnly={isReadonly}
          />
          {!isReadonly ? (
            <div className='userinfo_btn'>
              <button className='waves-effect waves-light btn edit'>
                <i className='material-icons right'>save</i>
                Save
              </button>
            </div>
          ) : (
            <div> </div>
          )}
        </form>
        {isReadonly ? (
          <div className='userinfo_btn'>
            <a
              className='waves-effect waves-light btn edit'
              onClick={toggleReadonly}
            >
              <i className='material-icons right'>create</i>
              Edit
            </a>
          </div>
        ) : (
          <div> </div>
        )}
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
                <i className='material-icons' onClick={delGraph} id={graphname}>
                  delete
                </i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
