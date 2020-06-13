import React, { Component } from 'react'

class QuizQuestion extends Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            <li>
                {this.props.quiz_question}
            </li>
          </ul>
        </section>
      </main>
    )
}
}
export default QuizQuestion