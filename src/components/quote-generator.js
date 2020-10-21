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
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        let count = 0;
        data.forEach(data => count++)
        const encouragingStatement = Math.floor(Math.random() * count)
        if (data[encouragingStatement].author === null) {
          return null;
        }
        else {
          const newText = data[encouragingStatement].text.replace(/\.$/, "");
          let newAuthor = data[encouragingStatement].author.replace(/\.$/, "");
          if (newAuthor === "Donald Trump") {
            console.log(newAuthor)
            return newAuthor = 'Anonymous'
          }
          if (newAuthor === null && newText === null) {
            return newAuthor = 'something went wrong!'
          }
          this.setState({
            text: newText,
            author: newAuthor
          });
        }
      });
  }


  render() {
    return (
      <div className="quote-container">
        <span className="quote-generator">{!this.state.text ? 'there was an error! refresh the page?' : null}{this.state.text} - {this.state.author === null ? "unknown" : this.state.author}</span>
      </div>
    )
  }
}