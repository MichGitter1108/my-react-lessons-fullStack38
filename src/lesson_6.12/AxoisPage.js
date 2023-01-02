/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';


class AxiosPage extends Component 
{
    state = 
    {
        showsURL: 'https://api.tvmaze.com/shows',
        shows: [],
        showDiv: true
    }


    componentDidMount() //a permanent function of react- runs after the render()- the html part
    {
        console.log('DidMount');
        axios.get(this.state.showsURL).then( shows => 
        {
            if ( shows.status == 200 )
            {
                this.setState({shows: shows.data})
                console.log(shows.data); //data- מאפיין של shows
            }
            
            else
            {
                console.log("Error: load data error!");
            }
        })
    }

    


    render() 
    {
        if ( this.state.shows.length )
        {
            console.log(this.state.shows[0].image.medium);
        }

        return (
            <div className="App">
                <div className = "title1">
                    This is axios page
                </div>
                {this.state.shows.length && 
                <div className = "cardDIV">
                    <div className = "row p-3">
                        <div className = "col-6">
                            <div className="card">
                                <img src= {this.state.shows[6].image.medium}/>
                                <div className ="card-body">
                                    <h5 className ="card-title">{this.state.shows[6].name}</h5>
                                    <p dangerouslySetInnerHTML={{__html: this.state.shows[6].summary}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default AxiosPage;