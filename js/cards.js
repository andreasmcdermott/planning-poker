import React from 'react'
import {Match, Link} from 'react-router'
import ActiveCard from './activecard'

export default class Cards extends React.Component {
  constructor (props) {
    super(props)
    this.state = {layout: this.calcLayout()}
    this.calcLayout = this.calcLayout.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', () => this.setState({layout: this.calcLayout()}))
  }
  calcLayout () {
    let menuHeight = 94
    let outerSpace = 20
    let cardSpace = 10
    let height = window.innerHeight - menuHeight - outerSpace * 2
    let width = window.innerWidth - outerSpace * 2
    
    let numColumns = 1
    if (this.props.options.length <= 6) { // 2 columns
      numColumns = 2
    } else if (this.props.options.length <= 12) { // 3 columns
      numColumns = 3
    } else if (this.props.options.length <= 20) { // 4 columns
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
    return (
      <div className="cards">
        <Match pattern={`${this.props.pathname}/:val`} render={(props) => <ActiveCard {...props} style={this.state.layout.selected}/>}/>
        <Match exactly pattern={this.props.pathname} render={() => (
          <ul role="presentation">
            {this.props.options.map(option => (
              <li key={option} role="presentation">
                <Link 
                  to={`${this.props.pathname}/${option}`}
                  style={this.state.layout.card}
                >{option}</Link>
              </li>  
            ))}
          </ul>)}/>
      </div>
    )
  }
}