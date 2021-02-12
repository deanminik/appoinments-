import React, { Fragment, useState } from "react";
import swal from 'sweetalert';

const Form = () => {

    //create appointment state

    const [appointment, updateAppointment] = useState({

        pet:'',  //<-name="pet"
        owner:'',
        date:'',
        time:'',
        symptoms:''


    });

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
        swal({
            title: "Warming!",
            text: "Some entries are empty, complete all to submit the form.",
            icon: "warning",
            button: "OK!",
          });
        return;
    }
     

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
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
        
        />

        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
        />

        <label>Symptoms</label>
           
       <textarea className="u-full-width" name="symptoms" onChange={updateState} >
           
       </textarea>

       <button type="submit" className="u-full-width button-primary ">
           Add appointment
       </button>
      </form>
    </Fragment>
  );
};

export default Form;
