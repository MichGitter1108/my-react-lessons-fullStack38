/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function TvCard(props)
{
    return (<div key = {props.singleS.id} className = "col-2 mt-4">
                    <div className = "cardDIV">
                        <div className="card">
                            <img src= {props.singleS.image.medium}/>
                            <div className ="card-body">
                                <h5 className ="card-title">{props.singleS.name}</h5>
                                <p dangerouslySetInnerHTML={{__html: props.singleS.summary}}></p>
                                <button type = "button" className = "btn btn-info" onClick= {() => props.consoleName(props.singleS.name)}>Choose Me!</button>
                            </div>
                        </div>
                    </div>
                </div>)
}


export default TvCard;