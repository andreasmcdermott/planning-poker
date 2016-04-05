import React from 'react';

export default class Cards extends React.Component {
  constructor (props) {
    super(props);
    this.state = { active: null, options: props.options, layout: null };
    this.state.layout = this.calcLayout();
  }
  select (option, e) {
    this.state.active = option;
    this.setState(this.state);
    e.preventDefault();
  }
  unselect (e) {
    this.state.active = null;
    this.setState(this.state);
    e.preventDefault();
  }
  handleResize () {
    let layout = this.calcLayout();
    this.state.layout = layout;
    this.setState(this.state);
  }
  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }
  calcLayout () {
    let menuHeight = 94;
    let outerSpace = 20;
    let cardSpace = 10;
    let height = window.innerHeight - menuHeight - outerSpace * 2;
    let width = window.innerWidth - outerSpace * 2;
    
    let numColumns = 1;
    if (this.state.options.length <= 6) { // 2 columns
      numColumns = 2;
    } else if (this.state.options.length <= 12) { // 3 columns
      numColumns = 3;
    } else if (this.state.options.length <= 20) { // 4 columns
      numColumns = 4;
    }
    
    let cardSize = (width < height ? (width / numColumns) : (height / numColumns)) - cardSpace * 2;
    
    return {
      selected: {
        width: width + 'px',
        height: height + 'px',
        lineHeight: height + 'px',
        margin: '0 ' + outerSpace + 'px'
      },
      card: {
        width: cardSize + 'px',
        height: cardSize + 'px',
        lineHeight: cardSize + 'px',
        margin: cardSpace
      }
    };
  }
  render() {
    return (
      <ul id="cards">
        <li key={'active'} className={this.state.active !== null ? 'selected active' : 'selected'}>
          <a
            style={this.state.layout.selected}
            href
            onClick={this.unselect.bind(this)}>
            {this.state.active}
          </a>
        </li>
        {this.state.options.map(option => {
            return (
              <li key={option}>
                <a 
                  style={this.state.layout.card}
                  href
                  onClick={this.select.bind(this, option)}>
                  {option}
                </a>
              </li>
            );
          })}
      </ul>
    );
  }
}
