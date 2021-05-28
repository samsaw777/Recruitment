import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Axios from './Axios'
function Userinfo() {
    const {id} = useParams()
    const [userinfo, setUserinfo] = useState({})
    useEffect(() => {
        Axios.get(`/userinnfo/${id}`)
        .then(res=>{
            setUserinfo(res.data)
        })
    },[])
    return (
        <div>
            {
                userinfo.fullname   
            }
        </div>
    )
}

export default Userinfo
