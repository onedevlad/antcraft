import React from 'react'
import { Col} from 'react-flexbox-grid'
import injectSheet from 'react-jss'


const styles = {
  root: {
    textAlign: 'center',
   },
   link: {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '1.5px',
    transition: 'all 0.2s ease-in-out',
   },
   linkHovered: {
    extend: 'link',
    color: '#fe8419',
   }
}

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: false}
  }
  handleMouseOver() {
    this.setState({hovered: true})
  }
  handleMouseOut() {
    this.setState({hovered: false})
  }

  render() {
    const {href, text, classes} = this.props
    const {hovered} = this.state
    return (
      <Col className={classes.root} md={2} onMouseOver={ () =>{this.handleMouseOver()} } onMouseOut={ () => {this.handleMouseOut()} }>
        <a className={hovered ? classes.linkHovered : classes.link} href= {href}>{text}</a>
      </Col>
    )
  }
}

export default injectSheet(styles)(Link)
