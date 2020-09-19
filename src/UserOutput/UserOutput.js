import React from "react";
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.user.userName}</p>
            <button onClick={props.click}>click to change randomly</button>
        </div>
    );
}

export default UserOutput;