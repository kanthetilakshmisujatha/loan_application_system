// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // //import '../styles/dashboard.css';
// // import './UserDashboard.css';

// // const UserDashboard = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [loanApplications, setLoanApplications] = useState([]);
// //   const [applicationData, setApplicationData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     age: '',
// //     address: '',
// //     monthlyIncome: '',
// //     loanAmount: '',
// //     tenure: '',
// //     cibilScore: '',
// //   });
// //   const [message, setMessage] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [loadingProfile, setLoadingProfile] = useState(false);
// //   const [loadingLoans, setLoadingLoans] = useState(false);

// //   const token = localStorage.getItem('token'); // Retrieve token from localStorage
// //   const navigate = useNavigate(); // Initialize navigate function

// //   // Fetch user data and loan applications
// //   useEffect(() => {
// //     if (token) {
// //       setLoadingProfile(true);
// //       axios
// //         .get('http://localhost:5000/api/user/profile', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         })
// //         .then((response) => {
// //           setUserData(response.data);
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching user data:", error);
// //         })
// //         .finally(() => setLoading(false));
// //     }
// //   }, [token]);

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setApplicationData({ ...applicationData, [name]: value });
// //   };

// //   // Validate loan application
// //   const validateApplication = () => {
// //     if (!applicationData.name || !applicationData.email || !applicationData.phone) {
// //       return 'Name, Email and Phone are required.';
// //     }
// //     if (applicationData.age < 18 || applicationData.age > 65) {
// //       return 'Age must be between 18 and 65';
// //     }
// //     if (applicationData.cibilScore < 300 || applicationData.cibilScore > 900) {
// //       return 'CIBIL score must be between 300 and 900';
// //     }
// //     if (applicationData.loanAmount <= 0) {
// //       return 'Loan amount must be greater than zero';
// //     }
// //     return '';
// //   };

// //   // Submit loan application
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const validationError = validateApplication();
// //     if (validationError) {
// //       setMessage(validationError);
// //       return;
// //     }

// //     setSubmitting(true);
// //     setMessage('');

// //     try {
// //       const response = await axios.post(
// //         'http://localhost:5000/api/user/apply',
// //         applicationData,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setMessage('Loan application submitted successfully.');
// //       setLoanApplications([...loanApplications, response.data]);
// //       setApplicationData({
// //         name: '',
// //         email: '',
// //         phone: '',
// //         age: '',
// //         address: '',
// //         monthlyIncome: '',
// //         loanAmount: '',
// //         tenure: '',
// //         cibilScore: '',
// //       });

// //       // Redirect to acknowledgment page after submission
// //       navigate("/acknowledgmentPage");
// //     } catch (error) {
// //       setMessage('Error submitting loan application. Please try again.');
// //       console.error(error);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   if (loading) return <h3>Loading...</h3>;

// //   return (
// //     <div className="dashboard-container">
// //       {userData ? (
// //         <div className="profile-section">
// //           <h2>Welcome, {userData.name}</h2>
// //           <p>We're here to help you with your loan application.</p>
// //         </div>
// //       ) : (
// //         <p>Loading user data...</p>
// //       )}

// //       <div className="apply-loan-section">
// //         <h3>Apply for a New Loan</h3>
// //         {message && <p>{message}</p>}
// //         <form onSubmit={handleSubmit}>
// //           {Object.keys(applicationData).map((key) => (
// //             <input
// //               key={key}
// //               type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
// //               name={key}
// //               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
// //               value={applicationData[key]}
// //               onChange={handleChange}
// //               required={["name", "email", "phone"].includes(key)}
// //             />
// //           ))}
// //           <button type="submit" disabled={submitting}>
// //             {submitting ? "Submitting..." : "Submit Loan Application"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './UserDashboard.css';

// const UserDashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [applicationData, setApplicationData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     address: '',
//     monthlyIncome: '',
//     loanAmount: '',
//     tenure: '',
//     cibilScore: '',
//   });
//   const [message, setMessage] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const token = localStorage.getItem('token'); // Retrieve token from localStorage
//   const navigate = useNavigate(); // Initialize navigate function

