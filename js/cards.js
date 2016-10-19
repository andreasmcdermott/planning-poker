import React from 'react'
import {Link} from 'react-router'

export default class Cards extends React.Component {
  constructor (props) {
    super(props)
    this.state = { options: props.options, layout: null }
    this.state.layout = this.calcLayout()
    this.render = this.render.bind(this)
  }
  handleResize () {
    let layout = this.calcLayout()
    this.state.layout = layout
    this.setState(this.state)
  }
  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }
  calcLayout () {
    let menuHeight = 94
    let outerSpace = 20
    let cardSpace = 10
    let height = window.innerHeight - menuHeight - outerSpace * 2
    let width = window.innerWidth - outerSpace * 2
    
    let numColumns = 1
    if (this.state.options.length <= 6) { // 2 columns
      numColumns = 2
    } else if (this.state.options.length <= 12) { // 3 columns
      numColumns = 3
    } else if (this.state.options.length <= 20) { // 4 columns
      numColumns = 4
    }
    
    let cardSize = (width < height ? (width / numColumns) : (height / numColumns)) - cardSpace * 2
    
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
    }
  }
  render() {
    console.log(this.props)
    if (this.props.children) {
      return (
        <div>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <ul id="cards">
          {this.state.options.map(option => {
              return (
                <li key={option}>
                  <Link to={`/standard/${option}`}
                    style={this.state.layout.card}>
                    {option}
                  </Link>
                </li>
              );
            })}
        </ul>
      )
    }
  }
}
