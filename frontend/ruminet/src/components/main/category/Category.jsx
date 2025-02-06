import { Button } from '@/components/ui/button';
import { CategoryCardGrid } from './category-card-grid/CategoryCardGrid';

export const Category = ({ homeSections }) => {
  return (
    <section className='flex gap-8 flex-col p mt-8 px-4'>
      {homeSections.map((homeSection) => (
        <div key={homeSection.id} className='w-full grid gap-8'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold lg:text-xl'>
              {homeSection.categoryTitle}
            </h3>
            <Button variant='primary'>Ver &#43;</Button>
          </div>
          <CategoryCardGrid homeSection={homeSection} />
        </div>
      ))}
    </section>
  );
};
