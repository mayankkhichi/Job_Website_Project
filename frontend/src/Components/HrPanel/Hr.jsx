import { useContext, useEffect, useState } from "react";
import HrSidebar from "./HrSidebar";
import HrJobs from "./HrJobs";
import PostJob from "./PostJob";
import SearchCandidate from "./SearchCandidate";
import EditUserProfile from "./EditUserProfile";
import { AllFunction } from "../store/Store.jsx";
import axios from "axios";

export default function Hr() {
  const [selectedTab, setSelectedTab] = useState("jobs");
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };
  const { handleAuth } = useContext(AllFunction);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      axios.get("/").then((res) => {
        if (res.data.Status === "Success") {
          if(res.data.type==="hr")
          handleAuth("hr",true);
        }
      });
    }
  });

  return (
    <div style={{ display: "flex" }}>
      <HrSidebar onSelectTab={handleTabSelect} />
      <div style={{ flex: 1 }}>
        {/* Render the selected tab component */}
        {selectedTab === "jobs" && <HrJobs onSelectTab={handleTabSelect} />}
        {selectedTab === "search" && <SearchCandidate></SearchCandidate>}
        {selectedTab === "setting" && <EditUserProfile></EditUserProfile>}
        {selectedTab === "postJob" && (
          <PostJob onSelectTab={handleTabSelect}></PostJob>
        )}
      </div>
    </div>
  );
}
