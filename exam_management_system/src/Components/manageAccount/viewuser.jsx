import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@mui/material";

function Viewuser() {
  const [user, setuser] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/view-account");
        setuser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUser();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div className="userList">
        {user.map((user) => (
          <div className="user" key={user.user_id}>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.password}</h1>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add-account">Add User</Link>
      </button>
    </div>
  );
}

export default Viewuser;
