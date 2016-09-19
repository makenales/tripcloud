import Ember from 'ember';

function convertCurrency(value) {
  value = value.toString().replace("$", "");
  value = value.replace(/,/g , "");
  return parseInt(value);
}

export default Ember.Helper.helper('convertCurrency',function (value, options) {
  return convertCurrency(value);
});
