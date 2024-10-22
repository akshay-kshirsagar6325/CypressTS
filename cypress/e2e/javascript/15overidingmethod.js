//In this we can modify the methods in different child classes
//we can recreate the method in child class which is there in parent class i.e. overriding
//method overriding is possible only with the inheritance



class bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends bank
{
    roi()
    {
        return 10.5;
    }
}

class Sbi extends bank
{
    roi()
    {
        return 12.5;
    }
}

const sbi=new Sbi();
console.log(sbi.roi());

const axis=new Axis();
console.log(axis.roi());