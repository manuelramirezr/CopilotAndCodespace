// Create user frontend with React
// Compare this snippet from frontend/src/App.js:
import React, { useState, useEffect } from 'react';
import './App.css';

function User() {
    // Create state
    const [users, setUsers] = useState([]);
    // Create effect
    useEffect(() => {
        // Fetch users
        fetch('/api/users')
        .then(res => res.json())
        .then(users => setUsers(users));
    }, []);
    // Return JSX
    return (
        <div className="User">
        <h1>Users</h1>
        <ul>
            {users.map(user => (
            <li key={user._id}>
                {user.name}
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default User;
// Compare this snippet from frontend/src/index.js:



