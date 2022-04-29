const BigNumber = web3.BigNumber;
const ERC20 = artifacts.require('TestERC20');
const QuasarFactory = artifacts.require('QuasarFactory');
const MathTest = artifacts.require('MathTest');
const { expectEvent } = require('@openzeppelin/test-helpers');
const { BigNumber: BN } = require('bignumber.js');

require('chai').use(require('chai-as-promised')).use(require('chai-bignumber')(BigNumber)).should();

contract('Core', ([account1, account2, account3]) => {
  let token1;
  let token2;
  let factory;
  let math;

  before(async () => {
    token1 = await ERC20.new(web3.utils.toWei('300000000'));
    token2 = await ERC20.new(web3.utils.toWei('300000000'));
    factory = await QuasarFactory.new();
    math = await MathTest.new();
  });

  it('should calculate square root', async () => {
    const root = await math.squareRoot(9);
    assert.isTrue(new BN(root).isEqualTo(new BN(3)));
  });

  it('should create pair', async () => {
    expectEvent(await factory.createPair(token1.address, token2.address), 'PairCreated');
  });

  it('should send tokens to newly created pair', async () => {
    const pair = await factory.allPairs(0);
    await token1.transfer(pair, web3.utils.toWei('100000000'));
    await token2.transfer(pair, web3.utils.toWei('100000000'));
    const balance1 = await token1.balanceOf(pair);
    const balance2 = await token2.balanceOf(pair);
    balance1.toString().should.be.bignumber.equal(web3.utils.toWei('100000000'));
    balance2.toString().should.be.bignumber.equal(web3.utils.toWei('100000000'));
  });
});
