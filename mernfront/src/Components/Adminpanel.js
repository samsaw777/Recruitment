import React,{useEffect, useState} from 'react'
import Axios from './Axios'
import './admin.css'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
function Adminpanel() {
    const [getapplication, setGetApplication] = useState([])
    console.log(getapplication)
    useEffect(()=>{
        Axios.get('/getusers')
        .then(res =>{
           console.log(res.data)
           setGetApplication(res.data)
        })
    },[])
    return (
        <div className="maingetdiv">
            <Container>
                <div className="userdiv">
                    {
                    getapplication.map(application =>(
                        <div className="userinfo" key={application._id}>
                            <p>{application._id}</p>
                            <p>{application.fullname}</p>
                            <Link
                                to ={{ pathname:`/userinfo/${application._id}`}}
                            >
                                <p className="seebtn">See Information</p>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Adminpanel
