import React from 'react';
import './vote_tracker.css';


class Vote_tracker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            polarity: 'neutral',
        }

        this.up_vote_count = this.up_vote_count.bind(this);
        this.down_vote_count = this.down_vote_count.bind(this);
        this.vote_limit = this.vote_limit.bind(this);

    }

    up_vote_count() {
        this.vote_limit(this.state.counter + 1);
    }

    down_vote_count() {
        this.vote_limit(this.state.counter - 1);
    }

    vote_limit(counter) {
        let polarity = null;
        if (counter > 0){polarity = "positive"};
        if (counter < 0){polarity = "negative"};
        this.setState(
            {counter, polarity}
        )
    }

    componentDidUpdate(){
        console.log('Vote_tracker: ', this.state.counter);
    }

    render(){
        return(
            <main>
                <h2 className={this.state.polarity}>{this.state.counter}</h2>
                <span onClick={this.down_vote_count}>-</span>
                <span onClick={this.up_vote_count}>+</span>
            </main>
        )
    }
}

export default Vote_tracker;