const CategoryBar = ({menu}) => {
    const categories = menu.map(category => category.category);
    return (
        categories.map((categoryName, index) => (
            <a 
              key={index} 
              href={`#${categoryName}`} 
              className="category-link"
            >
              {categoryName}
            </a>
          ))
        )
}

export default CategoryBar;