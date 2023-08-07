import React from 'react';

const login = () => {
    // state = {
    //     username: "",
    //     password: ""
    // }
    //   const [username, setUsername] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [error, setError] = useState('');

    //   const handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    //   };

    //   const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    //   };

    //   const handleLogin = (event) => {
    //     event.preventDefault();

    //     // Perform some validation on username and password if needed
    //     if (username.trim() === '' || password.trim() === '') {
    //       setError('Please enter both username and password.');
    //     } else {
    //       // Replace this with your actual login logic (e.g., API call to authenticate user)
    //       // For this example, we'll assume successful login for any non-empty username and password.
    //       setError('');
    //       console.log('Logged in successfully');
    //     }
    //   };

    return (
        <div>
            <h1>Login Page</h1>
            <form >
                <div>
                    <label>Username:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default login;
