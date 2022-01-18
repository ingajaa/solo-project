import React, { Component } from 'react';
import axios from 'axios';
import './FilesUploadComponent.css'

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    componentDidMount() {
                fetch('http://localhost:4000/api/').then(res => res.json()).then(data => {
            const lastUser = data.users[data.users.length - 1];
            this.setState({ profileImg: lastUser?.profileImg });
        });
    }

    onFileChange(e) {
        const profileImg = e.target.files[0];
        this.setState({ profileImg })

        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', profileImg)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            this.setState({ profileImg: res.data.userCreated.profileImg })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group noprint">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <img src={this.state.profileImg} style={{maxWidth: '200px'}} alt="Something"></img>
                    </form>
                </div>
            </div>
        )
    }
}