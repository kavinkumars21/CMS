import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {

  const route = useRoutes([
    {path: '/home', element: <Home /> },
    {path: '/', element: <Login /> }
  ])
  return (
    <div>
      {route}
    </div>
  );
}

export default App;
