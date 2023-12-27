import React, { useState } from "react";
// import Add from "../img/addAvatar.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log("Before updateProfile:", displayName);

      await updateProfile(user, {
        displayName: displayName,
      });

      navigate("/");

      // await setDoc(doc(db, "users", user.uid), {
      //   uid: user.uid,
      //   displayName,
      //   email,
      // });

      // const storageRef = ref(storage, displayName);

      // await updateProfile(user, {
      //   displayName,
      // });

      // await setDoc(doc(db, "users", user.uid), {
      //   uid: user.uid,
      //   displayName,
      //   email,
      // });

      // add avatar storage
      // const storageRef = ref(storage, displayName);
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers
      // uploadTask.on(
      //   (error) => {
      //     setErr(true);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateProfile(user, {
      //         displayName,
      //         photoURL: downloadURL,
      //       });
      //       // await setDoc(doc(db, "users", user.uid), {
      //       //   uid: user.uid,
      //       //   displayName,
      //       //   email,
      //       //   photoURL: downloadURL,
      //       // });

      //       // await setDoc(doc(db, "userChats", user.uid), {});
      //       navigate("/");
      //     });
      //   }
      // );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        {/* top text */}
        <span className="logo">Chat App</span>
        <span className="title">Register</span>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display your name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          {/* add avatar */}
          {/* <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label> */}
          <button>Sign Up!!</button>
          {err && <span>Something went wrong!</span>}
        </form>

        {/* login? text */}
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
