import { Fragment } from 'react';

//import { CategoriesContext } from '../../contexts/categories.context';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Footer from '../../components/Footer/footer.component';

import { BlankSpace } from './categories-prev-route.styles';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>

      { isLoading ?  (
        <Spinner/>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview 
              key={title} 
              title={title} 
              products={products} 
            />
          );
        }))

      }

      <BlankSpace></BlankSpace>
     
      <Footer />

    </Fragment>
  );
};

export default CategoriesPreview;