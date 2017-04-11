import React from 'react';
import Header from './Header';

// extends React component
// Only use this syntax if you need to use state.
class App extends React.Component {
    state = {
        pageHeader: 'Name contest with state.'
    };

    componentWillMount() {
        console.log('will Mount');
        debugger;
    }
    componentDidMount(){
        console.log('did Mount');
        debugger;
    }

    componentWillUnmount(){
        console.log('did UnMount');
        debugger;        
    }
    
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