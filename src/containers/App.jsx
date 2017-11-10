import React, { Component, PropTypes } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
