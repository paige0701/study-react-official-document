import React from "react";
const NumberList2 = () => {
    const numbers = [0, 1, 2, 3, 4, 5]
    const listItems = numbers.map((number, key) => <li key={number}>{number*2}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    )
}

// export default NumberList2

// Correct key usage
const ListItem = (props) => {
    return (

        // no need to specify key here
        <li>{props.value}</li>
    )
}
const NumberList = () => {
    const numbers = [1,2,3,4,5]
    return (
        <ul>{numbers.map((number) =>
            <ListItem key={number.toString()} value={number} />
        )}
        </ul>
    )
}

export default NumberList