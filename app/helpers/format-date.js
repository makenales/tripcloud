import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  let t = params * 1000;
  return new Date(t).toDateString();
}

export default Ember.Helper.helper(formatDate);