//   // Fetch user data
//   useEffect(() => {
//     if (token) {
//       axios
//         .get('http://localhost:5000/api/user/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUserData(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching user data:", error);
//         });
//     }
//   }, [token]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setApplicationData({ ...applicationData, [name]: value });
//   };

//   // Validate loan application
//   const validateApplication = () => {
//     if (!applicationData.name || !applicationData.email || !applicationData.phone) {
//       return 'Name, Email, and Phone are required.';
//     }
//     if (applicationData.age < 18 || applicationData.age > 65) {
//       return 'Age must be between 18 and 65';
//     }
//     if (applicationData.cibilScore < 300 || applicationData.cibilScore > 900) {
//       return 'CIBIL score must be between 300 and 900';
//     }
//     if (applicationData.loanAmount <= 0) {
//       return 'Loan amount must be greater than zero';
//     }
//     return '';
//   };

//   // Submit loan application
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = validateApplication();
//     if (validationError) {
//       setMessage(validationError);
//       return;
//     }

//     setSubmitting(true);
//     setMessage('');

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/user/apply',
//         applicationData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMessage('Loan application submitted successfully.');

//       // Store the application in local storage
//       const previousApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];
//       localStorage.setItem('loanApplications', JSON.stringify([...previousApplications, applicationData]));

//       setApplicationData({
//         name: '',
//         email: '',
//         phone: '',
//         age: '',
//         address: '',
//         monthlyIncome: '',
//         loanAmount: '',
//         tenure: '',
//         cibilScore: '',
//       });

