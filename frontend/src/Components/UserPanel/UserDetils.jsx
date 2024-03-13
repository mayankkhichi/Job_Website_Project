import React from "react";
import UserEducation from "./UserEducation";
import UserExperience from "./UserExperience";
import UserProfile from "./UserProfile";

function UserDetils({ tab }) {
  return (
    <div>

      
      {tab === "profile" && <UserProfile></UserProfile>}
      {/* {tab === "skills" && <Skills></Skills>} */}
      {tab === "education" && <UserEducation></UserEducation>}
      {tab === "experience" && <UserExperience></UserExperience>}
    </div>
  );
}

export default UserDetils;
