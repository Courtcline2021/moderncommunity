import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


export default function Workout (){
    const initialClasses=[
      {
        id: 1,
        className: 'Yoga',
        isFree: false,
        instructor: 'John Doe',
        time: '10:00 AM - 11:00 AM',
        kidsAllowed: false,
        location: 'Fitness Center Room A',
        cost: '$50 for 8 Classes',
        schedule: ['Tuesday', 'Thursday', 'Saturday'],
        upcoming: [],
        daysOfWeek: [2,4,6]
      },
      {
        id: 2,
        className: 'Zumba',
        isFree: true,
        instructor: 'Jane Smith',
        time: '5:30 PM - 6:30 PM',
        kidsAllowed: true,
        location: 'Dance Studio B',
        cost: 'Free',
        schedule: ['Wednesday', 'Thursday', 'Saturday'],
        upcoming: [],
        daysOfWeek: [3,4,6]
      },
      {
        id: 3,
        className: 'CrossFit',
        isFree: false,
        instructor: 'Mike Johnson',
        time: '6:00 AM - 7:00 AM',
        kidsAllowed: false,
        location: 'CrossFit Arena',
        cost: '$35 for a month membership',
        schedule: ['Monday', 'Friday', 'Sunday'],
        upcoming: [], 
        daysOfWeek: [1,5,0]
      },
      {
        id: 4,
        className: 'Spin Class',
        isFree: true,
        instructor: 'Sara Lee',
        time: '7:30 AM - 8:30 AM',
        kidsAllowed: false,
        location: 'Cycling Room C',
        cost: 'Free',
        schedule: ['Tuesday', 'Thursday', 'Sunday'],
        upcoming: [],
        daysOfWeek: [2,4,0]
      },
      {
        id:5,
        className: 'Pilates',
        isFree: false,
        instructor: 'Alex Brown',
        time: '12:00 PM - 1:00 PM',
        kidsAllowed: true,
        location: 'Pilates Studio',
        cost: '$15 per class',
        schedule: ['Monday', 'Wednesday', 'Friday'],
        upcoming: [],
        daysOfWeek: [1,3,5]

      }];
   
  const [classes, setClasses] = useState(initialClasses)
  const [upcomingClasses, setUpcomingClasses] = useState([]);

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    paymentMethod: 'Free', // Default to Free
    selectedClassId: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleClassSignup = () => {
    const selectedClass = classes.find((cls) => cls.id === signupData.selectedClassId);
    if (selectedClass) {
      const classSignupData = {
        ...signupData,
        className: selectedClass.className,
        time: selectedClass.time,
        date: "TBA", // Set the actual date here
      };
      setUpcomingClasses([...upcomingClasses, classSignupData]);
      setSignupData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        paymentMethod: 'Free',
        selectedClassId: 0,
      });
    }
  };

  const handleClassCancellation = (classId) => {
    const updatedUpcomingClasses = upcomingClasses.filter((cls) => cls.id !== classId);
    setUpcomingClasses(updatedUpcomingClasses);
  };


  return (
      <div className="container">
      <h1>Workout Classes</h1>
      <div className="class--cards">
        {classes.map((cls) => (
          <div className="class--info"key={cls.id}>
            <h3>{cls.className}</h3>
            <p>{cls.instructor}</p>
            <p>{cls.time}</p>
            <p>{cls.location}</p>
            <p>{cls.kidsAllowed ? 'Kids Allowed' : 'No Kids Allowed'}</p>
            <p>{cls.cost}</p>
            <p>{cls.schedule}</p>
            <button className="sign-up" onClick={() => setSignupData({ ...signupData, selectedClassId: cls.id })}>
              Sign Up
            </button>
          </div>
        ))}
      </div>
      {signupData.selectedClassId !== 0 && (
        <div className="class--sign">
          <h2>Sign Up for {classes.find((cls) => cls.id === signupData.selectedClassId)?.className}</h2>
          <input
            type="text"
            name="firstName"
            value={signupData.firstName}
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            value={signupData.lastName}
            placeholder="Last Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            value={signupData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleInputChange}
          />
          {signupData.paymentMethod === 'Free' ? (
            <p>Free Class</p>
          ) : (
            <div className="card-info">
              <Form>
                 <Form.Group controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter card number"  required/>
                 </Form.Group>

              <Form.Group controlId="formCardName">
                 <Form.Label>Cardholder's Name</Form.Label>
                 <Form.Control type="text" placeholder="Enter cardholder's name" required />
              </Form.Group>

              <Form.Group controlId="formExpiration">
                 <Form.Label>Expiration Date</Form.Label>
                 <Form.Control type="text" placeholder="MM/YY" required/>
              </Form.Group>

              <Form.Group controlId="formCVV">
                 <Form.Label>CVV</Form.Label>
                 <Form.Control type="text" placeholder="Enter CVV"  required/>
               </Form.Group>
            </Form>
            </div>
          )}
          <select name="paymentMethod" onChange={handleInputChange} value={signupData.paymentMethod}>
            <option value="Free">Free</option>
            <option value="Card">Credit Card</option>
          </select>
          <select
            name="selectedClassId"
            onChange={handleInputChange}
            value={signupData.selectedClassId}
          >
            <option value={0} disabled>
              Select Workout Class
            </option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.className}
              </option>
            ))}
          </select>
          <button onClick={handleClassSignup}>Confirm Sign Up</button>
        </div>
      )}
      <div className="booked--class">
        <h2>Scheduled Classes</h2>
        {upcomingClasses.map((cls) => (
          <div key={cls.id}>
            <p>
              {cls.className} - {cls.time} - {cls.date}
            </p>
            <button onClick={() => handleClassCancellation(cls.id)}>Cancel</button>
          </div>
        ))}
      </div>
      <div className="future--class">
        <h2>Upcoming Classes</h2>
      </div>
    </div>
  );
}