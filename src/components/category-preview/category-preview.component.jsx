import ProductCard from '../product-card/product-card.component';
import { GrMore } from 'react-icons/gr'


import {
  CategoryPreviewContainer,
  TitleContainer,
  Title,
  Preview,
  SeeMore,
  StyledIconLink,
  StyledGrMore,
} from './category-preview.styles/'


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      
      <TitleContainer to={title}>
        <Title to={title}>{title.toUpperCase()}</Title>
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
          <StyledGrMore/>
        </StyledIconLink>

      </SeeMore>
    
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;