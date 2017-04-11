import React from 'react';
import Header from './Header';

// extends React component
// Only use this syntax if you need to use state.
class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {test: 42};
    // }

    // same as the constructor wat.
    state = {
        pageHeader: 'Name contest with state.'
    };
    
    render(){
        return(
            <div className = 'App'>
                <Header message={this.state.pageHeader}/>
                <div>
                    ...                    
                </div>
            </div>            
        );
    }
}

export default App;