//super keyword is used to invoke the parent class constructor

class Animal
{
    constructor(color)
    {
        this.color=color;
    }

    printColor()
    {
        console.log(this.color);
    }
}

class dog extends Animal
{
    constructor(color,food)
    {
        super(color);                   //super keyword is used to invoke the parent class constructor

        this.food=food;
    }

    eating()
    {
        console.log("Eating:"+this.food);
    }

    display()
    {
        this.printColor();
        this.eating();
    }

}

const dogobj=new dog("Blue","Bread");
dogobj.display();