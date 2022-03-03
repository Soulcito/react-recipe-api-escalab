import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AnyFoodDishes from './AnyFoodDishes';
import PredefinedFoodDishes from './PredefinedFoodDishes';
import FoodDishes from './FoodDishes';
import { getApiUrl } from './../constants/index';

const SearchFoodDishes = () => {
 
  const [hits, setHits] = useState();

  const getData =  query => {
    query && fetch(getApiUrl(query))
                  .then( data => data.json())
                  .then( res => setHits(res.hits))
                  .catch( err => console.error(err));
  }

  return (
    <>
      <div className='root'>
         <Grid container spacing={ 3 } justifyContent='center'>
           <AnyFoodDishes getData={ getData }/>
           <PredefinedFoodDishes getData={ getData } setHits = { setHits }/>
         </Grid>
      </div>
      {
        hits && <FoodDishes hits={ hits } />
      }
    </>
  )
}

export default SearchFoodDishes