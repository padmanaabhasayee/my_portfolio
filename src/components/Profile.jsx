import React, { useState } from "react";
import { userProfileDefaultData } from "../Utils/Constants";
import "./profile.css";

export default function Profile() {
  const [profileData, setProfileData] = useState(userProfileDefaultData);

  // console.log(profileData)

  return (
    <div className="ProfileContainer">
      <div className="ProfileData">
        <div className="ProfileHeader">
          <div className="ProfilePicDiv">
            <img
              alt="userPhoto"
              className="profilePic"
              src={profileData["Photo"]}
            />
          </div>
          <h1>{profileData["Name"]}</h1>
          <div className="BioData">
            <p className="userData">
              <b>UserName:</b> {profileData["UserName"]}
            </p>
            <p className="userData">
              <b>EmailID:</b> {profileData["EmailID"]}
            </p>
            <p className="userData">
              <b>Number:</b> {profileData["PhoneNo"]}
            </p>
            <p className="userData">
              <b>Address:</b> {profileData["Address"]}
            </p>
            <p className="userData">
              <b>Description:</b> {profileData["Description"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
