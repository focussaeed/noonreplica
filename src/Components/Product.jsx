import React from "react";
import { Product_Card } from "./Product_Card";
import { Grid } from "@mui/material";

const products_arr = [
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020112V/45/_/1698760325/746820c5-e64f-4c07-859b-cf86853cd6c6.jpg",
    title: "Apple 2023 Newest MC B",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/v1669102687/N28431691A_16.jpg",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  // {
  //   img_url:
  //     "https://f.nooncdn.com/products/tr:n-t_240/pzsku/Z4EB55AB9D8F6A4E5DE0CZ/45/_/1699291228/66684342-f927-44d6-9a83-98fe3ff1b032.jpg",
  //   title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
  //   rating: 4,
  //   sold: 232,
  //   dis_price: 2000,
  //   orignal_price: 2200,
  // },
  // {
  //   img_url:
  //     "https://f.nooncdn.com/products/tr:n-t_240/pnsku/N53437293A/45/_/1694677785/7a51c387-b7d3-4049-a60e-5c9b8cf20cbe.jpg",
  //   title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
  //   rating: 4,
  //   sold: 232,
  //   dis_price: 2000,
  //   orignal_price: 2200,
  // },
  
];

export const Products = () => {
  return (
    <>
      <Grid container>
        {products_arr.map((current_obj, index) => {
          return (
            <Grid key={index} item>
              <Product_Card
                //   img_url, title, rating, sold, dis_price, original_price
                card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};