import React from 'react';
import './vote_tracker.css';


class Vote_tracker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            vote_limit: 10,
            counter: 0,
        }

        this.up_vote_count = this.up_vote_count.bind(this);
        this.down_vote_count = this.down_vote_count.bind(this);
        this.updateState = this.updateState.bind(this);

    }

    up_vote_count() {
        this.updateState(this.state.counter + 1);
    }

    down_vote_count() {
        this.updateState(this.state.counter - 1);
    }

    updateState(counter ) {
        if (this.state.vote_limit < 1) { return alert('No more votes!.') }
        else{
            let vote_limit = this.state.vote_limit - 1;
            this.setState({counter, vote_limit})
        }
    }

    componentDidUpdate(){
        console.log('Vote_tracker: ', this.state.counter);
    }

    render(){
        return(
            <main>
                <h2>Total Votes: {this.state.counter}</h2>
                <h2>Remaining Votes: {this.state.vote_limit}</h2>
                <span onClick={this.down_vote_count}>-</span>
                <span onClick={this.up_vote_count}>+</span>
            </main>
        )
    }
}

export default Vote_tracker;