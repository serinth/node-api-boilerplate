import {has, set} from 'lodash';
import config from '../config';
const loggingFilter = {

  objectMaskFilter(req, propName) {
    applyRequestFilter(req[propName]);

    if (req[propName].customers) {
      req[propName].customers.map(customer => {
        applyRequestFilter(customer);
      });
    }

    return req[propName];
  },

  routeFilter(req, res) {
    const filterList = [/(.*?)test(\?.*)?$/, /^\/health(\?.*)?$/];
    const matches = filterList.filter(filter => filter.test(req.url));
    return !!(matches.length && res);
  }
};

function applyRequestFilter(obj) {
  config.common.reporting.maskedRequestFields.forEach(filter => {
    if (has(obj, filter)) {
      set(obj, filter, '****');
    }
  });
}

export default loggingFilter;
