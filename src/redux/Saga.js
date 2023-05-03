import {takeEvery, put} from 'redux-saga/effects';

import axios from 'axios';

function* getProducts() {
  // console.log("for getting ")
  try {
    // console.log(1)
    let data = yield axios.get('http://fakestoreapi.com/products');
    // console.log("console 2")
    // data = yield data;
    // console.log("console 33",data.data)
    // yield put(SET_PRODUCT_LIST, data)
    yield put({type: SET_PRODUCT_LIST, data: data});
    // console.log("main block for data saga",yield put({ type: SET_PRODUCT_LIST, data: data }))
  } catch (e) {
    console.log('Failed Api call', e);
    console.warn('error of saga');
  }
}

// function* getProducts() {
//   try{
//   let data = yield fetch('https://fakestoreapi.com/products');
//   data = yield data.json();
//   yield put({ type: SET_PRODUCT_LIST, data: data })
//   console.log("mainnnnn block for data saga",yield put({ type: SET_PRODUCT_LIST, data: data }))
//   }catch(e){
//     console.log("failed api", e)
//   }

// }

// function* searchProducts(data) {
//   let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
//   result = yield result.json();
//   console.warn("action is called", result)
//   yield put({type: SET_PRODUCT_LIST, data:result})
// }

function* saga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
