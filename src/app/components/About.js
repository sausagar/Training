import React from 'react';

import Contact from './Contact'

export default class About extends React.Component {

    constructor(props) {
        super(props);

        // state is a keyword
        this.state = {
            members: ['Member 1', 'Member 2', 'Member 2'],
            show: true,
            name: "enter value"
        }
    }

    toggle(e) {
        console.log("toggle called " + e);

        // render triggered whenever setState is called
        this.setState({
            show: !this.state.show
        })
    }


    componentDidMount() {
        // this.inputElement.focus();
        // this.inputElement.placeholder = "Enter name here "
    }

    addMember() {
      // BAD
      // Mutation of state
         //this.state.members.push(this.inputElement.value);
      //Force Update, since setState wont be called, so no render call
         // this.forceUpdate();

    // Another Way
    this.setState({
        members: [...this.state.members, this.state.name]
    })

    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }


    render() {

        console.log("about render called.")

        let list = this.state.members.map((m, i) => <li key={i} > {m} </li>);

        return (
            <div>
                <h2>About</h2>

                <div>
                    <input name="name"
                      id= "nameId"
                      value={this.state.name}
                      onChange = {(e) =>{
                          this.onChange(e);
                      }}
                        ref={(domElement) => this.inputElement = domElement}
                    />
                </div>
                <div>
                    <button onClick={() => this.addMember()}>
                        Add Member
            </button>
                </div>

                <button onClick={(e) => {
                    this.toggle(e)
                }} >{this.state.show ? "Hide" : "Show"}
                </button>
                {this.state.show &&
                    <ul>
                        {list}
                    </ul>}

                    <Contact/>
            </div>

        );
    }


}