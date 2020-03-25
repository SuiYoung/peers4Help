// a couple of functions from the React library
import React, { Component } from 'react';

// import components


class Main extends Component{
    render(){
        return (
            <div class= "mainPage">
                <div class="mainText">
                    <p>
                        <span class="impText break">Please Read:</span> 
                        <span class= "break">This app is currently still in development. And as such, improvements will be made continuously. Please have patience, as I am only 1 person working on this passion project. If you have suggestions, please DM me <a href= "https://twitter.com/ECSYoungCodes" target="_blank" rel="noopener noreferrer">@ECSYoungCodes</a> on Twitter.</span>

                        <span class= "impText break">How This Works: </span>
                        <span class= "break">This is currently functioning on an honor system. Please only respone to requests for aid if you can genuinely service them. Please only make requests if you are genuinely in need. Please rate your urgency honestly.</span>
                        <ol class= "instrList">
                            <li>Click on the buttom that corresponds with your purpose.</li>
                            <li>Complete the form to the best of your ability. <span class= "impText2">Note: Required fields to receive aid are name and contact information</span></li>
                            <li>Those with disabilities and immunocompromised systems will be prioritized.</li>
                            <li>Your needs will be saved to a serversize database that will stay there until you delete them.</li>
                            <li>If you are helping, you will need to get in contact with the person in need via the contact method they provide to receive their best method of trade/delivery, including address.</li>
                            <li>If at any point anyone becomes problematic, notify me <a href= "https://twitter.com/ECSYoungCodes" target="_blank" rel="noopener noreferrer">@ECSYoungCodes</a> on Twitter. I will look into the situation accordingly. </li>
                        </ol>
                    </p>
                </div>
                <h2>Ontario Residents</h2>
                <button>I Am In Need</button>
                <button>I Can Help</button>
            </div>
        );
    }
}

export default Main;