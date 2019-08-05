import React from 'react';
import Burger from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
   .map((ingregientKey) => {
     return [...Array(props.ingredients[ingregientKey])].map((_, index) => {
       return <Burger key={ingregientKey + index} type={ingregientKey} />
     });
  })
  .reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <Burger type='bread-top' />
      {transformedIngredients}
      <Burger type='bread-bottom' />
    </div>
  );
}

export default burger;
