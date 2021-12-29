import Child from "./childComponent/chlid";
import Teacher from "./teacherComponent/teacher";
import Parents from "./ParentsComponenet/parent";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import HomePage from "../Component/HomePageComponent/homePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Child" element={<Child />} />
      <Route path="/Teacher" element={<Teacher />} />
      <Route path="/Parents" element={<Parents />} />
    </Routes>
  );
};

export default Routing;
