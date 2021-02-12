import Reac,{Fragment} from 'react';
import Form from "./components/Form";
import { LottieAnimationsDoctor } from './components/LottieAnimations';



function App() {
  return (
    <Fragment>
      <h1>Patient manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <LottieAnimationsDoctor/>
              <Form/>      
          </div>
          <div className="one-half column">
              
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
