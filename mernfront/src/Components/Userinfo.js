import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
// import Axios from "./Axios";
import axios from "axios"
import "./admin.css";
function Userinfo() {
  const { id } = useParams();
  const [userinfo, setUserinfo] = useState({});
  useEffect(() => {
    axios.get(`/userinnfo/${id}`).then((res) => {
      setUserinfo(res.data);
    });
  }, []);
  return (
    <div className='displayfullmain'>
      <Container>
        <Card className='userdetails'>
          <div className='userheader'>
            <p>
              <strong>Candidate Full Name: Hello</strong> {userinfo.fullname}
            </p>
          </div>
          <div className='userinformation'>
            <div className='usermaininfo'>
              <p>
                <strong>Email:</strong> {userinfo.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {userinfo.number}
              </p>
            </div>
            <div className='useradd'>
              <p>
                <strong>Candidate Address:</strong>
              </p>
              <div className='streetaddress'>
                <p>
                  <strong>Lane One:</strong> {userinfo.streetone}
                </p>
                <p>
                  <strong>Lane Two:</strong> {userinfo.streettwo}
                </p>
                <p>
                  <strong>City:</strong> {userinfo.city}{" "}
                  <strong>PinCode:</strong> {userinfo.pincode}{" "}
                  <strong>State:</strong> {userinfo.state}{" "}
                  <strong>Country:</strong> {userinfo.country}.
                </p>
              </div>
            </div>
          </div>
          <div className='usermaininformation'>
            <p>
              <strong>Skills: </strong>
              {userinfo.skills}
            </p>
            <p>
              <strong>Education: </strong>
              {userinfo.education}
            </p>
            <p>
              <strong>Qualifications: </strong>
              {userinfo.qualification}
            </p>
          </div>
          <div className='sendmail'>
            <p className='mailbtn'>
              <strong>Send Mail</strong>
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Userinfo;
