import React from 'react';
import './vote_tracker.css';


class Vote_tracker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            hidden_vote_limit: 0,
            polarity: 'neutral',
            isDisabled: false,
        }

        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleUp() {
        this.updateState(this.state.counter + 1, this.state.hidden_vote_limit);
        }

    handleDown() {
        this.updateState(this.state.counter - 1, this.state.hidden_vote_limit);
    }

    updateState(counter, hidden_vote_limit) {
        let polarity = null;
        let isDisabled;
        hidden_vote_limit++;
        if (counter > 0){polarity = "positive"};
        if (counter < 0){polarity = "negative"};
        if (hidden_vote_limit >= 10) {
            isDisabled = true;
        } else {
            isDisabled = false;
        }
        this.setState(
            {counter, polarity, hidden_vote_limit, isDisabled}
        )
    }

    componentDidUpdate(){
        console.log('Vote_tracker: ', this.state.counter);
    }

    render(){
        return(
            <main>
                {this.state.hidden_vote_limit >= 10 ? <h2>No more votes!</h2> : <h2 className={this.state.polarity}>{this.state.counter}</h2>}
                <button onClick={this.handleDown} disabled={this.state.isDisabled}>-</button>
                <button onClick={this.handleUp} disabled={this.state.isDisabled}>+</button>
            </main>
        )
    }
}

export default Vote_tracker;