import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore"; 

import Add from "../assets/add.png"

export const Register = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data value for a Registration 
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    
    try {
      //create User with fierbase
      const res = await createUserWithEmailAndPassword(auth, email, password)

      // Upload file in firabase storage
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on( 
      () => {
        //Error function
        setError(true)
      }, 
      () => {
        //IF upload is done, i get a file URL with getDownloadURL function firebase storage and update profile (add photo)
      getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")

         });
        }
      );
    } catch (err) {
      setError(true)
    }
  }

  

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">My Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: 'none'}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {error && <span>Something as wrong</span>}
            </form>
            <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}


