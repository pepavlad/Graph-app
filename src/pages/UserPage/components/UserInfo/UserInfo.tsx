import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../../../interfaces/User';
import { updateData } from '../../../../redux/thunk/user';
import './UserInfo.scss';

interface UserHeaderProps {
  userData: User;
}
const UserInfo: React.FC<UserHeaderProps> = React.memo(
  ({ userData }: UserHeaderProps) => {
    const dispatch = useDispatch();
    const [isReadonly, setIsReadonly] = useState<boolean>(true);
    const [data, setData] = useState<User>({
      firstName: '',
      lastName: '',
      age: '',
    });
    const toggleReadonly = () => {
      setIsReadonly(prevState => !prevState);
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
    useEffect(() => {
      setData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
      });
    }, [userData]);

    return (
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
    );
  }
);

export default UserInfo;
