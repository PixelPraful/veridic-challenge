import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/productActions';

const Product = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const goToDetailsPage = () => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
    dispatch(setCurrentProduct(product));
    history.push(`/post/${product?.id}`);
  };

  return (
    <Card style={{ cursor: 'pointer' }}  onClick={goToDetailsPage} className="my-3 p-1 rounded h-100">
      <Card.Img height="200px" src={product?.jetpack_featured_media_url} variant='top' />
      <Card.Body className="pb-0">
        <Card.Text as="div">
          <span className="badge badge-danger">{product?.type}</span>
        </Card.Text>
        <br />
        <Card.Title as="div">
          <strong>{product?.title?.rendered}</strong>
        </Card.Title>
        {/* <Card.Text className="m-0">Author: {product.author}</Card.Text> */}
        <Card.Text className="m-0">Date: {new Date(product?.date).toLocaleDateString()}</Card.Text>
        <a className="text-danger mt-4" rel="noreferrer" target="_blank" href={product?.link}>Read more</a>
      </Card.Body>
    </Card>
  );
};

export default Product;
