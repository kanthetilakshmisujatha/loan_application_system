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
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AcknowledgmentPage.css'; // Add custom styles for the acknowledgment page

const AcknowledgmentPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the result page when the button is clicked
  const handleViewResults = () => {
    navigate('/result'); // This will navigate to the '/result' route
  };

  return (
    <div className="acknowledgment-container">
      <h2>Thank You!</h2>
      <p>
        Thank you for providing your details. Our team will review your
        eligibility and get back to you shortly.
      </p>

     
    </div>
  );
};

export default AcknowledgmentPage;
