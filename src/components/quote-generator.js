import React from 'react'

export default class QuoteGenerator extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            text: " ",
            author: " ",
        }
    }

    componentDidMount() {
        const encouragingStatement = Math.floor(Math.random() * 100)
        fetch("https://type.fit/api/quotes")
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            const newText = data[encouragingStatement].text.replace(/\.$/, "");  
            const newAuthor = data[encouragingStatement].author.replace(/\.$/, "");
            this.setState({
              text: newText, 
              author: newAuthor
            });
          });
      }


    render() {
        return (
            <div className="quote-container">
            <span className="quote-generator">{this.state.text} - {this.state.author === null ? "unknown" : this.state.author}</span>
            </div>
        )
    }
}