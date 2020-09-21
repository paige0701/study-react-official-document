import React, {useState} from 'react'

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>The water would boil</p>
    } else {
        return <p>The water would not boil</p>
    }
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit-32) * 5 / 9
}

const toFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/ 1000;
    return rounded.toString()
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

const TemperatureInput = (props) => {

    const scale = props.scale
    const temperature = props.temperature
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value)
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input value={temperature} onChange={handleChange}/>
        </fieldset>
    )
}

const Calculator = () => {
    const [scale, setScale] = useState('c')
    const [temperature, setTemperature] = useState('')

    const handleFahrenheitChange = (value) => {
        setScale('f')
        setTemperature(value)
    }

    const handleCelsiusChange = (value) => {
        setScale('c')
        setTemperature(value)
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit) : temperature

    return (

        <div>
            <TemperatureInput
                scale='c'
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}>
            </TemperatureInput>
            <TemperatureInput
                scale='f'
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}>
            </TemperatureInput>
            <BoilingVerdict celsius={parseFloat(temperature)}/>
        </div>
    )
}

export default Calculator