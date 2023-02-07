import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProduct } from '../actions/productActions';

const ProductScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.productList);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem('currentProduct'));
    dispatch(setCurrentProduct(product));
  }, []);

  return (
    <>
      <button className="btn btn-dark my-3" onClick={history.goBack}>
        Go Back
      </button>
      <Row>
        <Col md={6}>
          <Image src={currentProduct?.jetpack_featured_media_url} alt={currentProduct?.title?.rendered} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Title: {currentProduct?.title?.rendered}
            </ListGroup.Item>
            <ListGroup.Item>
              <div dangerouslySetInnerHTML={{ __html: currentProduct?.excerpt?.rendered }} />
            </ListGroup.Item>
            <ListGroup.Item>
              Date: {new Date(currentProduct?.date).toLocaleDateString()}
            </ListGroup.Item>
            <ListGroup.Item>
              Url: <a href={currentProduct?.link} rel="noreferrer" target="_blank">{currentProduct?.link}</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
