import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword || '';
  const [keyWord, setkeyWord] = useState(keyword);
  const [searchProducts, setSeacrhProducts] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
    if (keyword) {
      const arr = products.filter(item => item?.title?.rendered?.toLowerCase().includes(keyword) && item);
      setSeacrhProducts(arr);
      setkeyWord(keyword);
    }
  }, [dispatch, keyword]);

  return (
    <>
      <h1 className="mt-3">Posts</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
        <>
          <Row>
            {
              searchProducts && searchProducts.length ?
                searchProducts.map((product, i) => (
                  <Col key={i} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      id={i}
                      keyword={keyWord}
                    />
                  </Col>
                )) :
                products.map((product, i) => (
                  <Col key={i} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      id={i}
                      keyword={keyWord}
                    />
                  </Col>
                ))
            }
          </Row>
        </>
      }
    </>
  );
};

export default HomeScreen;
