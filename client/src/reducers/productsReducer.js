import _ from 'lodash';
import { FETCH_PRODUCTS } from '../actions';

export default function (state = {}, action){
  if (action.error){
    console.log(action);
    return (action.error);
  }
  switch (action.type){
    case FETCH_PRODUCTS:
      console.log(action.payload);
      return _.mapKeys(action.payload.data.products, '_id');
    default:
          return state;
      }
    
  }

