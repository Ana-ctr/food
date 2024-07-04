import { useState, useEffect } from "react";

function Login1() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light');

    // Mock user data for demonstration purposes
    const mockUsers = [
        { id: 1, name: 'user1', password: 'password1', image: 'https://via.placeholder.com/100', city: 'City1', number: '1234567890' },
        { id: 2, name: 'user2', password: 'password2', image: 'https://via.placeholder.com/100', city: 'City2', number: '0987654321' }
    ];

    // Check if the user is already logged in
    useEffect(() => {
        const token = localStorage.getItem('f.token');
        if (token) {
            const loggedInUser = mockUsers.find(user => user.id === parseInt(token));
            if (loggedInUser) {
                setUser(loggedInUser);
            }
        }
    }, []);

    // Sign in function
    const SignIn = () => {
        const matchedUser = mockUsers.find(user => user.name === login && user.password === password);
        if (matchedUser) {
            localStorage.setItem('f.token', matchedUser.id);
            setUser(matchedUser);
        } else {
            alert('Login or password incorrect!');
        }
    };

    // Sign out function
    const SignOut = () => {
        localStorage.removeItem('f.token');
        setUser(null);
    };

    return (
        <div className={"col-12" + (theme == 'light' ? 'bg-light' : 'bg-dark text-white')}>
            <div style={{
                textAlign: 'center',
                marginTop: '50px',
                backgroundColor: '#f0f0f0',
                padding: '50px',
                borderRadius: '10px',
                maxWidth: '500px',
                margin: '50px auto'
            }}>
                {user ? (
                    <div>
                        <h2>Welcome, {user.name}</h2>
                        <img src={user.image} alt="User profile" width='100px' height='100px' />
                        <p>City: {user.city}</p>
                        <p>Phone Number: {user.number}</p>
                        <button onClick={SignOut} style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            marginTop: '20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                border: '1px solid #ccc'
                            }}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                border: '1px solid #ccc'
                            }}
                        />
                        <br />
                        <button onClick={SignIn} style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            marginTop: '20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login1;
