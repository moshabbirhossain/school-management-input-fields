import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Teachers from "./Teachers";
import Student from "./Student";
import Staff from "./Staff";
import Subject from "./Subject";
import Class from "./Class";
import Notice from "./Notice";
import Fee from "./Fee";
import Admission from "./Admission";
import { Result } from "postcss";
import Others from "./Others";
import Id from "./Id";
import Salary from "./Salary";
import Report from "./Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/subject",
    element: <Subject />,
  },
  {
    path: "/class",
    element: <Class />,
  },
  {
    path: "/notice",
    element: <Notice />,
  },
  {
    path: "/fee",
    element: <Fee />,
  },
  {
    path: "/admission",
    element: <Admission />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/others",
    element: <Others />,
  },
  {
    path: "/id",
    element: <Id />,
  },
  {
    path: "/salary",
    element: <Salary />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
