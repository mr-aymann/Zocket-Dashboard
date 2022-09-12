import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "./post.css"

function Post( img ) {
    const Image= JSON.stringify(img) || "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    

    const cake =[
        {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},  
    ]


  return (
    <div>
     <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <div className='header'>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >M</Avatar>
        <Typography gutterBottom variant="h5" component="div">
          Mukund Cake Shop
        </Typography>
        </div>
        <br/>
        <Typography variant="body2" color="text.secondary">
          We are a cake shop in mumbai. We make cakes for all occasions.
        </Typography>
      </CardContent>
      <CardMedia 
        component="img"
        alt="Cake"
        height="100"
        image="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <CardActions>
        <Button size="small">Change Image</Button>
        <Button size="small">Edit Text</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default Post