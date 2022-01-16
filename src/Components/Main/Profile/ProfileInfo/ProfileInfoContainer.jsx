
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getUserProfileThunk, refreshStatusThunk } from "../../../../store/profileSlice";
import { useSelector } from 'react-redux';
import ProfileInfo from "./ProfileInfo";
import { useLocation } from 'react-router-dom';
import { getStatusThunk, setProfilePhotoThunk } from './../../../../store/profileSlice';
import { useState } from 'react';
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm';


const ProfileInfoContainer = () => {


    const dispatch = useDispatch();
    const { profile, status , isLoading } = useSelector(state => state.profile);
    const { id } = useSelector(state => state.auth.userData)
    const [editMode,setEditMode] = useState(false);

    const toggleEditMode = () =>{
        setEditMode(!editMode)
    }



    const location = useLocation()

    let userId = location.pathname.split("/")[2]

    if (!userId) {
        userId = id
    }

    useEffect(() => {
        dispatch(getUserProfileThunk(userId)).then(() => {
            dispatch(getStatusThunk(userId))
        });


    }, [userId])

    const refreshStatus = (status) => {
        dispatch(refreshStatusThunk(status))
    }

    const saveProfilePhoto  = (file) =>{
        dispatch(setProfilePhotoThunk(file))
    }

   

    

    return (
        <div>
         {!editMode ? <ProfileInfo setProfilePhoto={saveProfilePhoto} toggleEditMode={toggleEditMode} refreshStatus={refreshStatus} status={status} profile={profile} myId={id} /> :
                      <ProfileInfoForm myId={id} profile={profile} toggleEditMode={toggleEditMode} />} 
          </div> 
    )
            
}



export default ProfileInfoContainer;





