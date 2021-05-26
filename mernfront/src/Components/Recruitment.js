import React,{useEffect, useState} from 'react'
// const axios = require('axios')
import Axios from './Axios'

const initalState = {
    fullname:'',
    fullnameErr:'',
    secondname:'',
    secondErr:'',
    lastname:'',
    lastErr:'',
    laneone:'',
    laneoneErr:'',
    lanetwo:'',
    lanetwoErr:'',
    city:'',
    cityErr:'',
    state:'',
    stateErr:'',
    pincode:'',
    pincodeErr:'',
    country:'',
    countryErr:'',
    phonenumber:'',
    phoneErr:'',
    email:'',
    emailErr:'',
    birthdate:'',
    birthErr:'',
    education:'',
    educationErr:'',
    skills:'',
    skillsErr:'',
    qualification:'',
    qualificationErr:''
  }
function Recruitment() {
    const [initalstate, setInitialState] = useState(initalState)
    console.log(initalstate)
    // useEffect(()=>{
    //     Axios.get('/getusers')
    //     .then(res=>{
    //         console.log(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err.message)
    //     })
    // },[])
    
    return (
        <div>
            This is recruitment folder.
        </div>
    )
}

export default Recruitment
