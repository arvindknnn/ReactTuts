import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    id: 1,
                    name: "Foo",
                    age: 20
                },
                {
                    id: 2,
                    name: "Bar",
                    age: 30
                },
                {
                    id: 3,
                    name: "Baz",
                    age: 40
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Header
                </h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        // console.log("I got called");
        function addCells(data, callback){ 
            // console.log(data);
            var index = 0;
            for ( var cellData in data) {
                index++;
                console.log(cellData + "@" + index);
                callback(data[cellData], index);
            }
        }
        return (
            <tr>
                {addCells(this.props.data, (cellData, index) => {console.log("Got: " + cellData); return (<TableRowData data = {cellData}/>);})}
            </tr>
        );
    }
}

class TableRowData extends React.Component {
    render() {
        console.log("I came here..");
        return (
            <td>{this.props.data}</td>
        );
    }
}



export default App;