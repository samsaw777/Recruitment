import React,{useState} from 'react'
// const axios = require('axios')
// import Axios from './Axios'
import {Container} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Validate from './Validate'


const initalState = {
    fullname:'',
    secondname:'',
    lastname:'',
    laneone:'',
    lanetwo:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    phonenumber:'',
    email:'',
    birthdate:'',
    education:'',
    skills:'',
    qualification:'',
  }

function Recruitment() {
    var [initalstate, setInitialState] = useState(initalState)
    const [error, setError] = useState({})
    console.log(error)
    const handleInput = (e)=>{
        const {name, value} = e.target
        setInitialState({
            ...initalstate,
            [name]: value,
        })
    }

    // const validate = value => {
      
    // }

    const addToData = event =>{
        event.preventDefault();
        setError(Validate(initalstate,setInitialState,initalState))
      }
    return (
        <div>
            <Container>
            <div className="headerDiv">
        <h1>RMS Connect</h1>
        <h3>Recruitment Application</h3>
        <h6>Resources are hired to give results, not resources!</h6>
      </div>
        <form onSubmit={addToData}> 
        <div className="partOne">
          <div className="partHead">
            <h4 className="phead">Personal Information</h4>
          </div>
          <div className="inputPart">
          <Row className="Row">
            <Col lg={4} md={4} sm={12}>
              <label>FullName:</label>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <Row>
                <Col lg={4} md={4} sm={12}>
                <input type="text" 
          name= "fullname"
          value={initalstate.fullname} 
          onChange={handleInput} 
          placeholder="First Name"/>
          <div style={{color: 'red'}}>{error.fullname}</div>
                </Col>
           <Col lg={4} md={4} sm={12}>
           <input type="text"
           name="secondname"
           value={initalstate.secondname}
           onChange={handleInput}
           placeholder="Second Name"
           />
           <div style={{color: 'red'}}>{error.secondname}</div>
           </Col>
           <Col lg={4} md={4} sm={12}>
            <input 
            type='text'
            name='lastname'
            value={initalstate.lastname}
            onChange={handleInput}
            placeholder="Last Name"
            />
            <div style={{color: 'red'}}>{error.lastname}</div>
           </Col>
          </Row>
            </Col>
          </Row>
          </div>
          <div className="inputPart">
            <Row className="Row">
              <Col lg={4} md={4} sm={12}>
              <label>Address:</label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <input 
                    type="text"
                    name="laneone"
                    value={initalstate.laneone}
                    onChange={handleInput}
                    placeholder="Street Address"
                    />
                    <div style={{color: 'red'}}>{error.laneone}</div>
                  </Col>
                </Row>
                <Row className="row">
                <Col>
                 <input 
                 type="text"
                 name="lanetwo"
                 value={initalstate.lanetwo}
                 onChange={handleInput}
                 placeholder="Street Address Line 1"
                 />
                 <div style={{color: 'red'}}>{error.lanetwo}</div>
                  </Col>
                </Row>
                <Row className="row">
                  <Col lg={4} md={4} sm={12}>
                  <input 
                  type='text'
                  name="city"
                  value={initalstate.city}
                  onChange={handleInput}
                  placeholder="City"
                  />
                  <div style={{color: 'red'}}>{error.city}</div>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                  <input 
                  type='text'
                  name="state"
                  value={initalstate.state}
                  onChange={handleInput}
                  placeholder="State"
                  />
                  <div style={{color: 'red'}}>{error.state}</div>
                  </Col>
                </Row>
                <Row className="row">
                  <Col lg={4} md={4} sm={12}>
                  <input 
                  type='text'
                  name="pincode"
                  value={initalstate.pincode}
                  onChange={handleInput}
                  placeholder="Pincode"
                  />
                  <div style={{color: 'red'}}>{error.pincode}</div>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                  <input 
                  type='text'
                  name="country"
                  value={initalstate.country}
                  onChange={handleInput}
                  placeholder="Country"
                  />
                  <div style={{color: 'red'}}>{error.country}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="inputPart">
            <Row className="Row">
                <Col lg={4} md={4} sm={12}>
                  <label>Phone Number:</label>
                </Col>
                <Col lg={8} md={8} sm={12}>
                  <Row className="row">
                    <Col lg={4} md={4} sm={12}>
                    <input 
                  type='text'
                  name="phonenumber"
                  value={initalstate.phonenumber}
                  onChange={handleInput}
                  placeholder="Phone Number"
                  />
                  <div style={{color: 'red'}}>{error.phonenumber}</div>
                    </Col>
                  </Row>
                </Col>
            </Row>
            </div>
            <div className="inputPart">
            <Row className="Row">
                <Col lg={4} md={4} sm={12}>
                  <label>Email:</label>
                </Col>
                <Col lg={8} md={8} sm={12}>
                  <Row className="row">
                    <Col lg={4} md={4} sm={12}>
                    <input 
                  type='text'
                  name="email"
                  value={initalstate.email}
                  onChange={handleInput}
                  placeholder="Eg: name@example.com"
                  />
                  <div style={{color: 'red'}}>{error.email}</div>
                    </Col>
                  </Row>
                </Col>
            </Row>
            </div>
            <div className="inputPart">
            <Row className="Row">
                <Col lg={4} md={4} sm={12}>
                  <label>Birthdate:</label>
                </Col>
                <Col lg={8} md={8} sm={12}>
                  <Row className="row">
                    <Col lg={4} md={4} sm={12}>
                    <input 
                  type='text'
                  name="birthdate"
                  value={initalstate.birthdate}
                  onChange={handleInput}
                  placeholder="MM/DD/YY"
                  />
                  <div style={{color: 'red'}}>{error.birthday}</div>
                    </Col>
                  </Row>
                </Col>
            </Row>
            </div>
          </div>
          </div>
          <div className='partTwo'>
          <div className="partHead">
            <h4 className="phead">Education</h4>
          </div>
          <div className="inputPart">
              <Row className="Row">
                  <Col lg={4} md={4} sm={12}>
                    <label>Write your education up to the date:</label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                      <textarea 
                      rows="10" 
                      cols="50" 
                      placeholder="Education"
                      name="education"
                      value={initalstate.education}
                      onChange={handleInput}
                      ></textarea>
                       <div style={{color: 'red'}}>{error.education}</div>
                      </Col>
                    </Row>
                  </Col>
              </Row>
          </div>
          
          </div>
          <div className='partTwo'>
          <div className="partHead">
            <h4 className="phead">Skills/Qualification</h4>
          </div>
          <div className="inputPart">
              <Row className="Row">
                  <Col lg={4} md={4} sm={12}>
                    <label>Skills:</label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                      <textarea 
                      rows="10" 
                      cols="50" 
                      placeholder="Skills"
                      name="skills"
                      value={initalstate.skills}
                      onChange={handleInput}
                      ></textarea>
                       <div style={{color: 'red'}}>{error.skills}</div>
                      </Col>
                    </Row>
                  </Col>
              </Row>
              <Row className="Row">
                  <Col lg={4} md={4} sm={12}>
                    <label>Qualifications:</label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                      <textarea 
                      rows="10" 
                      cols="50" 
                      placeholder="Education"
                      name="qualification"
                      value={initalstate.qualification}
                      onChange={handleInput}
                      ></textarea>
                       <div style={{color: 'red'}}>{error.qualification}</div>
                      </Col>
                    </Row>
                  </Col>
              </Row>
          </div>
          
          </div>
          <div className="partTwo">
          <div className="partHead">
            <h4 className="phead">Skills/Qualification</h4>
          </div>
          <div className="inputPart">
            <p>By clicking the submit button below, I cerity that all of the information provided by me on this application is true and complete, and I understand that if any false information, ommissions, or misrepresentations are discovered, my application may be rejected and, if I am employed, my employement may be terminated at any time. </p>
            <p>In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment and compenstation can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option.</p>
            <p>I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company.</p>
            <button className='button'>submit</button>
          </div>
          </div>

      </form>
      </Container>
        </div>
    )
}

export default Recruitment
