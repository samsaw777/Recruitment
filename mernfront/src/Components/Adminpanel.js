import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import "./admin.css";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
function Adminpanel() {
  const [getapplication, setGetApplication] = useState([]);
  console.log(getapplication);
  useEffect(() => {
    axios.get("/getusers").then((res) => {
      console.log(res.data);
      setGetApplication(res.data);
    });
  }, []);
  return (
    <div className='maingetdiv'>
      <Container>
        <div className='userdiv'>
          {getapplication.map((application) => (
            <Card className='userinfo' key={application._id}>
              <p>
                <strong>Name:</strong> {application.fullname}
              </p>
              <p>
                <strong>Education:</strong>{" "}
                {application.education
                  ? application.education
                  : "Not Mentioned"}
              </p>
              <p>
                <strong>Qualification:</strong>{" "}
                {application.qualification
                  ? application.qualification
                  : "Not Mentioned"}
              </p>
              <p>
                <strong>Skills:</strong>{" "}
                {application.skills ? application.skills : "Not Mentioned"}
              </p>
              <Link to={{ pathname: `/userinfo/${application._id}` }}>
                <p className='seebtn'>See Information</p>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Adminpanel;