//       // Redirect to acknowledgment page
//       navigate("/acknowledgmentPage");
//     } catch (error) {
//       setMessage('Error submitting loan application. Please try again.');
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {userData ? (
//         <div className="profile-section">
//           <h2>Welcome, {userData.name}</h2>
//           <p>We're here to help you with your loan application.</p>
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}

//       <div className="apply-loan-section">
//         <h3>Apply for a New Loan</h3>
//         {message && <p>{message}</p>}
//         <form onSubmit={handleSubmit}>
//           {Object.keys(applicationData).map((key) => (
//             <input
//               key={key}
//               type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
//               name={key}
//               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//               value={applicationData[key]}
//               onChange={handleChange}
//               required={["name", "email", "phone"].includes(key)}
//             />
//           ))}
//           <button type="submit" disabled={submitting}>
//             {submitting ? "Submitting..." : "Submit Loan Application"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './UserDashboard.css';

// const UserDashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [applicationData, setApplicationData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     address: '',
//     monthlyIncome: '',
//     loanAmount: '',
//     tenure: '',
//     cibilScore: '',
//   });
//   const [message, setMessage] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const token = localStorage.getItem('token'); // Retrieve token from localStorage
//   const navigate = useNavigate(); // Initialize navigate function

//   // Fetch user data
//   useEffect(() => {
//     if (token) {
//       axios
//         .get('http://localhost:5000/api/user/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUserData(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching user data:", error);
//         });
//     }
//   }, [token]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setApplicationData({ ...applicationData, [name]: value });
//   };

//   // Validate loan application
//   const validateApplication = () => {
//     if (!applicationData.name || !applicationData.email || !applicationData.phone) {
//       return 'Name, Email, and Phone are required.';
//     }
//     if (applicationData.age < 18 || applicationData.age > 65) {
//       return 'Age must be between 18 and 65';
//     }
//     if (applicationData.cibilScore < 300 || applicationData.cibilScore > 900) {
//       return 'CIBIL score must be between 300 and 900';
//     }
//     if (applicationData.loanAmount <= 0) {
//       return 'Loan amount must be greater than zero';
//     }
//     return '';
//   };

//   // Submit loan application
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = validateApplication();
//     if (validationError) {
//       setMessage(validationError);
//       return;
//     }

//     setSubmitting(true);
//     setMessage('');

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/user/apply',
//         applicationData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMessage('Loan application submitted successfully.');

//       // Get previous applications from localStorage
//       const previousApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];

//       // Ensure no empty or duplicate data is added
//       if (!previousApplications.some(app => app.email === applicationData.email)) {
//         // Add new valid application to the list
//         localStorage.setItem('loanApplications', JSON.stringify([...previousApplications, applicationData]));
//       }

//       // Reset form fields
//       setApplicationData({
//         name: '',
//         email: '',
//         phone: '',
//         age: '',
//         address: '',
//         monthlyIncome: '',
//         loanAmount: '',
//         tenure: '',
//         cibilScore: '',
//       });

//       // Redirect to acknowledgment page
//       navigate("/admin-dashboard");
//     } catch (error) {
//       setMessage('Error submitting loan application. Please try again.');
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {userData ? (
//         <div className="profile-section">
//           <h2>Welcome, {userData.name}</h2>
//           <p>We're here to help you with your loan application.</p>
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}

//       <div className="apply-loan-section">
//         <h3>Apply for a New Loan</h3>
//         {message && <p>{message}</p>}
//         <form onSubmit={handleSubmit}>
//           {Object.keys(applicationData).map((key) => (
//             <input
//               key={key}
//               type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
//               name={key}
//               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//               value={applicationData[key]}
//               onChange={handleChange}
//               required={["name", "email", "phone"].includes(key)}
//             />
//           ))}
//           <button type="submit" disabled={submitting}>
//             {submitting ? "Submitting..." : "Submit Loan Application"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './UserDashboard.css';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    monthlyIncome: '',
    designation: '', // Added designation field
    loanAmount: '',
    tenure: '',
    cibilScore: '',
  });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  // Fetch user data
  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token} `},
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  // Validate loan application
  const validateApplication = () => {
    if (!applicationData.name || !applicationData.email || !applicationData.phone) {
      return 'Name, Email, and Phone are required.';
    }
    if (applicationData.age < 18 || applicationData.age > 65) {
      return 'Age must be between 18 and 65.';
    }
    if (applicationData.cibilScore < 300 || applicationData.cibilScore > 900) {
      return 'CIBIL score must be between 300 and 900.';
    }
    if (applicationData.loanAmount <= 0) {
      return 'Loan amount must be greater than zero.';
    }
    if (applicationData.monthlyIncome <= 0) {
      return 'Monthly income must be greater than zero.';
    }
    if (!applicationData.designation) {
      return 'Designation is required.';
    }
    return '';
  };

  // Submit loan application
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateApplication();
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/apply',
        applicationData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Check the response status or data for success
      if (response.status === 200) {
        setMessage('Loan application submitted successfully.');

        // Get previous applications from localStorage
        const previousApplications = JSON.parse(localStorage.getItem('loanApplications')) || [];

        // Add new valid application to the list
        if (!previousApplications.some(app => app.email === applicationData.email)) {
          localStorage.setItem('loanApplications', JSON.stringify([...previousApplications, applicationData]));
        }

        // Reset form fields
        setApplicationData({
          name: '',
          email: '',
          phone: '',
          age: '',
          address: '',
          monthlyIncome: '',
          designation: '',
          loanAmount: '',
          tenure: '',
          cibilScore: '',
        });

        navigate("/admin-dashboard");
      }
    } catch (error) {
      // Log error for debugging
      console.error('Error submitting loan application:', error);
      
      // Display more detailed error message based on error response
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Please try again.'}`);
      } else {
        setMessage('Error submitting loan application. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  // New View Button handler
  const handleViewProfile = () => {
    navigate('/profile', { state: { userData } });  // Navigates to a Profile page or Application Details page
  };

  return (
    <div className="dashboard-container">
      {userData ? (
        <div className="profile-section">
          <h2>Welcome, {userData.name}</h2>
          <p>We're here to help you with your loan application.</p>
          {/* Adding View button here */}
          <button onClick={handleViewProfile}>View Profile</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <div className="apply-loan-section">
        <h3>Apply for a New Loan</h3>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          {Object.keys(applicationData).map((key) => (
            <input
              key={key}
              type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={applicationData[key]}
              onChange={handleChange}
              required={["name", "email", "phone", "monthlyIncome", "designation"].includes(key)}
            />
          ))}
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Loan Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
