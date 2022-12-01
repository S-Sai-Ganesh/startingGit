class Student {
    static count=0;
     constructor(name,age,phn,marks){
      this.name=name;
      this.age=age;
      this.phn=phn;
      this.marks=marks;
        Student.count++;
     }
    
     clgEligibility(){
      if(this.marks>40){
       console.log('elgible for college');
      }
      else console.log('not elgible');
     }
     
     eligible(mark){
       return (A)=>{
         return this.marks>mark && this.age>A;
       }
     }
}
    
var arr=[
    user1 = new Student('name',21,987,99),
    user2 = new Student('po',22,121,50),
    user3 = new Student('fa',23,121,40),
    user4 = new Student('di',28,121,25),
    user5 = new Student('ce',27,121,79)
]

for (var i = 0; i < arr.length; i++) {
    if(arr[i].eligible(45)(20)) {
    console.log(arr[i].name);
    }
}