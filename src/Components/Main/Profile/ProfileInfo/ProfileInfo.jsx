import style from "./ProfileInfo.module.css";
import user from "../../../../files/user.jpg"
import Contacts from './Contacts/Contacts';
import Status from "./Status/Status";
import { useState } from 'react';


const ProfileInfo = ({ profile, status, myId, refreshStatus, toggleEditMode,setProfilePhoto }) => {

    const[imageEditMode,setImageEditMode] = useState(false);

    const setPhoto = (e) =>{
        setProfilePhoto (e.target.files[0])
    }

    return (
        <>
        
           
            <div className={style.profileInfo}>
                
                <div>
                    <img className={style.profileInfo_img} src={profile.photos === undefined ? user : (profile.photos.large || user)} />
                    <div>
                        {profile.userId === myId ? <button className={style.profileInfo_imageButton} onClick={() => setImageEditMode(!imageEditMode)}>Refresh profile images</button> : null}
                        {!imageEditMode && <div><input onChange={(e) => setPhoto(e)} className={style.photoInput} type="file" /></div>}
                    </div>
                    
                </div>

                <div className={style.profileInfo_items}>
                    <h2>{profile.fullName}</h2>
                    <p>About me :  <b>{profile.aboutMe}</b> </p>
                    <p>Looking for a job : <b>{profile.lookingForAJob ? "Yes" : "no"}</b></p>
                    {profile.lookingForAJob ? <p>Looking for a job description  :  <b>{profile.lookingForAJobDescription}</b> </p> : ""}
                    { profile.userId === myId ?  <button className={style.profileInfo_button} onClick={() => toggleEditMode()}>Refresh profile information</button> : null}
                </div> 


                <Contacts contacts={profile.contacts} />


            </div>
            <Status refreshStatus={refreshStatus} status={status} myId={myId} profileId={profile.userId} />
        </>
    )
}

export default ProfileInfo;