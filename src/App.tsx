import React from "react";
import Button from "./Button";
import Display from "./Display";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Button />
                <Display />
            </div>
        );
    };
}
