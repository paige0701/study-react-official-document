import React, {useState} from "react";

const ToggleBtn = () => {
    const [isOn, setIsOn] = useState(true)
    const getValue = () => {
        return isOn? 'On' : 'Off'
    }
    return(
        <button onClick={() => setIsOn(!isOn)}>{getValue()}</button>
    )
}

export default ToggleBtn;