import React from "react";
import { useParams } from "react-router-dom";

const User = (props) => {
  const { username } = useParams();
  return <h1 className="text-center text-orange-500">User: {Number(username)}</h1>;
};

export default User;
