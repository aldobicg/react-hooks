import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home {user?.name}</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
