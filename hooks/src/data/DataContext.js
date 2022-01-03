import React from "react";

export const data = {
    number: 123,
    text: 'Constext API...'
}

export const DataContext = React.createContext(data)

export default DataContext