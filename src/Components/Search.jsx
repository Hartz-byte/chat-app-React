import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      console.log("Query Snapshot:", querySnapshot);

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log("Document Data:", doc.data());
      });

    } catch (err) {
      console.error("Error during search:", err);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat">
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt=""
          />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
