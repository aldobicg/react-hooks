import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { user, onLogin } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button className="btn btn-primary" onClick={onLogin}>
        Set User
      </button>
    </>
  );
};
