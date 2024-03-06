import React from 'react';
import SignInForm from './SignInForm';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Jackpot Junction</h1>
      <SignInForm />
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
  },
  title: {
    marginBottom: '150px',
    fontSize: '70px',
  },
};

export default App;
