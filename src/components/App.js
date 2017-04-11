import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

// extends React component
// Only use this syntax if you need to use state.
class App extends React.Component {
    state = {
        pageHeader: 'Name contests.',
        contests:[]
    };

    componentDidMount(){
        // after app get mounted, we will get the data.
        this.setState({
            contests: data.contests
        });
    }

    componentWillUnmount(){

    }
    
    render(){
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