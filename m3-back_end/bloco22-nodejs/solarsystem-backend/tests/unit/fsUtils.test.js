const { expect } = require('chai');

const { readMissionsData } = require('../../src/utils/fsUtils');

describe('readMissionsData function', function () {
  it('returns an array', async function () {
    const missions = await readMissionsData();

    expect(missions).to.be.instanceOf(Array);
  });
});