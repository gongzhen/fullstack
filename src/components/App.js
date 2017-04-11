import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

// extends React component
// Only use this syntax if you need to use state.
class App extends React.Component {
    state = {
        pageHeader: 'Name contests.'
    };

    componentDidMount(){

    }

    componentWillUnmount(){

    }
    
    render(){
        return(
            <div className = 'App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest =>
                        <ContestPreview {...contest} />
                    )}                    
                </div>
            </div>            
        );
    }
}

export default App;