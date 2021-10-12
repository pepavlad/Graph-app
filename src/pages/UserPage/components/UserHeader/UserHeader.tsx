import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserPhoto,
  selectIsLoadingPhoto,
} from '../../../../redux/selectors/user';
import { updateUserPhoto, getUserPhoto } from '../../../../redux/thunk/user';
import { User } from '../../../../interfaces/User';
import './UserHeader.scss';

interface UserHeaderProps {
  userData: User;
}
const UserHeader: React.FC<UserHeaderProps> = React.memo(
  ({ userData }: UserHeaderProps) => {
    const dispatch = useDispatch();

    const userPhoto = useSelector(selectUserPhoto);
    const isLoadingPhoto = useSelector(selectIsLoadingPhoto);
    const [photoURL, setPhotoURL] = useState<string>('');
    const getExtension = (filename: string) => {
      const parts = filename.split('.');
      return parts[parts.length - 1];
    };
    const isImage = (filename: string) => {
      const ext = getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png':
          return true;
        default:
          return false;
      }
    };
    const uploadPhoto = (event: React.FormEvent) => {
      event.preventDefault();
      const { file } = event.target as HTMLInputElement & {
        file: { files: File[] };
      };
      const { filename } = event.target as HTMLInputElement & {
        filename: { value: string };
      };
      if (file.files[0] && isImage(file.files[0].name)) {
        dispatch(updateUserPhoto(file.files[0]));
        filename.value = '';
      }
    };
    useEffect(() => {
      setPhotoURL(userPhoto);
    }, [userPhoto]);

    useEffect(() => {
      dispatch(getUserPhoto());
    }, [isLoadingPhoto]);

    return (
      <div className='user_header'>
        <div className='user_data'>
          <img
            className='user_photo'
            src={photoURL || 'https://via.placeholder.com/150'}
            alt=''
          />
          <p className='username'>Hello, {userData.firstName}</p>
          <form action='#' onSubmit={uploadPhoto}>
            <div className='file-field input-field'>
              <div className='btn file'>
                <span>Choose file</span>
                <input type='file' name='file' />
              </div>
              <div className='file-path-wrapper'>
                <input
                  className='file-path validate'
                  type='text'
                  name='filename'
                />
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
      </div>
    );
  }
);

export default UserHeader;
