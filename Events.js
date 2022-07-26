import React from "react";

const Events = () => {
    const ClickHandler = (a) => {
        console.log(a)
    }

    return (<div>

        <label>Mouse Over</label>
        <input onMouseOver={() => ClickHandler('Mouse Over')}></input>
        <br></br>
        <label>onClick</label>
        <input onClick={() => ClickHandler('Clicked')}></input>
        <br></br>
        <label>Mouse Leave</label>
        <input onMouseLeave={() => ClickHandler('Mouse Leave')}></input>
        <br></br>
        <label>on Change</label>
        <input onChange={() => ClickHandler('Value changed')}></input>
        <br></br>
        <hr></hr>
        <hr></hr>
        <input type='date' onClick={() => ClickHandler('!!!Clicked')}></input>
        <br></br>
        <input type='date' onMouseOver={() => ClickHandler('!!Mouse Over!!!')}></input>
        <br></br>
        <input type='date' onMouseLeave={() => ClickHandler('!!!Mouse Leave!!!')}></input>
        <br></br>
        <input type='date' onChange={() => ClickHandler('!!!Value Changed!!')}></input>
        <br></br>
    </div>)
}



export default Events;