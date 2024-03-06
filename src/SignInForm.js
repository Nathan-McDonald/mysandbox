import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your sign-in logic here
    console.log('Email:', email, 'Password:', password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.formContainer}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
};


const styles = {
  formContainer: {
    maxWidth: '300px',
    margin: 'auto',
  },
  form: {
    textAlign: 'left', // Align the form content to the left
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '92%',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SignInForm;
