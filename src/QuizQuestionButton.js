import React, {Component} from 'react'

class QuizQuestionButton extends Component{
    render(){
        return(
        <li><butto>{this.props.button_text}</butto></li>
        )
    }
}

export default QuizQuestionButton