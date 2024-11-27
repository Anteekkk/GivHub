import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode-generator';

// MyChildren Component
const MyChildren = ({ selectedStudents, handleCheckboxChange, onStudentSelect }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  const [latestReport, setLatestReport] = useState(null); // New state for latest report
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // New state for report modal

  useEffect(() => {
    // Replace this with real API call later
    fetchMockData();
  }, []);

  const fetchMockData = () => {
    // Mock data for now
    const mockData = [
      {
        id: 1,
        name: 'Durga',
        profilePhoto: 'https://via.placeholder.com/50',
      },
      {
        id: 2,
        name: 'Ashwini',
        profilePhoto: 'https://via.placeholder.com/50',
      },
      // Add more mock students as needed
    ];
    setStudents(mockData);
  };

  const viewDetails = (id) => {
    // Mock details for now
    console.log("here");
    const mockDetails = {
      id: id,
      name: id === 1 ? 'Durga' : 'Jane Smith',
      fatherName: (id === 1 ? 'Raju' : 'Jane'),
      motherName: (id === 1 ? 'Geetha' : 'Jane'),
      address: 'Durgapur, Bengal',
      gender: id === 1 ? 'Female' : 'Female',
      contact: '915-512-6342',
      dob: '21/03/2016',
      mail: 'durga@gmail.com',
    };
    setSelectedStudentDetails(mockDetails);
    setIsStudentModalOpen(true);
  };

  const viewLatestReport = (id) => {
    // Mock report data for now
    // console.log("here");
    const mockReport = {
      percentage: '85%',
      class: '2',
      reportCard: 'https://via.placeholder.com/400x300', // Placeholder image
    };
    setLatestReport(mockReport);
    setIsReportModalOpen(true);
  };

  const closeStudentModal = () => {
    setIsStudentModalOpen(false);
    setSelectedStudentDetails(null);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
    setLatestReport(null);
  };

  return (
    <div className="my-children">
      <h1>My Students</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id} className={`student-item ${selectedStudents.includes(student.id) ? 'selected' : ''}`}>
            <input 
              type="checkbox" 
              checked={selectedStudents.includes(student.id)}
              onChange={() => {
                handleCheckboxChange(student.id);
                onStudentSelect(student.id);
              }} 
              className="student-checkbox"
            />
            <div className="student-profile">
              <img src={student.profilePhoto} alt={`${student.name}'s profile`} className="profile-photo" />
              <div className="student-info">
                <h3>{student.name}</h3>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => viewDetails(student.id)}>View Child Details</button>
              <button onClick={() => viewLatestReport(student.id)}>View Child Latest Report</button>
            </div>
          </li>
        ))}
      </ol>

      {isStudentModalOpen && selectedStudentDetails && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeStudentModal}>&times;</span>
            <h2>Child Details</h2>
            <p><strong>Name:</strong> {selectedStudentDetails.name}</p>
            <p><strong>Father's Name:</strong> {selectedStudentDetails.fatherName}</p>
            <p><strong>Mother's Name:</strong> {selectedStudentDetails.motherName}</p>
            <p><strong>Address:</strong> {selectedStudentDetails.address}</p>
            <p><strong>Gender:</strong> {selectedStudentDetails.gender}</p>
            <p><strong>Contact:</strong> {selectedStudentDetails.contact}</p>
            <p><strong>Date of Birth:</strong> {selectedStudentDetails.dob}</p>
            <p><strong>Email:</strong> {selectedStudentDetails.mail}</p>
          </div>
        </div>
      )}

      {isReportModalOpen && latestReport && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeReportModal}>&times;</span>
            <h2>Latest Report</h2>
            <p><strong>Class:</strong> 2</p>
            <p><strong>Percentage:</strong> {latestReport.percentage}</p>
            <img src={latestReport.reportCard} alt="Report Card" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

