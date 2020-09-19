import React from "react";

const UserInput = (props) => {
    return(
        <div>
            <input type="text" defaultValue={"default input"} onChange={props.change}/>
        </div>
    );
}

export default UserInput;