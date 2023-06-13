import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

//import { CategoriesContext } from '../../contexts/categories.context';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../components/footer/footer.component';
import Spinner from '../../components/spinner/spinner.component';

import { 
  CategoryContainer, 
  Title, 
} from './category.styles';


const Category = () => {
  const { category } = useParams();
  
  //const { categoriesMap } = useContext(CategoriesContext);
  //console.log('render/re-rendering category component');
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
      )}
      <Footer />
    </Fragment>
  );
};

export default Category;