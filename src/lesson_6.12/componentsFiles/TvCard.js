/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SingleShowComponent from './SingleShowComponent';

function TvCard(props)
{
    return (<div className = "row p-3">
                <div className = "cardDIV">
                    <div className = "col-3">
                        <div className="card">
                            <img src= {props.singleS.image.medium}/>
                            <div className ="card-body">
                                <h5 className ="card-title">{props.singleS.name}</h5>
                                <p dangerouslySetInnerHTML={{__html: props.singleS.summary}}></p>
                                <button type = "button" className = "btn btn-info" onClick= {() => <SingleShowComponent selectedShow = {props.singleS}/>}>Choose Me!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
}


export default TvCard;