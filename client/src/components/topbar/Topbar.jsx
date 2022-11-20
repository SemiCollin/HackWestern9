import "./Topbar.css";
import { Search, Person, Feed, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BeSuccessful</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink"> Homepage </span>
          <span className="topbarLink"> Timeline </span> */}

          <Link
            style={{
              padding: "1rem",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/"
          >
            Homepage
          </Link>
          <Link
            style={{
              padding: "1rem",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login{" "}
          </Link>
          <Link
            style={{
              padding: "1rem",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/yourtimeline"
          >
            Your Timeline{" "}
          </Link>
          <Link
            style={{
              padding: "1rem",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/explore"
          >
            Explore{" "}
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Feed />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/Pfp/Pfp1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}