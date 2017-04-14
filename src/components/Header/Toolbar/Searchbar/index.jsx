import React from 'react'
import { Col } from 'react-flexbox-grid'
import injectSheet from 'react-jss'

import searchNormalIcon from 'images/icons/search-normal.png'
import searchHoverIcon from 'images/icons/search-hover.png'


const styles = {
  root: {
    borderBottom: '1px solid #333',
    transition: 'border-bottom-color 0.2s ease-in-out',
    position: 'relative',
  },
  rootHover: {
    extend: 'root',
    borderBottomColor: '#fe8419',
  },
  searchField: {
    padding: '0.5em 0',
    width: '100%',
    border: 'none',
    outline: 'none',
  },
  searchIconWrapper: {
    width: '2em',
    height: '100%',
    cursor: 'pointer',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  searchIcon: {
    width: '1em',
    height: '1em',
    position: 'absolute',
    left: '0.5em',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  searchIconNormal: {
    extend: 'searchIcon',
    zIndex: '2',
    transition: 'all 0.2s ease-in-out',
  },
  searchIconFaded: {
    extend: 'searchIconNormal',
    opacity: '0',
  },
}

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: false}
  }

  onMouseOver() {
    this.setState({hovered: true})
  }

  onMouseOut() {
    this.setState({hovered: false})
  }


  render() {
    const {classes} = this.props
    const {hovered} = this.state
    return(
      <Col md={5} mdOffset={1}>
        <div
          className={hovered ? classes.rootHover : classes.root}
          onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
        >
          <input className={classes.searchField} type='text' placeholder='Search' />
          <div className={classes.searchIconWrapper}>
            <img className={hovered ? classes.searchIconFaded : classes.searchIconNormal} src={searchNormalIcon}/>
            <img className={classes.searchIcon} src={searchHoverIcon}/>
          </div>
        </div>
      </Col>
    )
  }
}

export default injectSheet(styles)(Searchbar)
