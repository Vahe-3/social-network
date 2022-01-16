import style from "./ProfileInfoForm.module.css";
import { useForm } from "react-hook-form";
import { refreshProfileData } from "../../../../../store/profileSlice";
import { useDispatch } from "react-redux";


const ProfileInfoForm = ({ toggleEditMode, myId, profile }) => {

        const dispatch = useDispatch()


        const { register,
                handleSubmit,
                
        } = useForm();



        const onSubmit = (data) => {

                dispatch(refreshProfileData({ data: data, userId: myId }))
                toggleEditMode()
                console.log(data)
        }

        let contactsInArray = Object.keys(profile.contacts)

        

        return (


                <div className={style.profileInfoForm}>


                        <form onSubmit={handleSubmit(onSubmit)} >

                                <div className={style.profileInformation}>
                                        <h2>Profile information</h2>
                                        <div>
                                                <input placeholder="Full name: " type="text" {...register("fullName")} />
                                        </div>
                                        <div>
                                                <input placeholder="About me : " type="text" {...register("aboutMe")} />
                                        </div>
                                        <div>
                                                <input type="checkbox" {...register("lookingForAJob")} />Looking for a job
                                        </div>

                                        <div>
                                                <textarea placeholder="Looking for a job description : " type="textarea"  {...register("lookingForAJobDescription")} />
                                        </div>
                                </div>

                                <div className={style.contactsInformation}>
                                        <h2>Contact information</h2>

                                        
                                        {
                                                contactsInArray.map(key => {
                                                    return   <div><input placeholder={key} type="text" {...register("contacts." + key)} /></div>
                                                })
                                        }
                                        


                                </div>






                                <div>
                                        <button>Save</button>
                                </div>

                        </form>

                </div>

        )
}















export default ProfileInfoForm;