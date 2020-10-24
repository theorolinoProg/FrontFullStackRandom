import { all } from 'redux-saga/effects';

const sagas = function* saga(): Generator<unknown, any, unknown> {
  yield all([]);
};

export default sagas;
