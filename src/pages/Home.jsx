import React, { useEffect, useState } from 'react';
import adminService from '../services/admin';

function Home() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminService.getAll().then((returnedAdmins) => {
      setAdmins(returnedAdmins);
    });
  }, []);

  if (admins.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Hello world!</h1>
      {admins.map((admin) => (
        <div key={admin.name}>
          <h1>{admin.name}</h1>
          <p>{admin.password}</p>
          <p>{admin.email}</p>
        </div>
      ))}

    </div>
  );
}

export default Home;