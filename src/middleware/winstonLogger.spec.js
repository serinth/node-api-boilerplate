import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import expressWinston from 'express-winston';

chai.use(sinonChai);

const nextStub = sinon.spy();
const proxyquire = require('proxyquire');
const winstonMock = sinon.mock(expressWinston);

const middleware = proxyquire('../middleware/winstonLogger', {
  'express-winston': {default: winstonMock}
});

describe('winstonLogger Middleware', () => {
  it('express-winston should call logger method once', () => {
    middleware.default({}, {}, nextStub);
    winstonMock.expects('logger').once();
  });

  it('should call the next middleware', () => {
    middleware.default({}, {}, nextStub);
    expect(nextStub).to.have.been.called;
  });
});

