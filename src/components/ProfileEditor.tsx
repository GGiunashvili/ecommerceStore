"use client";

import React from "react";

interface ProfileEditorProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (newFirstName: string) => void;
  onLastNameChange: (newLastName: string) => void;
}

const ProfileEditor: React.FC<ProfileEditorProps> = ({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Edit Profile</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => onFirstNameChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => onLastNameChange(e.target.value)}
      />
    </div>
  );
};

export default ProfileEditor;
