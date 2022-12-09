/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import TvCard from './componentsFiles/TvCard';

class ForLoop extends Component 
{
    constructor(props) 
    {
        super(props);
    }

    state = 
    {  
        showsURL: 'https://api.tvmaze.com/shows',
        shows: [],
    }

    componentDidMount() //a permanent function of react- runs after the render()- the html part
    {
        console.log('DidMount');
        
        axios.get(this.state.showsURL).then( shows => //call for the axios function is usually in the componentDidMount() function 
        {
            if ( shows.status == 200 )
            {
                this.setState({shows: shows.data});
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

            return ( 
                <div>
                    {
                        this.state.shows.map( show => 
                            <TvCard singleS= {show}/>
                    )}
                </div>          
            );
        
    }
}

export default ForLoop;



