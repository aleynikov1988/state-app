import React from "react";
import Button from "./components/Button";
import Display from "./components/Display";

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
