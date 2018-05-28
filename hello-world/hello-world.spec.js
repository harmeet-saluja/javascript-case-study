var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('should says hello world', function () {
  	const expected = 'Hello, World!';
    expect(helloWorld.hello()).toEqual(expected);
  });

  it('says length of hello() is 13', function () {
  	const expected = 13;
    expect(helloWorld.hello().length).toEqual(expected);
  });
});
