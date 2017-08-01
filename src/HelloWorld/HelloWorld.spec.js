
const HelloWorld = require('./HelloWorld');

describe('Hello world', () => {
  it('says hello', () => {
    expect(HelloWorld.sayHello()).toEqual('Hello World!');
  });

  it('says hello to Tomás', () => {
    expect(HelloWorld.sayHelloTo('Tomás')).toEqual('Hello Tomás!');
  });
});
