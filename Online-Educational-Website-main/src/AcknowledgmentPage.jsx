// import React from 'react';
// import './AcknowledgmentPage.css'; // Add custom styles for the acknowledgment page

// const AcknowledgmentPage = () => {
//   return (
//     <div className="acknowledgment-container">
//       <h2>Thank You!</h2>
//       <p>
//         Thank you for providing your details. Our team will review your
//         eligibility and get back to you shortly.
//       </p>
//     </div>
//   );
// };

// export default AcknowledgmentPage;
// import React, { useEffect, useState } from 'react';
// import './AcknowledgmentPage.css';

// const AcknowledgmentPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [message, setMessage] = useState('');
//   const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);
//   const [userMessage, setUserMessage] = useState('');

//   useEffect(() => {
//     // Retrieve loan applications from localStorage
//     const storedApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];

//     // Only add applications that are not empty
//     const filteredApplications = storedApplications.filter(app => app.name && app.email && app.phone);
//     setApplications(filteredApplications);
//   }, []);

//   // Delete the application
//   const handleDelete = (index) => {
//     const updatedApplications = [...applications];
//     updatedApplications.splice(index, 1); // Remove the application at the index

//     // Update the localStorage and state
//     localStorage.setItem('loanApplications', JSON.stringify(updatedApplications));
//     setApplications(updatedApplications); // Update the state
//   };

//   // Show message form
//   const handleSendMessageClick = () => {
//     setIsMessageFormVisible(true);
//   };

//   // Handle sending the message
//   const handleSendMessage = () => {
//     // Simulate message sending, you can replace this with actual API call
//     console.log('Message Sent:', userMessage);
//     setMessage('Message sent successfully!');
//     setUserMessage(''); // Clear the message
//     setIsMessageFormVisible(false); // Hide the form
//   };

//   // Handle message input change
//   const handleMessageChange = (e) => {
//     setUserMessage(e.target.value);
//   };

//   return (
//     <div className="acknowledgment-container">
//       <h2>ADMIN DASHBOARD!</h2>
      

//       <h3>Loan Application Details:</h3>
//       {applications.length === 0 ? (
//         <p>No applications found.</p>
//       ) : (
//         <div className="application-details">
//           <ul>
//             {applications.map((application, index) => (
//               <li key={index}>
//                 <strong>Name:</strong> {application.name} <br />
//                 <strong>Email:</strong> {application.email} <br />
//                 <strong>Phone:</strong> {application.phone} <br />
//                 <strong>Age:</strong> {application.age} <br />
//                 <strong>Address:</strong> {application.address} <br />
//                 <strong>Monthly Income:</strong> {application.monthlyIncome} <br />
//                 <strong>Loan Amount:</strong> {application.loanAmount} <br />
//                 <strong>Tenure:</strong> {application.tenure} <br />
//                 <strong>CIBIL Score:</strong> {application.cibilScore} <br />
//                 <button onClick={() => handleDelete(index)}>Delete Application</button>
//                 <button onClick={handleSendMessageClick}>Send a Message</button>
//                 <hr />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Message Form */}
//       {isMessageFormVisible && (
//         <div className="message-form">
//           <h4>Send a Message</h4>
//           <textarea
//             placeholder="Write your message here"
//             value={userMessage}
//             onChange={handleMessageChange}
//             rows="4"
//             cols="50"
//           ></textarea>
//           <button onClick={handleSendMessage}>Send Message</button>
//         </div>
//       )}

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AcknowledgmentPage;
// import React, { useEffect, useState } from 'react';
// import './AcknowledgmentPage.css';

// const AcknowledgmentPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);
//   const [userMessage, setUserMessage] = useState('');
//   const [currentAppIndex, setCurrentAppIndex] = useState(null);

//   useEffect(() => {
//     // Retrieve loan applications from localStorage
//     const storedApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];
//     const filteredApplications = storedApplications.filter(app => app.name && app.email && app.phone);

