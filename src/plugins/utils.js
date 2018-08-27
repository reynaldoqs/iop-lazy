
import Vue from 'vue'
import httpChecker from '@/utils/httpChecker';

Vue.prototype.$check = (data) => {
  return httpChecker.verify(data)
};
