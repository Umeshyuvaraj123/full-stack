function grade(marks){
   if(marks>=90){
      return "grade=S";
   }
      else if(marks>=80){
         return "grade=A";
        }else if(marks>=70){
            return "grade=B";
        }else if(marks>=60){
             return "grade=c";
        }else if(marks>=50){
             return "grade=d";
        }else{
            return "fail"
        }
    
}

console.log(grade(100));

let b = 30;
