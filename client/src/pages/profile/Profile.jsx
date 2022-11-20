import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../login/Login";
import Timeline from "../../components/Timeline";
import Explore from "../../components/Explore";
import NotFound from "../../components/NotFound";
import Survey from "../survey/Survey";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <Sidebar />

      <div className="profile">
        <Routes>
          <Route path="*" element=<NotFound /> />
          <Route path="/" element={<Navigate to='/login'/>} exact />
          <Route path="/login" element=<Login /> />
          <Route path="/survey" element=<Survey /> />
          <Route path="/yourtimeline" element=<Timeline /> />
          <Route path="/explore" element=<Explore /> />
        </Routes>
      </div>
    </>
  );
}
