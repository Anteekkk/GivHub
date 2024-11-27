import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import "../components/i18n";
import axios from 'axios';

const FormComponent = () => {
  const { t } = useTranslation();
  const [studentType, setStudentType] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    age: "",
    studentClass: "",
    rollNumber:"",
    city: "",
    marks: "",
    image: null,
  });

  const [newStudentDetails, setNewStudentDetails] = useState({
    studentName: "",
    age: "",
    gender: "",
    dob: "",
    currentClass: "",
    rollNumber: "",
    address:"",
  });

  const handleStudentTypeChange = (e) => {
    setStudentType(e.target.value);
  };

  const handleInputChange = (e, index, field) => {
    const values = [...studentDetails.subjects];
    values[index][field] = e.target.value;
    setStudentDetails({ ...studentDetails, subjects: values });
  };

  const addSubject = () => {
    setStudentDetails({
      ...studentDetails,
      subjects: [...studentDetails.subjects, { subjectName: "", marks: "" }],
    });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // console.log(studentDetails);
    try{
      // console.log("form submit");
      const resp = await axios.post("http://localhost:3000/student");
      if(resp){
        alert("Details Updated");
      }
    }catch(err){
      console.log(err);
    }
  };

  // const handleNewStudentFormSubmit = async(e) => {
  //   e.preventDefault();
  //   console.log(newStudentDetails);
  //   try{
  //     // console.log("form submit");
  //     const resp = await axios.post("http://localhost:3000/student");
  //     if(resp){
  //       alert("New Student Registered");
  //     }
  //   }catch(err){
  //     console.log(err);
  //   }
  // };


  const handleNewStudentFormSubmit = async (e) => {
    e.preventDefault();
  
    const studentData = {
      rno: newStudentDetails.rollNumber,
      name: newStudentDetails.studentName,
      studentclass: newStudentDetails.currentClass,
      age: newStudentDetails.age,
      gender: newStudentDetails.gender,
      dob: newStudentDetails.dob,
      address: newStudentDetails.city,
    };
  
    try {
      const resp = await axios.post("http://localhost:3000/student", studentData);
      if (resp.data.msg) {
        alert("New Student Registered");
      } else {
        alert("Student already exists");
      }
      setNewStudentDetails({
        studentName: "",
        age: "",
        gender: "",
        dob: "",
        currentClass: "",
        rollNumber: "",
        address: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleNewStudentFieldChange = (e) => {
    const { name, value } = e.target;
    setNewStudentDetails({ ...newStudentDetails, [name]: value });
  };

  return (
    <div className="form-container">
      <div className="form-type">
        <label>{t("Select Student Type")}:</label>
        <select value={studentType} onChange={handleStudentTypeChange}>
          <option value="">{t("Select")}</option>
          <option value="existing">{t("Existing Student")}</option>
          <option value="new">{t("New Student")}</option>
        </select>
      </div>
      {studentType === "existing" && (
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {t("Name of the Student")}
            </label>
            <input
              type="text"
              placeholder={t("Please enter the Name of the Student")}
              className="form-control"
              id="name"
              name="name"
              value={studentDetails.name}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rollNumber" className="form-label">
              {t("Roll Number")}
            </label>
            <input
              type="text"
              placeholder={t("Roll no / Reg no.")}
              className="form-control"
              id="rollNumber"
              name="rollNumber"
              value={studentDetails.rollNumber}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              {t("Age")}
            </label>
            <input
              type="number"
              placeholder={t("Age of the Student")}
              className="form-control"
              id="age"
              name="age"
              value={studentDetails.age}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              {t("Class of the Student")}
            </label>
            <input
              type="text"
              className="form-control"
              id="studentClass"
              name="studentClass"
              value={studentDetails.studentClass}
              onChange={handleFieldChange}
              placeholder={t("Current Class")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              {t("City")}
            </label>
            <input
              type="text"
              placeholder={t("City Where student resides")}
              className="form-control"
              id="city"
              name="city"
              value={studentDetails.city}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marks" className="form-label">
              {t("Overall Marks or Percentage")}
            </label>
            <input
              type="number"
              placeholder={t("Enter the overall percentage of student")}
              className="form-control"
              id="marks"
              name="marks"
              value={studentDetails.marks}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              {t("Image of Student's Report Card")}
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={(e) =>
                setStudentDetails({
                  ...studentDetails,
                  image: e.target.files[0],
                })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {t("Submit")}
          </button>
        </form>
      )}
      {studentType === "new" && (
        <form className="form-container" onSubmit={handleNewStudentFormSubmit}>
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label">
              {t("Student Name")}
            </label>
            <input
              type="text"
              placeholder={t("Please enter the Name of the Student")}
              className="form-control"
              id="studentName"
              name="studentName"
              value={newStudentDetails.studentName}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              {t("Age")}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder={t("Age of the Student")}
              id="age"
              name="age"
              value={newStudentDetails.age}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              {t("Gender")}
            </label>
            <select
              id="gender"
              className="form-control"
              name="gender"
              value={newStudentDetails.gender}
              onChange={handleNewStudentFieldChange}
            >
              <option value="">{t("Select Gender")}</option>
              <option value="male">{t("Male")}</option>
              <option value="female">{t("Female")}</option>
              <option value="other">{t("Other")}</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              {t("Date of Birth")}
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={newStudentDetails.dob}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              {t("City of Student Residence")}
            </label>
            <input
              type="text"
              placeholder={t("City of Student Residence")}
              className="form-control"
              id="city"
              name="city"
              value={newStudentDetails.city}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="currentClass" className="form-label">
              {t("Class")}
            </label>
            <input
              type="text"
              placeholder={t("Current Class")}
              className="form-control"
              id="currentClass"
              name="currentClass"
              value={newStudentDetails.currentClass}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rollNumber" className="form-label">
              {t("Roll Number")}
            </label>
            <input
              type="text"
              placeholder={t("Roll no / Reg no.")}
              className="form-control"
              id="rollNumber"
              name="rollNumber"
              value={newStudentDetails.rollNumber}
              onChange={handleNewStudentFieldChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              {t("Add an Image of the Student")}
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={(e) =>
                setStudentDetails({
                  ...studentDetails,
                  image: e.target.files[0],
                })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {t("Submit")}
          </button>
        </form>
      )}
    </div>
  );
};

const Student = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="sec">
        <div className="main-content">
          <div className="intro">
            <h1>{t("Admin Panel For Student Management")}</h1>
            <p>{t("Welcome to our Student Management System")}</p>
          </div>
          <div className="main-form">
            <FormComponent />
          </div>
        </div>
        <div className="language-selector">
          <div className="in">
            <h6>Choose Preffered language</h6>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("bn")}>বাংলা</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
