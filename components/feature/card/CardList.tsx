import ArticleCard from './ArticleCard';

const CardList = () => {
  return (
    <div className='grid lg:grid-cols-3 p-4 gap-4'>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default CardList;
