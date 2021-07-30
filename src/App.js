import axios from 'axios'
import './App.css';
import {GoogleLogin} from 'react-google-login'

function App() {

  const responseSuccessGoogle =res=>{
    console.log(res)
    axios.post('http://localhost:5000/googleLogin',{tokenId:res.tokenId})
         .then(dataRes=>{
           console.log(dataRes)
         }).catch(err=>{
           console.log(err)
         })
  }

  const responseFailureGoogle = res=>{
    console.log(res)

  }

  return (
    <div >
      <h3>Google Log In</h3>
      <GoogleLogin
    clientId="228159036348-f9614kbr0ue5uedh7ldt5eqspe48dpii.apps.googleusercontent.com"
    buttonText="Log In With Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseFailureGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
