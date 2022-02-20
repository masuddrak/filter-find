class Suport{
    name;
    address='Dhaka';
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    suportSetion(){
        console.log(this.name,'this is a suppor')
    }
}
const amir=new Suport('sakibr khan','malaysia');
const mosarof=new Suport('Mosarof khan','Dinajpur');
console.log(amir,mosarof)
amir.suportSetion()
mosarof.suportSetion()
// console.log(amir)