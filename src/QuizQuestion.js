import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
constuctor(props){
    super(props)
    this.props = {
        showNextQuestionHandler = this.showNextQuestion.bind(this)
    }
}
handleClick(buttonText){
    if(buttonText === this.props.quiz_question.answer){
        this.props.showNextQuestionHandler()
    }
}

showNextQuestionHandler(){

}
render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map((value, index) => {
                        return <QuizQuestionButton key={index} button_text={value}/>
                    })}
                    {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/> */}
                </ul>
                </section>
            </main>
        )
    }
}
export default QuizQuestion