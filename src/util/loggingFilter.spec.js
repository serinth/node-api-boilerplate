import {expect} from 'chai';
import loggingFilter from '../util/loggingFilter';

describe('loggingFilter', () => {
  it('should not log /health', () => {
    const request = {url: '/health'};
    const isRouteFiltered = loggingFilter.routeFilter(request, {});

    expect(isRouteFiltered).to.be.true;
  });

  it('should log /sms', () => {
    const request = {url: '/sms'};
    const isRouteFiltered = loggingFilter.routeFilter(request, {});

    expect(isRouteFiltered).to.be.false;
  });

  describe('objectMaskFilter for mobileNumber', () => {
    const forwardResponse = {
      'body': {
        'customers': [
          {
            'countryCode': '+61',
            'mobileNumber': '447804314',
            'boardingPassLink': 'https://qantas.com.au/shortener/TOKEN'
          },
          {
            'countryCode': '+61',
            'mobileNumber': '911',
            'boardingPassLink': 'https://qantas.com.au/shortener/TOKEN2'
          }
        ]
      }
    };

    it('should mask the mobileNumber in the body', () => {
      const filteredRequest = loggingFilter.objectMaskFilter(forwardResponse, 'body');
      filteredRequest.customers.forEach(customer => {
        expect(customer.mobileNumber).to.equal('****');
      });
    });
  });
});
