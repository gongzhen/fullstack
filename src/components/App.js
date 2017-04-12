import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = {
        pageHeader: 'Name contests.',
        contests:this.props.initialContests
    };

    componentDidMount(){

    }

    componentWillUnmount(){

    }
    
    render(){
        // debugger;
        return(
            <div className = 'App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                    // For every map loop, you need to 
                    // provide an unique key for each child element by id.
                        <ContestPreview key={contest.id} {...contest} />
                    )}                    
                </div>
            </div>            
        );
    }
}

export default App;