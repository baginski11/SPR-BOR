import React from 'react';

export default function Result(props){
    if(props.teamHomeScore != null){
        if(props.teamHomeScore > props.teamAwayScore){
            return(
                <div className="result-wrapper">
                    <h6 className="score winner">{props.teamHomeScore}</h6>
                    <h6 className="score">{props.teamAwayScore}</h6>
                </div>
            )
        }
        else if(props.teamHomeScore < props.teamAwayScore){
            return(
                <div className="result-wrapper">
                    <h6 className="score">{props.teamHomeScore}</h6>
                    <h6 className="score winner">{props.teamAwayScore}</h6>
                </div>
            )
        }
        else{
            if(props.teamHomePenalty > props.teamAwayPenalty)
                return(
                    <div className="result-wrapper">
                        <h6 className="penalty winner">{props.teamHomePenalty}</h6>
                        <h6 className="score">{props.teamHomeScore}</h6>
                        <h6 className="score">{props.teamAwayScore}</h6>
                        <h6 className="penalty">{props.teamAwayPenalty}</h6>
                    </div>
                )
            else{
                return(
                    <div className="result-wrapper">
                        <h6 className="penalty">{props.teamHomePenalty}</h6>
                        <h6 className="score">{props.teamHomeScore}</h6>
                        <h6 className="score">{props.teamAwayScore}</h6>
                        <h6 className="penalty winner">{props.teamAwayPenalty}</h6>
                    </div>
                )  
            }
        }
    }
}