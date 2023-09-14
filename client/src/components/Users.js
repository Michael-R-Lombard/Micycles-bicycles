import React, { useEffect, useState } from "react";




function Users (){
    const [users, setUsers] = useState([]);
    function getUsers() {
        fetch('/users')
        .then(r=>r.json())
        .then(users => setUsers(users)) 
      }

      useEffect(() => {
        getUsers();
      }, []);
    //   console.log(users)
    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default Users;