//     // Add calculated scores and decisions
//     const updatedApplications = filteredApplications.map((app) => {
//       const dti = (app.loanAmount / (app.monthlyIncome * 12)) * 100; // Debt-to-Income Ratio
//       const creditworthiness = app.cibilScore - dti; // Creditworthiness Score
//       const annualIncome = app.monthlyIncome * 12; // Annual Income
//       const employmentReliability = 30; // Assumed constant
//       const financialStability = annualIncome / 100000 + employmentReliability; // Financial Stability Score
//       const totalScore = creditworthiness + financialStability;

//       const isEligible = totalScore > 80;
//       const eligibilityMessage = isEligible
//         ? `The user is eligible for a loan of up to ₹${app.loanAmount * 1.2}.`
//         : `The user is not eligible for a loan. However, they can avail a loan of ₹${app.loanAmount * 0.5} based on their financial metrics.`;

//       return {
//         ...app,
//         creditworthiness,
//         financialStability,
//         totalScore,
//         eligibilityMessage,
//       };
//     });

//     setApplications(updatedApplications);
//   }, []);

//   // Delete the application
//   const handleDelete = (index) => {
//     const updatedApplications = [...applications];
//     updatedApplications.splice(index, 1); // Remove the application at the index

//     // Update the localStorage and state
//     localStorage.setItem('loanApplications', JSON.stringify(updatedApplications));
//     setApplications(updatedApplications); // Update the state
//   };

//   // Show message form for a specific application
//   const handleSendMessageClick = (index) => {
//     setCurrentAppIndex(index);
//     setIsMessageFormVisible(true);
//   };

//   // Handle sending the message
//   const handleSendMessage = () => {
//     if (currentAppIndex !== null) {
//       console.log(`Message Sent to ${applications[currentAppIndex].name}:`, userMessage);
//       alert(`Message sent to ${applications[currentAppIndex].name}: ${userMessage}`);
//       setUserMessage(''); // Clear the message
//       setIsMessageFormVisible(false); // Hide the form
//       setCurrentAppIndex(null);
//     }
//   };

//   // Handle message input change
//   const handleMessageChange = (e) => {
//     setUserMessage(e.target.value);
//   };

//   return (
//     <div className="acknowledgment-container">
//       <h2>ADMIN DASHBOARD!</h2>

//       <h3>Loan Application Details:</h3>
//       {applications.length === 0 ? (
//         <p>No applications found.</p>
//       ) : (
//         <div className="application-details">
//           <ul>
//             {applications.map((application, index) => (
//               <li key={index}>
//                 <strong>Name:</strong> {application.name} <br />
//                 <strong>Email:</strong> {application.email} <br />
//                 <strong>Phone:</strong> {application.phone} <br />
//                 <strong>Age:</strong> {application.age} <br />
//                 <strong>Address:</strong> {application.address} <br />
//                 <strong>Monthly Income:</strong> {application.monthlyIncome} <br />
//                 <strong>Loan Amount:</strong> {application.loanAmount} <br />
//                 <strong>Tenure:</strong> {application.tenure} <br />
//                 <strong>CIBIL Score:</strong> {application.cibilScore} <br />
//                 <strong>Creditworthiness Score:</strong> {application.creditworthiness.toFixed(2)} <br />
//                 <strong>Financial Stability Score:</strong> {application.financialStability.toFixed(2)} <br />
//                 <strong>Total Score:</strong> {application.totalScore.toFixed(2)} <br />
//                 <strong>Eligibility Decision:</strong> {application.eligibilityMessage} <br />
//                 <button onClick={() => handleDelete(index)}>Delete Application</button>
//                 <button onClick={() => handleSendMessageClick(index)}>Send a Message</button>
//                 <hr />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Message Form */}
//       {isMessageFormVisible && (
//         <div className="message-form">
//           <h4>Send a Message</h4>
//           <textarea
//             placeholder="Write your message here"
//             value={userMessage}
//             onChange={handleMessageChange}
//             rows="4"
//             cols="50"
//           ></textarea>
//           <button onClick={handleSendMessage}>Send Message</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AcknowledgmentPage;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AcknowledgmentPage.css';

