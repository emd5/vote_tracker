import React from 'react';
import './vote_tracker.css';


class Vote_tracker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            polarity: 'neutral',
            hidden_vote_limit: 10,
        }

        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        // this.decreaseVoteLimit = this.decreaseVoteLimit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleUp() {
        this.updateState(this.state.counter + 1);
        // this.updateState(this.state.hidden_vote_limit - 1);
        // decreaseVoteLimit()
        }

    handleDown() {
        this.updateState(this.state.counter - 1);
        // this.updateState(this.state.hidden_vote_limit - 1);
        // decreaseVoteLimit()
    }

    // decreaseVoteLimit() {
    //     this.updateState(this.state.hidden_vote_limit - 1);
    // }

    updateState(counter, hidden_vote_limit) {
        let polarity = null;
        if (counter > 0){polarity = "positive"};
        if (counter < 0){polarity = "negative"};
        // if (hidden_vote_limit = 10) {
        //     return "No more votes!"
        // }
        this.setState(
            {counter, polarity, hidden_vote_limit}
        )
    }

    componentDidUpdate(){
        console.log('Vote_tracker: ', this.state.counter);
    }

    render(){
        return(
            <main>
                <h2 className={this.state.polarity}>{this.state.counter}</h2>
                <span onClick={this.handleDown}>-</span>
                <span onClick={this.handleUp}>+</span>
                {/* <h2>{this.state.hidden_vote_limit}</h2> */}
            </main>
        )
    }
}

export default Vote_tracker;