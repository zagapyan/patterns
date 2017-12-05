const Foo = (function () {
    let instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance;
        }
        instance = this;
        //Singleton initialization code
    }
    //instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

const Meow = Foo;
const MeowInstance = Meow.getInstance();

console.log(MeowInstance);
const MewTwo = Foo;