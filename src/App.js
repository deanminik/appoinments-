import Reac,{Fragment, useEffect, useState} from 'react';
import Appointment from './components/Appointment';
import Form from "./components/Form";
import { LottieAnimationsDoctor } from './assets/LottieAnimations';
import { Date } from './assets/Date';


function App() {

   // Are there appointments in localstorage?
   let initialAppointments = JSON.parse(localStorage.getItem('appointment_s'));
   
   if(!initialAppointments){

    initialAppointments = [];
   }

  const [appointment_s, saveAppointments] = useState([
    initialAppointments
  ]);
   
   //effect activated when the state changes 

    useEffect(() => {

      let initialAppointments = JSON.parse(localStorage.getItem('appointment_s'));
       if(initialAppointments){
         localStorage.setItem('appointment_s', JSON.stringify(appointment_s));
       }else{
         localStorage.setItem('appointment_s', JSON.stringify([]));
       }
      
    }, [appointment_s])  //->Only one time reacts  [])


  //this funtion takes the current appointmet  and add the new one 
  const createAppointment = appointment =>{

    saveAppointments([
      ...appointment_s,
      appointment
    ])
  }
   
  //Delete an appointment using its id
  const deleteAppointment = id =>{

    // this creates a new array 
    const newAppointments = appointment_s.filter(appointment => appointment.id !== id);
    saveAppointments(newAppointments);

  } 

   const title = appointment_s.length === 0 ? 'There are not appointments' : 'Manage your appointments ';

  return (
    <Fragment>
      <h1>Patient manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <LottieAnimationsDoctor/>
              <Form
                createAppointment={createAppointment}
              />      
          </div>
          <div className="one-half column">
            <Date/>
            <h2>{title}</h2>
             {appointment_s.map(appointment =>(
                <Appointment
                  //  these are the all properties that you are going to share
                    key={appointment.id}
                    appointment={appointment}
                    deleteAppointment={deleteAppointment}

                />
             ))}
              
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
