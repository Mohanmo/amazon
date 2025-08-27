import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  media: {
    height: 200,
    backgroundSize: "contain",
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
});

function Product({ title, image, price, rating }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h6">${price}</Typography>
        <Typography variant="body2">{"⭐️".repeat(rating)}</Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Add to Cart
      </Button>
    </Card>
  );
}

export default Product;
