import React from 'react'
import './category.css'
import { categoryInfos } from "../asset/CategoryFullInfo";
import CategoryCard from '../ctegorycard/CategoryCard';
function Category() {
  return (
    <div className="category__container">
      {categoryInfos.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </div>
  );
}

export default Category
