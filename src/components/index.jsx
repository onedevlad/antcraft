import React from 'react'
import { Grid } from 'react-flexbox-grid'
import injectSheet from 'react-jss'
import Lato from 'fonts/Lato-Regular.ttf'

import Header from './Header/index'


const styles = {
  '@font-face': {
    fontFamily: 'Lato',
    src: `url('${Lato}') format("truetype")`,
  },
  root: {
    color: '#333',
    padding: '0 15px',
    fontFamily: '\'Lato\', sans-serif',
  }
}


const AppComponent = ({classes}) => (
  <Grid fluid className={classes.root}>
    <Header />
  </Grid>
)

export default injectSheet(styles)(AppComponent)
