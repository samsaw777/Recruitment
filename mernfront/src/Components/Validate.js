const Axios = require('axios')
export default function Validate (value,fun,initial){

    let errors = {}
    if(!value.fullname || !value.secondname || !value.lastname || !value.laneone || !value.lanetwo || !value.city || !value.state || !value.pincode || !value.country || !value.phonenumber || !value.email || !value.birthdate || !value.education || !value.skills || !value.qualification){
      errors.fullname = "First name required"
      errors.lastname = "Last name required"
      errors.secondname = "Second name required"
      errors.laneone = "Address required"
      errors.lanetwo = "Address required"
      errors.city = "City required"
      errors.state = "State required"
      errors.country = "Country required"
      errors.phonenumber = "Phone Number required"
      errors.education = "Education required"
      errors.skills = "Skills required"
      errors.qualification = "Qualification required"
      errors.email = "Email required"
      errors.birthdate = "Birthdate required"
      errors.pincode = "Pincode required"
    }
    else if(!value.fullname){
      errors.fullname = "First name required"
    }
    else if(!value.secondname){
      errors.secondname = "Second name required"
    }
    else if(!value.lastname){
      errors.lastname = "Last name required"
    }
    else if(!value.laneone){
      errors.laneone = "Address required"
    }
    else if(!value.lanetwo){
      errors.lanetwo = "Address required"
    }
    else if(!value.city){
      errors.city = "City required"
    }
    else if(!value.country){
      errors.country = "Country required"
    }
    else if(!value.state){
      errors.state = "State required"
    }
    else if(!value.pincode){
      errors.pincode = "Pincode required"
    }
    else if(!value.email){
      errors.email = "Email required"
    }
    else if(!value.phonenumber){
      errors.phonenumber = "Phonenumber required"
    }
    else if(!value.skills){
      errors.skills = "Skills required"
    }
    else if(!value.qualification){
      errors.qualification = "Qualification required"
    }
    else if(!value.education){
      errors.education = "Education required"
    }
    else{
        var complete = value.fullname +' '+ value.secondname+ ' '+ value.lastname
        Axios.post('/',{
          fullname: complete,
          streetone: value.laneone,
          streettwo: value.lanetwo,
          city: value.city,
          state: value.state,
          pincode: value.pincode,
          country: value.country,
          number: value.phonenumber,
          email: value.email,
          birthdate: value.birthdate,
          education: value.education,
          skills: value.skills,
          qualification: value.qualification
        }).then(res =>{
          console.log(res, 'Signature added!');
          fun(initial)
        }).catch(err=>{
          console.log(err.message,'Signature not added');
        });
    }
    return errors

}