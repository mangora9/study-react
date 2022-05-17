import React, {useState} from 'react';
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [usersInfo, setUsersInfo] = useState([]);

  const saveUserInfoHandler = (userInfo) => {
    const user = {...userInfo, id: Math.random()};

    setUsersInfo((prevState) => [...prevState, user]);
  }
  return (
    <div>
      <AddUser onAddUserInfo={saveUserInfoHandler} />
      <UserList users={usersInfo}/>
    </div>
  );
}

export default App;
