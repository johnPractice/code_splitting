import React from "react";
import logo from "../logo.svg";

const Page3 = (props) => {
    const {onRouteChange} = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Welcome to React</h1>
            </header>
            <button onClick={() => onRouteChange('page1')}>page1</button>
            <button onClick={() => onRouteChange('page2')}>page2</button>
            <button className='disabled'>page3</button>
        </div>

    )
};
export default Page3;