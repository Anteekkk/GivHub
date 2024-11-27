import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationForm = () => {
    const [quantity, setQuantity] = useState('');
    const [specialRequestQuantity, setSpecialRequestQuantity] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [inventoryStatus, setInventoryStatus] = useState(null);
    const [reminderMethod, setReminderMethod] = useState('email');
    const [donationDate, setDonationDate] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showReminderOptions, setShowReminderOptions] = useState(false);
    const [email,setEmail] = useState('');

    useEffect(() => {
      // Simulate fetching special requests from backend
        Category();
    }, []);

    async function Category(){
        try{
            const response = await axios.get("http://localhost:3000/admin");
            // console.log(response.data);
  
                const category = response.data.category;
                if(category != "false"){
                    setSpecialRequests(`It would be of great help if you could donate ${category}.`);
                }
            
        }catch(err){
            console.log(err);
        }
    }


    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };

    const handleSpecialRequestQuantityChange = (event) => {
      setSpecialRequestQuantity(event.target.value);
    };

    const handleDateChange = (event) => {
      setDonationDate(event.target.value);
    };

    const handleReminderChange = (event) => {
      setReminderMethod(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/inventory",{
                quantity:quantity,
                specialRequestQuantity:specialRequestQuantity,
                specialRequests:specialRequests
            })
            if(response){
                console.log(response.data.isAvailable);
                const isAvailable = response.data.isAvailable;
                if (isAvailable) {
                    setInventoryStatus(null);
                    setShowDatePicker(true);
                    setShowReminderOptions(false);
                } else {
                    setInventoryStatus('Currently, the inventory is full. We will send you a reminder when the inventory becomes free again.');
                    setShowDatePicker(false);
                    setShowReminderOptions(true);
                }
            } 
        }catch(err){
            console.log(err);
        }
    };

    const handleConfirmDate = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/appointment",{
                donationDate:donationDate,
                email:email
            });
            if(response){
                alert('Donation submitted successfully!');
                setQuantity('');
                setSpecialRequestQuantity('');
                setDonationDate('');
                setShowDatePicker(false);
                setShowReminderOptions(false);
                setInventoryStatus(null);
            }
        }catch(err){
            console.log(err);
        }
    };

    const handleReminderSubmit = async(event) => {
      event.preventDefault();
      try{
      const response = await axios.post("http://localhost:3000/user_remind",{
        quantity_donate:quantity,
        email:email
    });
    if(response){
        setTimeout(() => {
          alert(`Reminder will be sent to your registered ${reminderMethod}`);
          // Clear form and states
          setQuantity('');
          setSpecialRequestQuantity('');
          setReminderMethod('email');
          setEmail('');
          setDonationDate('');
          setShowReminderOptions(false);
          setInventoryStatus(null);
        }, 500);
      }}catch(err){
        console.log(err);
    }
      // Simulate sending the reminder preference to backend
      
    };

    return (
      <div className="donation-form">
        <h1>I want to donate...</h1>
        
        {specialRequests && (
          <div className="special-requests">
            <h2>Special Requests from the NGO</h2>
            <p>{specialRequests}</p>
          </div>
        )}

        <div className="warning-message">
          <p>We kindly request you to not donate innerwear or torn clothes.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="donation-section">
            <p>I want to donate approximately</p>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
              placeholder=""
            />
            <p>clothes</p>
          </div>

          {specialRequests && (
            <div className="special-request-section">
              <p>I want to donate approximately</p>
              <input
                type="number"
                value={specialRequestQuantity}
                onChange={handleSpecialRequestQuantityChange}
                className="quantity-input"
                placeholder=""
              />
              {/* <p>{specialRequests.replace('We currently only accept ', '').replace('.', '')}</p> */}
            </div>
          )}

          <button type="submit" className="donate-button">
            Donate
          </button>
        </form>

        {inventoryStatus && (
          <div className="inventory-status">
            <p>{inventoryStatus}</p>
            
            {showReminderOptions && (
              <form onSubmit={handleReminderSubmit} className="reminder-form">
                <p>How would you like to receive the reminder?</p>
                <select
                  value={reminderMethod}
                  onChange={handleReminderChange}
                  className="reminder-select"
                >
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
                <input onChange={(e)=>{
                const value = e.target.value;
                setEmail(value);
                    }}type='email' placeholder='enter your email' className="date-input" value={email}/>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                  placeholder="Enter quantity" // Optional: Adds placeholder text
                />
                <button type="submit" className="reminder-button">
                  Submit Reminder Preference
                </button>
              </form>
            )}
          </div>
        )}

        {showDatePicker && (
          <form onSubmit={handleConfirmDate} className="date-form">
            <p>Select a donation date</p>
            <input onChange={(e)=>{
                const value = e.target.value;
                setEmail(value);
            }}type='email' placeholder='enter your email' className="date-input" value={email}/>
            <input
              type="date"
              value={donationDate}
              onChange={handleDateChange}
              className="date-input"
            />
            <button type="submit" className="confirm-button">
              Confirm Donation Date
            </button>
          </form>
        )}
      </div>
    );
  };

  export default DonationForm;