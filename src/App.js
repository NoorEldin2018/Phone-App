import { Button, Container, LightBox } from "./components/layout/index";
import { List, UserForm } from "./components/user";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [users, setUsers] = useState(
    // if the value returned by JSON.parse is nullish, intialize as an empty array
    JSON.parse(localStorage.getItem("users")) ?? []
  );

  const deleteHandler = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
  };

  const editHandlerUser = (id) => {
    const userInfo = users.find((user) => user.id === id);
    console.log(userInfo);
  };

  const insertUser = (data) => {
    setUsers([...users, data]);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const searchHandler = () => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // const usersList = searchHandler().map((el,id) => <UsersList deleteHandler={deleteHandler} key={id} {...el} />)

  return (
    <>
      <Container>
        <Button onClick={toggleHandler}>Insert User</Button>
        <input
          type="text"
          name="user"
          value={searchUser}
          placeholder="Enter your username"
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </Container>
      {toggle && (
        <LightBox toggleHandler={toggleHandler}>
          <UserForm insertUser={insertUser} />
        </LightBox>
      )}

      <Container>
        {/* {users.length > 0 ? usersList : <p>There is no users</p>} */}
        <List
          users={searchHandler()}
          editHandler={editHandlerUser}
          deleteHandler={deleteHandler}
        />
      </Container>
    </>
  );
}

export default App;
