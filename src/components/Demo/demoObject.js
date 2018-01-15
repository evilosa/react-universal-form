// @flow
import { fromJS } from 'immutable';

export const demoObject = fromJS({
  title: 'Title',
  fullName: 'Full name',
  number: 1,
  client: { id: 1, title: 'Client 1' },
  orders:
    [
      { rowNumber: 1, product: 'Food 1', count: 1, price: 10, sum: 10 },
      { rowNumber: 2, product: 'Food 2', count: 3, price: 10, sum: 30 },
      { rowNumber: 3, product: 'Food 3', count: 2, price: 10, sum: 20 },
    ],
  user: 'Graham Davis',
  comment: 'Comment for current order',
});