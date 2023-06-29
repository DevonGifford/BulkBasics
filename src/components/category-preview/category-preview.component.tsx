import { FC } from 'react';

import { CategoryItem } from '../../store/categories/categories.types';

import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  TitleContainer,
  Title,
  Preview,
  SeeMore,
  StyledIconLink,
  IconImage,
} from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
}


const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      
      <TitleContainer to={title}>
        <Title>{title.toUpperCase()}</Title>
      </TitleContainer>
      
      
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
      </Preview>
    
      <SeeMore>
        
        <StyledIconLink to={title}>
          see more<br/>
          <IconImage/>
        </StyledIconLink>

      </SeeMore>
    
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;