// PaymentForm Component
const PaymentForm = ({ 
    amount, setAmount, 
    showCustomMessage, setShowCustomMessage, 
    customMessage, setCustomMessage, 
    showQRCode, setShowQRCode,
    hideCustomMessage // New prop to control visibility of custom message section
  }) => {
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleCustomMessageChange = (e) => {
      setCustomMessage(e.target.value);
    };
  
    const handleCheckboxChange = (e) => {
      setShowCustomMessage(e.target.checked);
    };
  
    const handlePayment = () => {
      if (amount) {
        setShowQRCode(true);
      } else {
        alert('Please enter an amount.');
      }
    };
  
    const upiId = "aspireandglee@icici";
    const qrData = `upi://pay?pa=${upiId}&pn=Aspire%20and%20Glee%20Society&mc=0000&tid=000000000000&addn=0&am=${amount}&cu=INR&url=https://example.com`;
  
    const generateQRCode = () => {
      const qr = QRCode(0, 'L');
      qr.addData(qrData);
      qr.make();
      return qr.createSvgTag({ level: 'L', size: 10 });
    };
  
    return (
      <div className="payment-form">
        <h2 className="form-heading">I want to donate...</h2>
        {!hideCustomMessage && (
          <div className="custom-message">
            <label>
              <input
                type="checkbox"
                checked={showCustomMessage}
                onChange={handleCheckboxChange}
              />
              I have a special request
            </label>
            {showCustomMessage && (
              <textarea
                id="custom-message"
                value={customMessage}
                onChange={handleCustomMessageChange}
                placeholder="Enter any special requests here..."
              />
            )}
          </div>
        )}
        <div className="donation-amount">
          <div className="amount-input">
            <span>₹</span>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="amount-buttons">
            <button onClick={() => setAmount('1000')}>₹1,000</button>
            <button onClick={() => setAmount('5000')}>₹5,000</button>
            <button onClick={() => setAmount('10000')}>₹10,000</button>
          </div>
        </div>
        <button className="pay-now" onClick={handlePayment}>Pay Now</button>
        {showQRCode && (
          <div className="qr-code">
            <h3>Scan QR Code to Pay</h3>
            <div dangerouslySetInnerHTML={{ __html: generateQRCode() }} />
          </div>
        )}
        <div className="other-modes">
          <h3 className="form-heading">Other Modes of Payment</h3>
          <div className="payment-details">
            <div className="bank-details">
              <h4>Bank Account Details</h4>
              <p>Account Holder: Aspire and Glee Society</p>
              <p>Account No.: 127401001851</p>
              <p>IFSC Code: ICIC0001274</p>
            </div>
            <div className="upi-details">
              <h4>UPI ID:</h4>
              <p>{upiId}</p>
              <h4>Phone Number:</h4>
              <p>9674069674</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

// Parent Component
const CombinedComponent = () => {
    // State for Donate Tab's PaymentForm
    const [donateAmount, setDonateAmount] = useState('');
    const [donateShowCustomMessage, setDonateShowCustomMessage] = useState(false);
    const [donateCustomMessage, setDonateCustomMessage] = useState('');
    const [donateShowQRCode, setDonateShowQRCode] = useState(false);
  
    // State for My Students Tab's PaymentForm
    const [studentsAmount, setStudentsAmount] = useState('');
    const [studentsShowCustomMessage, setStudentsShowCustomMessage] = useState(false);
    const [studentsCustomMessage, setStudentsCustomMessage] = useState('');
    const [studentsShowQRCode, setStudentsShowQRCode] = useState(false);
  
    // State to track if a student has been selected
    const [showPaymentForm, setShowPaymentForm] = useState(false);
  
    const [selectedStudents, setSelectedStudents] = useState([]);
    
    const [activeTab, setActiveTab] = useState('donate');
  
    const handleCheckboxChange = (id) => {
      setSelectedStudents(prevSelected => 
        prevSelected.includes(id)
          ? prevSelected.filter(studentId => studentId !== id)
          : [...prevSelected, id]
      );
    };
  
    const handleStudentSelect = (id) => {
      if (!showPaymentForm) {
        setShowPaymentForm(true);
      }
    };
  
    return (
      <div>
        <div className="tabs" style={{margin:"5% 0 0 5%"}}>
          <button 
            className={activeTab === 'donate' ? 'active' : ''} 
            onClick={() => setActiveTab('donate')}
          >
            Donate
          </button>
          <button 
            className={activeTab === 'myStudents' ? 'active' : ''} 
            onClick={() => setActiveTab('myStudents')}
          >
            My Students
          </button>
        </div>
        {activeTab === 'donate' && (
          <PaymentForm
            amount={donateAmount}
            setAmount={setDonateAmount}
            showCustomMessage={donateShowCustomMessage}
            setShowCustomMessage={setDonateShowCustomMessage}
            customMessage={donateCustomMessage}
            setCustomMessage={setDonateCustomMessage}
            showQRCode={donateShowQRCode}
            setShowQRCode={setDonateShowQRCode}
            hideCustomMessage={false} // Show custom message section in Donate tab
          />
        )}
        {activeTab === 'myStudents' && (
          <>
            <MyChildren 
              selectedStudents={selectedStudents} 
              handleCheckboxChange={handleCheckboxChange} 
              onStudentSelect={handleStudentSelect}
            />
            {showPaymentForm && (
              <PaymentForm
                amount={studentsAmount}
                setAmount={setStudentsAmount}
                showCustomMessage={studentsShowCustomMessage}
                setShowCustomMessage={setStudentsShowCustomMessage}
                customMessage={studentsCustomMessage}
                setCustomMessage={setStudentsCustomMessage}
                showQRCode={studentsShowQRCode}
                setShowQRCode={setStudentsShowQRCode}
                hideCustomMessage={true} // Hide custom message section in My Students tab
              />
            )}
          </>
        )}
      </div>
    );
  };

export default CombinedComponent;