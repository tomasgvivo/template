
module.exports = {

  sayHello() {
    return this.sayHelloTo('World');
  },

  sayHelloTo(subject) {
    return `Hello ${subject}!`;
  },

};
