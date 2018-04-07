import React from 'react';

const dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

class Decrypt extends React.Component {
  constructor(props) {
    super(props);
    this.target = props.text || "unknown text";
    this.delay = props.delay || 3000;
    this.interval = props.interval || 30;
    this.state = {
      text: this.init(props.text),
    };
  }

  init(text) {
    return text && text.length > 3 ? `${text[0]}${text.length - 2}${text[text.length - 1]}` : text;
  }

  componentDidMount() {
    setTimeout(() => {
      let timePassed = 0;
      let lettersCount = this.state.text.length;
      let interval = setInterval(() => {
        timePassed += this.interval;

        // Add new letters 5 times slower.
        if(this.state.text.length < this.target.length &&
          timePassed > (this.target.length * this.interval * 5)) {
          lettersCount++;
          this.setStateText(`${this.target[0]}${this.randomString(lettersCount - 2)}${this.target[this.target.length - 1]}`);
        }

        // Try to find matching letters.
        if(lettersCount === this.target.length) {
          for(let i = 1; i < lettersCount - 1; i++) {
            if(this.state.text[i] != this.target[i]) {
              this.setStateText(this.setCharAt(this.state.text, i, dictionary[this.random()]))
            }
          }
        }

        // Finish when text is matching target.
        if(this.target === this.state.text) {
          clearInterval(interval);
        }
      }, this.interval);
    }, this.delay);
  }

  random() {
    return Math.floor(Math.random() * dictionary.length);
  }

  randomString(amount) {
    let s = '';
    for(var i = 0; i < amount; i++) {
      s += dictionary[this.random()];
    }
    return s;
  }

  setCharAt(str,index,chr) {
    if(index > str.length - 1) {
      return str;
    }
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  setStateText(text) {
    this.setState({
      text: text,
    })
  }

  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default Decrypt;
