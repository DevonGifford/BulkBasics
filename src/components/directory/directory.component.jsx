import { Fragment } from 'react';

import { useNavigate } from 'react-router-dom'

import DirectoryItem from '../directory-item/directory-item.component';

import { 
  FaComment, 
  FaTruckMoving, 
  FaGift, 
  FaSearch 
} from 'react-icons/Fa'

import { 
  DirectoryContainer, 
  QuickLinkContainer, 
  QuickLink, 
  StyledIcon  
} from './directory.styles';


const categories = [
  {
    id: 1,
    title: 'accessories',
    imageUrl: 'https://cdn.shoplightspeed.com/shops/643683/files/43388213/best-5-selling-gym-accessories-at-akfit.jpg',
    route: 'shop/accessories',
  },
  {
    id: 2,
    title: 'supplements',
    imageUrl: 'https://www.theweek.in/content/dam/week/news/health/images/2022/5/25/Mass-Gainer.jpg.transform/schema-16x9/image.jpg',
    route: 'shop/supplements',
  },
  {
    id: 3,
    title: 'programs',
    imageUrl: 'https://primofitnessusa.com/wp-content/uploads/2019/06/Habit-Nest-Journal.jpg',
    route: 'shop/coming-soon',
  },
  {
    id: 4,
    title: 'summer',
    imageUrl: 'https://images.bewakoof.com/web/workout-outfits-bewakoof-blog-3-1610945777.jpg',
    route: 'shop/summer',
  },
  {
    id: 5,
    title: 'winter',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0103/4013/9070/products/image_4a3f40f4-5fbb-4508-babb-1f937881c1a7_1200x1200.jpg?v=1559007685',
    route: 'shop/winter',
  },
];

const Directory = () => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate('/about');

  return (
    <Fragment> 

      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>


      <QuickLinkContainer>

        <QuickLink onClick={onNavigateHandler}>
          <StyledIcon>
            <FaTruckMoving />
          </StyledIcon>
          <h4>Fast Shipping</h4>
          <p>Save time and money with same day delivery</p>
        </QuickLink>

        <QuickLink onClick={onNavigateHandler}>
          <StyledIcon>
            <FaSearch />
          </StyledIcon>
          <h4>Live Tracking</h4>
          <p>Follow your order from our warehouse to your front door</p>
        </QuickLink>

        <QuickLink onClick={onNavigateHandler}>
          <StyledIcon>
            <FaGift />
          </StyledIcon>
          <h4>Gift Card's</h4>
          <p>Give them exactly what they want with a Gift Card</p>
        </QuickLink>

        <QuickLink onClick={onNavigateHandler}>
          <StyledIcon>
            <FaComment />
          </StyledIcon>
          <h4>Contact Us</h4>
          <p>How can we help or improve?</p>
        </QuickLink>







      </QuickLinkContainer>


    </Fragment>
  );
};

export default Directory;