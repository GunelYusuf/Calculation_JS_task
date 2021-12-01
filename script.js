class Calculation{
   constructor(num){
      this.num=num;
   }
    Plus(num){
    let result= this.num+=num;
       return this;
    }
    Minus(num){
      let result= this.num-=num;
       return this;
    }
    Multiply(num){
     let result =this.num*=num;
       return this;
    }
    Divide(num){
    let result=this.num/=num;
    return this;
    }
}   

const gun=new Calculation(100).Plus(8).Minus(26).Multiply(8).Divide(2);
console.log(gun);
console.log(`Result: ${gun.num}`);
