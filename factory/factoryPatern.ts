interface Product {
    operation(): string;
}

abstract class Creator {

    public abstract factoryMethod(): Product;

    public someOperation(): string{
        const product = this.factoryMethod()
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod() {
        return new ConcreteProduct1()
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod() {
        return new ConcreteProduct2()
    }
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreProduct1}'
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreProduct1}'
    }
}

function clientCode(creator: Creator){
    console.log('Client: I\'m not aware of ther creator\'s clasee, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());