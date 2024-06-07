const PayOS = require("@payos/node");

const keys = require('../config/keys');

const { clientId, apiKey, checksumKey } = keys.payos;

class PayosService {
  init() {
    try {
      return new PayOS(clientId, apiKey, checksumKey);
    } catch (error) {
      console.warn('Missing payos keys');
    }
  }
}

const payos = new PayosService().init();

module.exports = payos;