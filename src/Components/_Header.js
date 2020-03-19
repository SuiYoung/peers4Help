// a couple of functions from the React library
import React, { Component } from 'react';


class Header extends Component{
    render(){
        return (
            <div className="App">
            <header className="App-header">
                <nav>
                    <ul>
                        <li><button>Need</button></li>
                        <li><img src={'https://img.icons8.com/bubbles/100/000000/user-location.png'} alt="location icon"/></li>
                        <li><button>Help</button></li>
                    </ul>
                </nav>
            </header>
            </div>
        );
    }
}

export default Header;