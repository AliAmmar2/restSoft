import './categoryBar.styles.scss';

const CategoryBar = ({ menu }) => {
  const categories = menu.map((category) => category.category);
  return (
    <div className="category-bar">
      {categories.map((categoryName, index) => (
        <a 
          key={index} 
          href={`#${categoryName}`} 
          className="category-link"
        >
          {categoryName}
        </a>
      ))}
    </div>
  );
};

export default CategoryBar;
