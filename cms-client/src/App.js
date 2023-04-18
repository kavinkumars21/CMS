import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import ComplaintHistory from "./component/ComplaintHistory";

function App() {

  const route = useRoutes([
    {path: '/', element: <Login /> },
    {path: '/home', element: <Home /> },
    {path: '/history', element: <ComplaintHistory /> }
  ])
  return (
    <div>
      {route}
    </div>
  );
}

export default App;
