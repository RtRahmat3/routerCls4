import React, { useState } from "react";

export default function Contact() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      student.firstName === "" ||
      student.lastName === "" ||
      student.email === "" ||
      student.password === "" ||
      student.dateOfBirth === ""
    ) {
      alert("Please provide all values");
    } else {
      setSubmittedData(student);
      setStudent({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('react-project/src/pages/WhatsApp Image 2024-03-17 at 11.46.25_fb1c9a89.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="w-2/6 mx-auto mt-10 rounded font-sans"
    >
      <div className="bg-indigo-100 p-5 rounded">
        <div className="mb-8">
          <h2 className="text-4xl font-normal">
            Let's collect <span className="text-indigo-500">Student</span> info
          </h2>
          <p>To ease daily work</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={handleChange}
            value={student.firstName}
            type="text"
            name="firstName"
            placeholder="Write here"
            className="px-2 py-2 bg-transparent rounded focus:border-2 outline-none bg-white border-indigo-500 transition-all"
          />
          <input
            onChange={handleChange}
            value={student.lastName}
            type="text"
            name="lastName"
            placeholder="Write here"
            className="px-2 py-2 bg-transparent rounded focus:border-2 outline-none bg-white border-indigo-500 transition-all"
          />
          <input
            onChange={handleChange}
            value={student.email}
            type="email"
            name="email"
            placeholder="Write here"
            className="px-2 py-2 bg-transparent rounded focus:border-2 outline-none bg-white border-indigo-500 transition-all"
          />
          <input
            onChange={handleChange}
            value={student.password}
            type="password"
            name="password"
            placeholder="Write here"
            autoComplete="new-password"
            className="px-2 py-2 bg-transparent rounded focus:border-2 outline-none bg-white border-indigo-500 transition-all"
          />
          <input
            onChange={handleChange}
            value={student.dateOfBirth}
            type="date"
            name="dateOfBirth"
            placeholder="Write here"
            className="px-2 py-2 bg-transparent rounded focus:border-2 outline-none bg-white border-indigo-500 transition-all"
          />
          <button
            type="submit"
            className="bg-indigo-500 px-2 py-2 text-white rounded mt-8"
          >
            Submit
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="mt-10 p-5 bg-white rounded shadow-md">
          <h3 className="text-xl font-semibold">Submitted Data:</h3>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Date of Birth: {submittedData.dateOfBirth}</p>
        </div>
      )}
    </div>
  );
}
