// title, image, text
import React from 'react';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
      marginTop:150
    }
  });

const postList = [
    { 
        id:1,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    },
    { 
        id:2,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1463748465553-80db1e6ff830?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    },
    { 
        id:3,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1551098891-7a1c852f6c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    },
    { 
        id:4,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1483140599654-39f27a551df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    },
    { 
        id:5,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    },
    { 
        id:6,
        title:"Hevosia",
        image:"https://images.unsplash.com/photo-1517326451550-8612522c096e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        text:"Rauhalliset ja kiltit hevoset, joista löytyy myös vauhtia.",
        url: "https://www.bc.fi/"
    }
];

const Posts = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} style={{padding:50}}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
            {postList.map(postItem => (
                <Grid item xs={3}>
                    <Card key={postItem.id}>
                        <CardMedia
                            component="img"
                            alt={postItem.title}
                            height="200"
                            image={postItem.image}
                        />
                        <CardContent>
                            <Typography>{postItem.title}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" href={postItem.url}>Book a lesson</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>  
        </div>
    );

}

export default Posts;