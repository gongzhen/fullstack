import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
    // prop type for state
    static propTypes = {
        initialData:React.PropTypes.object.isRequired
    };

    state = this.props.initialData;

    componentDidMount(){
    
    }

    componentWillUnmount(){        

    }
    
    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests:{
                    ...this.state.contests,
                    [contest.id]: contest
                }
            });                    
        });
    }

    fetchContestList = () => {
        pushState(
            { currentContestId: null},
            '/'
        );

        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            });
        });
    }

    // return current contest from currentContestId
    currentContest() {
        return this.state.contests[this.state.currentContestId];
    }

    // return page header from current contest id.
    pageHeader(){
        if(this.state.currentContestId) {
            return this.currentContest().contestName;
        }
        return 'Naming Contests';
    }
    
    currentContent() {
        if (this.state.currentContestId) {
            return <Contest
                contestListClick={this.fetchContestList}
                {...this.currentContest()} />;
        }

        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
    } 

    render(){
        // debugger;
        return(
            <div className = 'App'>
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>            
        );
    }
}

export default App;