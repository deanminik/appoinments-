import React, { Fragment, useState } from "react";
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from "prop-types";


const Form = ({createAppointment}) => {

    //create appointment state

    const [appointment, updateAppointment] = useState({

        pet:'',  //<-name="pet"
        owner:'',
        date:'',
        time:'',
        symptoms:''


    });

    const [error, updateError] = useState(false)

//This starts everytime when the user writes!

const updateState = e =>{
    //console.log("this is the name :"+ e.target.name+" " + "value :"+e.target.value);
    updateAppointment({
        ...appointment, //copy
        [e.target.name] : e.target.value
    })

}
//extract values from state
const {pet,owner,date,time,symptoms}=appointment;

const subAppointment =e =>{
    e.preventDefault();
    
    if(pet.trim()===''|| owner.trim()===''|| date.trim()===''|| time.trim()===''|| symptoms.trim()===''){
      updateError(true);  
      swal({
            title: "Warming!",
            text: "Some entries are empty, complete all to submit the form.",
            icon: "warning",
            button: "OK!",
          });
        return;
    }

    updateError(false);
     
    //add id random
     appointment.id = uuidv4();

    //create Appointment 
    createAppointment(appointment);

    //Clean form
    updateAppointment({
      pet:'',  //<-name="pet"
      owner:'',
      date:'',
      time:'',
      symptoms:''
    }) 

}




  return (
      
    <Fragment>
        
      <h2>Create appointment</h2>
      

      <form
         onSubmit={subAppointment}
      >

        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        
        />

      

        <label>Symptoms</label>
           
       <textarea className="u-full-width" name="symptoms" onChange={updateState} value={symptoms}  >
           
       </textarea>

       <button type="submit" className="u-full-width button-primary ">
           Add appointment
       </button>
      </form>
    </Fragment>
  );
};


//props

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}

export default Form;
