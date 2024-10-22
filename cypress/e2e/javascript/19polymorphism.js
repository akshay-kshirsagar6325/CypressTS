//Poly=many
//Morph=forms
//Polymorphism=Many forms
//Polymorphism is the ability to create a variable, a function, or an object that has more than one form
//so in the below example we have draw() method in 3 different forms
//or we can say, we are overriding the same method in different form in different classes


class shape
{
    draw()
    {
        return "Generic shape";
    }
}

class square extends shape
{
    draw()
    {
        return "square shape";
    }
}
class circle extends shape
{
    draw()
    {
        return "circle shape"
    }
}

let s=new shape();
console.log(s.draw());

s=new square();
console.log(s.draw());

s=new circle();
console.log(s.draw());
