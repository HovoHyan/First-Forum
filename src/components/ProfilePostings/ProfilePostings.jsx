import React from "react";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";

const ProfilePostings = () => {
  const { activeData } = useSelector(selectActiveUsers);
  return (
    <div style={{ marginTop: "20px" }}>
      <p>{activeData[0]?.userName} has not posted any content recently.</p>
    </div>
  );
};

export default ProfilePostings;
