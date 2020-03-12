export default (a, b) => class A {
  constructor(c) {
    this.c = c;
  }

  foo() {
    console.log('Ey:', a, b, this.c);
  }
};
