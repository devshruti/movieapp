import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            alert('User not found. Please signup first.');
            return;
        }

        const parsedUser = JSON.parse(storedUser);

        if (username !== parsedUser.username || password !== parsedUser.password) {
            alert('Invalid username or password');
            return;
        }

        onLogin();
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
