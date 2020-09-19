import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
    const [user, setUser] = useState({
        users: [
            {userName: 'user1', password: '001'},
            {userName: 'user2', password: '002'}
        ]
    });

    const randomNameHandler = () => {
        setUser({
            users: [
                {userName: 'user' + Math.floor(Math.random() * 100), password: '001'},
                {userName: 'user' + Math.floor(Math.random() * 100), password: '002'}
            ]
        })
    };

    const typeNameHandler = (event) => {
        setUser({
            users: [
                {userName: event.target.value, password: '001'},
                {userName: user.users[1].userName, password: '002'}
            ]
        })
    }

    const switchNameHandler = (newName) => {
        setUser({
            users: [
                {userName: newName, password: '001'},
                {userName: user.users[1].userName, password: '002'}
            ]
        })
    }

    return (
        <div className="App">
            <UserInput change={typeNameHandler}/>
            <button onClick={switchNameHandler.bind(this, 'switch button')}>button</button>
            <UserOutput user={user.users[0]} click={randomNameHandler}/>
            <UserOutput user={user.users[1]} click={randomNameHandler}/>
        </div>
    );
}

export default App;
