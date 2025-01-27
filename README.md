# Loan Application Solution

An end-to-end solution for onboarding customers seeking loans. This project includes user-friendly workflows for loan applicants and admins with robust credit assessment and decision-making.

## Features

### User Workflow
1. **Sign-Up and Login**:
   - Users and admins use the same login page.
   - Redirect based on role (user or admin dashboard).
   - Sign-Up Fields: Name, Email, Password, Phone Number.

2. **Loan Application Form**:
   - Personal Details: Name, Email, Phone, Age, Address.
   - Financial Details: Monthly Income, Loan Amount, Tenure.

3. **Acknowledgment Page**:
   - Thank you message upon successful application submission.

### Admin Workflow
1. **Admin Dashboard**:
   - View all applications with details like Name, Loan Amount, Tenure, and Submission Timestamp.

2. **Credit Assessment**:
   - Evaluate eligibility using metrics like CIBIL Score, DTI, and Employment Stability.

3. **Loan Report Card**:
   - Generate detailed reports with applicant details, creditworthiness metrics, and loan eligibility decisions.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT with Bcrypt for password encryption

