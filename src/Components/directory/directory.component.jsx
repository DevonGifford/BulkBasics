import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'accessories',
    imageUrl: 'https://cdn.shoplightspeed.com/shops/643683/files/43388213/best-5-selling-gym-accessories-at-akfit.jpg',
    route: 'shop/mens',
  },
  {
    id: 2,
    title: 'supplements',
    imageUrl: 'https://www.theweek.in/content/dam/week/news/health/images/2022/5/25/Mass-Gainer.jpg.transform/schema-16x9/image.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'programs',
    imageUrl: 'https://primofitnessusa.com/wp-content/uploads/2019/06/Habit-Nest-Journal.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'summer',
    imageUrl: 'https://images.bewakoof.com/web/workout-outfits-bewakoof-blog-3-1610945777.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'winter',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0103/4013/9070/products/image_4a3f40f4-5fbb-4508-babb-1f937881c1a7_1200x1200.jpg?v=1559007685',
    route: 'shop/hats',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;