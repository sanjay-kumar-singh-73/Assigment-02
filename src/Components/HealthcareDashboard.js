import React, { useState } from "react";
import "./HealthcareDashboard.css";

const HealthcareDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", age: "", file: null });
  };

  return (
    <div className="dashboard-container">
      <h1>Healthcare Dashboard</h1>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            required
          />
        </label>
        <label>
          Upload File:
          <input type="file" name="file" onChange={handleFileChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthcareDashboard;
