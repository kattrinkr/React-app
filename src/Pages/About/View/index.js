import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Styles from './styles';
import Menu from '../../../Components/Menu/View/index';

const About = ({classes}) => (
    <div className={classes.wrapper}> 
      <Menu tab='about'/>
      <div className={classes.content}>
        <Typography variant="display2" gutterBottom className={classes.logo}>
          :i<span className={classes.logoSpan}>Tech</span>Art
        </Typography>
        <Typography variant="headline" gutterBottom className={classes.info}>
          As a software development company, iTechArt helps VC-backed startups and fast-growing tech companies build successful, scalable products that users love. Our forte is agile dedicated teams of brilliant minds who rock in Web, Mobile, Big Data, QA & Testing, and DevOps.
        </Typography>
        <Card>
          <CardContent>
            <img src={require('./images/programmers.jpg')} alt='programmers'/>
          </CardContent>
          <CardActions>
            <Button variant="contained" href='https://www.itechart.com/' target='_blank' className={classes.button}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
)

export default withStyles(Styles)(About)