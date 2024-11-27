import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Select Student Type": "Select Student Type",
      "Existing Student": "Existing Student",
      "New Student": "New Student",
      "Name of the Student": "Name of the Student",
      "Please enter the Name of the Student":
        "Please enter the Name of the Student",
      Age: "Age",
      "Age of the Student": "Age of the Student",
      "Class of the Student": "Class of the Student",
      "Current Class": "Current Class",
      "Roll Number": "Roll Number",
      "Roll no / Reg no.": "Roll no / Reg no.",
      City: "City",
      "City Where student resides": "City Where student resides",
      "Overall Marks or Percentage": "Overall Marks or Percentage",
      "Enter the overall percentage of student":
        "Enter the overall percentage of student",
      "Image of Student's Report Card": "Image of Student's Report Card",
      Submit: "Submit",
      "Student Name": "Student Name",
      Gender: "Gender",
      "Select Gender": "Select Gender",
      Male: "Male",
      Female: "Female",
      Other: "Other",
      "Date of Birth": "Date of Birth",
      "City of Student Residence": "City of Student Residence",
      "Add an Image of the Student": "Add an Image of the Student",
      "Admin Panel For Student Management":
        "Admin Panel For Student Management",
      "Welcome to our Student Management System":
        "Welcome to our Student Management System",
    },
  },
  bn: {
    translation: {
      "Select Student Type": "ছাত্রের ধরন নির্বাচন করুন",
      "Existing Student": "বিদ্যমান ছাত্র",
      "New Student": "নতুন ছাত্র",
      "Name of the Student": "ছাত্রের নাম",
      "Please enter the Name of the Student": "ছাত্রের নাম লিখুন",
      Age: "বয়স",
      "Age of the Student": "ছাত্রের বয়স",
      "Class of the Student": "ছাত্রের শ্রেণী",
      "Current Class": "বর্তমান শ্রেণী",
      "Roll Number": "রোল নম্বর",
      "Roll no / Reg no.": "রোল নম্বর / রেজি নম্বর",
      City: "শহর",
      "City Where student resides": "শহর যেখানে ছাত্র বাস করে",
      "Overall Marks or Percentage": "মোট মার্কস বা শতাংশ",
      "Enter the overall percentage of student": "ছাত্রের মোট শতাংশ লিখুন",
      "Image of Student's Report Card": "ছাত্রের রিপোর্ট কার্ডের ছবি",
      Submit: "জমা দিন",
      "Student Name": "ছাত্রের নাম",
      Gender: "লিঙ্গ",
      "Select Gender": "লিঙ্গ নির্বাচন করুন",
      Male: "পুরুষ",
      Female: "মহিলা",
      Other: "অন্যান্য",
      "Date of Birth": "জন্ম তারিখ",
      "City of Student Residence": "ছাত্রের আবাসস্থল শহর",
      "Add an Image of the Student": "ছাত্রের একটি ছবি যোগ করুন",
      "Admin Panel For Student Management":
        "ছাত্র ব্যবস্থাপনার জন্য প্রশাসনিক প্যানেল",
      "Welcome to our Student Management System":
        "আমাদের ছাত্র ব্যবস্থাপনা সিস্টেমে স্বাগতম",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "bn", // Set default language to Bengali
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
