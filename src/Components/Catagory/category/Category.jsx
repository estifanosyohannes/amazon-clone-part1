import React from "react";
import classes from './category.module.css'
import { categoryInfos } from "../asset/CategoryFullInfo";
import CategoryCard from "../ctegorycard/CategoryCard";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </section>
  );
}

export default Category;
