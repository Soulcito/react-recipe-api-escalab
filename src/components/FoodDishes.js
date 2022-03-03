import React from 'react';
import { Grid } from '@material-ui/core';
import FoodDish from './FoodDish';
import NoResult from './NoResult';


const FoodDishes = ({hits}) => (
  <>
    {
      hits.length 
      ? 
       <div className='root'>
         <Grid container spacing={ 3 } justifyContent='center'>
           {
             hits.map( hit => {
               const { uri, label, image, calories, ingredients } = hit.recipe;
               return (
                 <FoodDish 
                    key = {uri}
                    label = { label }
                    image = { image }
                    calories = { calories }
                    ingredients = { ingredients }
                 />
               )
             })
           }
         </Grid>
       </div>
      :
       <NoResult/>
    }
  </>
)

export default FoodDishes