const AcknowledgmentPage = () => {
  const [applications, setApplications] = useState([]);
  const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [currentAppIndex, setCurrentAppIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];
    const filteredApplications = storedApplications.filter(app => app.name && app.email && app.phone);

    const updatedApplications = filteredApplications.map((app) => {
      const dti = (app.loanAmount / (app.monthlyIncome * 12)) * 100;
      const creditworthiness = app.cibilScore - dti;
      const annualIncome = app.monthlyIncome * 12;
      const employmentReliability = 30;
      const financialStability = annualIncome / app.loanAmount + employmentReliability;
      const totalScore = creditworthiness + financialStability;

      const isEligible = totalScore >= 700;

      const eligibilityMessage = isEligible
        ? `The user is eligible for a loan of up to ₹${app.loanAmount * 1.2}.`
        : `The user is not eligible for a loan. However, they can avail a loan of ₹${app.loanAmount * 0.5} based on their financial metrics.`;

      return {
        ...app,
        creditworthiness,
        financialStability,
        totalScore,
        eligibilityMessage,
      };
    });

    setApplications(updatedApplications);
  }, []);

  const handleDelete = (index) => {
    const updatedApplications = [...applications];
    updatedApplications.splice(index, 1);

    localStorage.setItem('loanApplications', JSON.stringify(updatedApplications));
    setApplications(updatedApplications);
  };

  const handleSendMessageClick = (index) => {
    setCurrentAppIndex(index);
    setIsMessageFormVisible(true);

    const application = applications[index];
    navigate('/result', {
      state: {
        name: application.name,
        email: application.email,
        monthlyIncome: application.monthlyIncome,
        loanAmount: application.loanAmount,
        eligibilityMessage: application.eligibilityMessage,
      },
    });
  };

  const handleSendMessage = () => {
    if (currentAppIndex !== null) {
      console.log(`Message Sent to ${applications[currentAppIndex].name}:`, userMessage);
      alert(`Message sent to ${applications[currentAppIndex].name}: ${userMessage}`);
      const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
      todoList.push({ message: userMessage, date: new Date().toISOString() });

      localStorage.setItem('todoList', JSON.stringify(todoList));
      setUserMessage('');
      setIsMessageFormVisible(false);
      setCurrentAppIndex(null);
    }
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="acknowledgment-container">
      <h2>ADMIN DASHBOARD!</h2>

      <h3>Loan Application Details:</h3>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="application-details">
          <ul>
            {applications.map((application, index) => (
              <li key={index}>
                <strong>Name:</strong> {application.name} <br />
                <strong>Email:</strong> {application.email} <br />
                <strong>Phone:</strong> {application.phone} <br />
                <strong>Age:</strong> {application.age} <br />
                <strong>Address:</strong> {application.address} <br />
                <strong>Monthly Income:</strong> {application.monthlyIncome} <br />
                <strong>Loan Amount:</strong> {application.loanAmount} <br />
                <strong>Tenure:</strong> {application.tenure} <br />
                <strong>CIBIL Score:</strong> {application.cibilScore} <br />
                <strong>Creditworthiness Score:</strong> {application.creditworthiness.toFixed(2)} <br />
                <strong>Financial Stability Score:</strong> {application.financialStability.toFixed(2)} <br />
                <strong>Total Score:</strong> {application.totalScore.toFixed(2)} <br />
                <strong>Eligibility Decision:</strong> {application.eligibilityMessage} <br />
                <button onClick={() => handleDelete(index)}>Delete Application</button>
                <button onClick={() => handleSendMessageClick(index)}>Send a Message</button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}

      {isMessageFormVisible && (
        <div className="message-form">
          <h4>Send a Message</h4>
          <textarea
            placeholder="Write your message here"
            value={userMessage}
            onChange={handleMessageChange}
            rows="4"
            cols="50"
          ></textarea>
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      )}
    </div>
  );
};

export default AcknowledgmentPage;

