/* eslint-disable */
global.chai = require('chai');
global.expect = global.chai.expect;

<% if (inclSinon) { %>
global.sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
<% } %>
