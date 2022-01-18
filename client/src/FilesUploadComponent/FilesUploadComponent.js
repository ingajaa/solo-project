import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FilesUploadComponent.css'

const FilesUploadComponent = () => {
    const [profileImg, setProfileImg] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/api/').then(res => res.json()).then(data => {
            const lastUser = data.users[data.users.length - 1];
            setProfileImg(lastUser?.profileImg);
        });
    }, []);

    const onFileChange = (e) => {
        const profileImg = e.target.files[0];

        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', profileImg)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            setProfileImg(res.data.userCreated.profileImg)
        }).catch ((error) => {
            console.log(error)
        })
    }


    return (
        <div className="container">
            <div className="row">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className="form-group noprint">
                        <input type="file" className="actual-btn" onChange={onFileChange} />
                    </div>
                    {profileImg ?
                        <img className="image-to-print" src={profileImg} alt="Your custom background displayed"></img>
                        : null}
                </form>
            </div>
        </div>
    )
}

export default FilesUploadComponent