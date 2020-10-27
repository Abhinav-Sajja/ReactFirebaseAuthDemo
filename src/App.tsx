import React from 'react';
import Main from './main';
import './App.css';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  //firebase config
})

const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <SignOut />
        <section>
        {user ? <Main /> : <SignIn />}
      </section>
      <ToastContainer/>
    </div>
  );

 function SignIn() {
  const signInWithGoogle = () => {
    const GoogleAuth = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(GoogleAuth);
    const gsuccesful = () => toast.info("Follow the popup to signin");
    gsuccesful()
  }
  const signInWithGithub = () => {
    const GithubAuth = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(GithubAuth);
     const ghsuccesful = () => toast.info("Follow the popup to signin");
    ghsuccesful()
  }

   const SignInWithFacebook = () => {
    const FacebookAuth = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(FacebookAuth);
     const fsuccesful = () => toast.info("Follow the popup to signin");
    fsuccesful()
  }

  return (
    <div className="SignIn">
      <h1 className="heading">React <span role="img" aria-label="emoji">⚛️</span> Firebase <span role="img" aria-label="emoji">⚡️💪 </span> Auth Demo <span role="img" aria-label="emoji">🔥 </span></h1>
      <section className="email-signin SignIn">
      </section>
      <section className="social-signin SignIn">
     <button type="button" className="google-button SignIn-btn" onClick={signInWithGoogle} >
     <span className="google-button__icon">
     <img  className="google_icon" alt="google-icon" src="https://cdn.iconscout.com/icon/free/png-64/google-453-569326.png"></img>
     </span>
     <span className="google-button__text">Sign in with Google</span>
      </button>
       <button type="button" className="google-button SignIn-btn" onClick={SignInWithFacebook}  >
     <span className="google-button__icon google-button__icon--plus">
      <img  className="facebook_icon" alt="facebook-icon" src="https://cdn.iconscout.com/icon/free/png-64/facebook-1693591-1442632.png"></img>
     </span>
     <span className="google-button__text">Sign in with Facebook</span>
     </button>
       <button type="button" className="google-button SignIn-btn" onClick={signInWithGithub}  >
     <span className="google-button__icon google-button__icon--plus">
      <img  className="github_icon" alt="github-icon" src="https://cdn.iconscout.com/icon/free/png-64/github-39-432446.png"></img>
     </span>
     <span className="google-button__text">Sign in with Github</span>
     </button>
     </section>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <div>
      <Button className="sign-out" variant="contained" color="primary" onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}
}

export default App;

