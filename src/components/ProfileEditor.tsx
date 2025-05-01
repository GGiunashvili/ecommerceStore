"use client";

const ProfileEditor = () => {
  const firstName = "John";
  const lastName = "Doe";
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Edit Profile</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        // onChange={(e) => onFirstNameChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        // onChange={(e) => onLastNameChange(e.target.value)}
      />
    </div>
  );
};

export default ProfileEditor;
