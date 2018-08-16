counter.jsx

import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0
    };

    AddMe = (num) => {
        this.setState({
            counter: this.state.counter + num
        })
    }

    SubMe = sub => {
        this.setState({
            counter: this.state.counter - sub
        })
    }
    render() {
        return (
            <React.Fragment>

                <span className={this.getBadgeClasses()}>{this.fromatCount()}</span>
                <button type="button"
                    onClick={() => this.AddMe(5)}
                    className="btn btn-success btn-sm m-3">Add by 5
                    {/* <span class="badge badge-dark">.</span> */}
                </button>


                {/* <button
                    onClick={() => this.AddMe(10)}
                    className="btn btn-success btn-lg m-3">Add by 10
                </button> */}

                <button
                    onClick={() => this.SubMe(2)}
                    className="btn btn-warning btn-sm m-3">Sub by 2
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} type="button" className="btn btn-danger btn-sm m-2">Delete</button>


                {/* <button
                    onClick={() => this.SubMe(4)}
                    className="btn btn-warning btn-lg m-3">Sub by 4
                </button> */}

            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.counter <= 0 ? "danger" : "primary";
        return classes;
    }

    fromatCount() {
        const { counter } = this.state;
        return counter === 0 ? <p>Zero</p> : counter;
    }
}

export default Counter;









































counters.jsx



import React, { Component } from 'react';
import Counter from './Counter';

class MyCounters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 0 },
            // { id: 3, value: 0 },
            // { id: 4, value: 0 },
        ]
    };

    handleDelete = (counterId) => {
        console.log('Clicked.', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters: counters
        })
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter onDelete={this.handleDelete}
                        key={counter.id}
                        // value={counter.value}
                        // id={counter.id}
                        counter={counter}
                    />)}
                {/* <Counter onDelete={this.handleDelete} />
                <br />
                <Counter />
                <br />
                <Counter /> */}
            </div>
        );
    }
}

export default MyCounters;






























index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MyCounters from './components/MyCounters';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MyCounters />, document.getElementById('root'));
registerServiceWorker();
