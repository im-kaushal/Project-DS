import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchProductsSuccess, fetchProductsFailure} from '../actions/products';
import {FETCH_PRODUCTS_REQUEST} from '../constants/products';
import {getProducts} from '../api/products';

function* fetchProducts() {
  try {
    const response = yield call(getProducts);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productsSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default productsSaga;
