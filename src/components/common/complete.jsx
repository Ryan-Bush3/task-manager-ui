import React, { Component } from 'react';

class Complete extends Component {
    render() { 
        const mystyle = {
            backgroundColor: '#0033ff',
            color: 'white',
            marginRight: '10px',
            fontSize: '18px',
            borderRadius: '5px',
            padding: '6px'
        };
        const newstyle = {
            textAlign: 'center'
        }

        return (
            <div style={newstyle}>
                {/* <label style={mystyle}>
                    Completed
                </label> */}
                <input type="checkbox" />
            </div>
        );
    }
}
 
export default Complete;