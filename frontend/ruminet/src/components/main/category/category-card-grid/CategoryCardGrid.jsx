import { CategoryCardGridItems } from './CategoryCardGridItems';

export const CategoryCardGrid = ({ homeSection }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
      {homeSection.items.map((item) => (
        <CategoryCardGridItems key={item.id} {...item} />
      ))}
    </div>
  );
};
