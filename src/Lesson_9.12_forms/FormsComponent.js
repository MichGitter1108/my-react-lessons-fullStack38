import React from 'react';

function formsComponent(userProps) 
{
    console.log(userProps.user);

    return (<div className = "col-3 mt-3" style = {({backgroundColor : userProps.selected ? "gray" : "white"})}>
                <div className = "card" style={{border: "1px solid blue"}}>
                <div className = "card-body">
                    <h5 className = "card-title">email: {userProps.user.mail}</h5>
                    <h5 className = "card-title">password: {userProps.user.password}</h5>
                </div>
                <div className = "m-auto mb-1">
                    <button type = "button" className = "btn btn-warning" onClick = {() => userProps.setFunction(userProps.index)}>Add to favorites</button>
                </div>
                </div>
            </div>)
}

export default formsComponent;