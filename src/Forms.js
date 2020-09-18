import React, {useState} from "react";

// Controlled Components
class NameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.value)
        event.stopPropagation();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value}
                    onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

const NameForm = () => {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(value)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )

}

const FlavorForm = () => {

    const flavours = [
        {id: 1, name: 'grapefruit'},
        {id: 2, name: 'mango'},
        {id: 3, name: 'banana'},
        {id: 4, name: 'apple'}
    ]

    const [value, setValue] = useState(flavours[0].name)

    const handleSubmit = (event) => {
        alert(value)
        event.preventDefault()
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const flavourList =
        flavours.map((flavour) =>
                <option key={flavour.id} value={flavour.name}>{flavour.name}</option>
            )


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pick your favourite flavour
                <select value={value} onChange={handleChange}>
                    {flavourList}
                </select>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default FlavorForm