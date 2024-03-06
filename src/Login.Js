import React, { useState } from "react";
import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <div className="login">
            <h1>Welcome to Recipe Roulette</h1>
            <h2>Login</h2>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="loginEmail"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="loginPassword"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;