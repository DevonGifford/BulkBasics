import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Footer from '../../Components/Footer/footer.component';

import { BlankSpace } from './categories-prev-route.styles';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>

      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview 
            key={title} 
            title={title} 
            products={products} 
          />
        );
      })}

      <BlankSpace></BlankSpace>
     
      <Footer />

    </Fragment>
  );
};

export default CategoriesPreview;