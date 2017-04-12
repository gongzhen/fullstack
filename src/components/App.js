import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {
    state = {
        pageHeader: 'Name contests.',
        contests:this.props.initialContests
    };

    componentDidMount(){
        // ajax function here.
        // data is being loaded through ajax call.
        axios.get('/api/contests')
        .then(resp => {
            this.setState({
                // console.log(resp);
                contests:resp.data.contests
            });
        })
        .catch(console.error);
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