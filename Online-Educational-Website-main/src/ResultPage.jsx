import React from 'react';
import { useLocation } from 'react-router-dom';
import './Resullt.css';

const ResultPage = () => {
  const location = useLocation();
  const { state } = location;
  const { name, email, loanAmount, eligibilityMessage } = state || {};

  return (
    <div className="result-container">
      <h2>Loan Application Result</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Loan Amount:</strong> ₹{loanAmount}</p>
      <p><strong>Eligibility Status:</strong> {eligibilityMessage}</p>
    </div>
  );
};

export default ResultPage;
