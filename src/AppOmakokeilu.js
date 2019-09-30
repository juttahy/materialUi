import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import MainNavigation from './Components/MainNavigation';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Jutta Hyrskylahti
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appbar: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '70%'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: 'grey',
    padding: theme.spacing(6),
    color: 'white'
  },
}));

// huom! REactissa ei voi viitata suoraan indexiin vaan pitää esim. id määritellä 
// objektin ominaisuudeks! Eli kokeile tätä tässä

const cardContents = [
  { id:1,
    otsikko: 'Hevonen 1',
  kuvaus: 'Etiam at fringilla elit. Sed lacinia leo orci, eget eleifend lacus dignissim non. Ut quis pulvinar erat. Nulla sed lorem pellentesque nunc facilisis eleifend semper eget quam. Ut non lacus pretium, semper nibh in, ultrices augue.',
  imageUrl: 'https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  { id:2,
    otsikko: 'Hevonen 2',
  kuvaus: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus feugiat tellus nec ex accumsan mollis a sit amet neque. ',
  imageUrl: 'https://images.unsplash.com/photo-1463748465553-80db1e6ff830?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
  },
  { id:3,
    otsikko: 'Hevonen 3',
  kuvaus: 'Maecenas quis nibh nec purus pretium dapibus. Cras eu ante tincidunt libero interdum euismod eu ut orci. Aliquam eget magna placerat sapien rutrum cursus.',
  imageUrl: 'https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  { id:4,
    otsikko: 'Hevonen 4',
  kuvaus: 'Donec elementum scelerisque mauris id dignissim. Ut tristique, augue vitae volutpat ultricies, turpis libero ullamcorper turpis, et hendrerit leo elit id tortor. ',
  imageUrl: 'https://images.unsplash.com/photo-1483140599654-39f27a551df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  { id:5,
    otsikko: 'Hevonen 5',
  kuvaus: 'Vestibulum tristique elit nec tincidunt blandit. Aliquam mattis blandit nulla eu scelerisque. ',
  imageUrl: 'https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  { id:6,
    otsikko: 'Hevonen 6',
  kuvaus: 'Quisque feugiat nunc sem, eu varius risus interdum sed. Ut eu odio ultricies, dapibus arcu tristique, lobortis diam. In finibus elementum ante.',
  imageUrl: 'https://images.unsplash.com/photo-1517326451550-8612522c096e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }
];
  
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
          <FavoriteBorderIcon className={classes.icon} />
          <Typography variant="h6" className={classes.title} color="inherit">
            Hevossivusto
          </Typography>
          <MainNavigation></MainNavigation>
        </Toolbar>
      </AppBar>
      <main>
        
        <Container className={classes.cardGrid} maxWidth="md">
          
          <Grid container spacing={4}>
            {cardContents.map(card => (
          
              <Grid item key={card.id} xs={12} sm={9} md={4}>
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imageUrl}
                    title={card.title}
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.otsikko}
                    </Typography>
                    <Typography>
                      {card.kuvaus}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Katso lisää
                    </Button>
                    <Button size="small" color="primary">
                      Varaa tunti
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" component="p">
          Link 1 Link 2 Link 3
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
