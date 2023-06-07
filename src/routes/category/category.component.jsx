import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../Components/Footer/footer.component';

import { 
  CategoryContainer, 
  Title, 
} from './category.styles';


const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
      <Footer />
    </Fragment>
  );
};

export default Category;