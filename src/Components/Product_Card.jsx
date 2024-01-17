import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Product_Card(props) {
  const { img_url, title, rating, sold, dis_price, orignal_price } =
    props.card_data;
  return (

    
    // <div className="grid grid-rows-1  ">

    // <div className="grid grid-flow-col px-5 py-5 gap-3"> 

    
      <Card sx={{ height: 300, width: 200,}}>

      <CardMedia  sx={{ height: 80, width: 100, padding: 10,}} image={img_url} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {title}
        </Typography>

      
        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography>Rs. {dis_price}</Typography>

          <Typography sx={{ textDecorationLine: "line-through" }}>
            Rs. {orignal_price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
    // </div>



    //     </div>
    
  );
}

export { Product_Card };