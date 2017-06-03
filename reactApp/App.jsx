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

        function addCells(data, callback) {
            var res = [];
            for (var cellData in data) {
                res.push(callback(data[cellData]));
            }
            return res;
        }
        return (
            <tr>
                {addCells(this.props.data, (cellData) => <TableRowData data={cellData} />)}
            </tr>
        );
    }
}

class TableRowData extends React.Component {
    render() {
        return (
            <td>{this.props.data}</td>
        );
    }
}



export default App;