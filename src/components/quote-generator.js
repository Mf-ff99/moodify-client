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
      //count number of responses, use number to generate random number
      //include link to api in readme for license terms  
      const encouragingStatement = Math.floor(Math.random() * 80)
        fetch("https://type.fit/api/quotes")
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            if(data[encouragingStatement].author === null) {
              return null;
            }
             else {
            const newText = data[encouragingStatement].text.replace(/\.$/, "");  
            let newAuthor = data[encouragingStatement].author.replace(/\.$/, "");
            // if(newAuthor === "Donald Trump") {
            //   newAuthor = 'Anonymous'
            // }
            if (newAuthor === null && newText === null) {
              newAuthor = 'something went wrong!'
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