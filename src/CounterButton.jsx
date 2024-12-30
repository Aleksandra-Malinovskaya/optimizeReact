import React from "react";

const CounterButton = React.memo(({clickFunction}) =>{

    return(
        <button onClick={clickFunction}>Увеличить счётчик</button>
    )
});

export default CounterButton;