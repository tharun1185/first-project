            // for (var j = 1; j <= 100; j++) {

            //     var notPrime = false;
            //     var list1=[];
            //     for (var i = 2; i <= j; i++)
            //      {
            //         if (j%i===0 && i!==j)
            //             {
            //             notPrime = true;
            //              }
               
            //       }

            //         if (notPrime === false) 
            //              {
                            
            //          console.log(j); 
            //          list1.push(j);
            //              }
            // }
            
            
            
            
//             var list=[];
// function primenum(n){
//     for(i=1;i<=n;i++){
        
//         var notprime = false;
//            for(j=2;j<=i;j++){
//                if(i%j===0 && j!=i){
//                    notprime = true;
//                }
//            }
//            if(notprime===false){
//             list.push(i);
//             //    console.log(i);
         
//            }
//     }
//     return list;
// }

// // var n=50;

// res= primenum(100);
// console.log(res);

































// function even(a){
//     var list=[]
//     for(i=1;i<a;i++){
//         if(i%2==0){
//             list.push(i)
//         }
//     }
//     return list
// }

// result = even(1000)
// console.log(result);

// var numbers  = [10,20,30,40]
// // numbers.push(50)
// var len = numbers.length
// console.log(numbers[len-1])

// function capnam(g)
// {
//     var i=g[0].toUpperCase()+g.slice(1)
//     return i;
// }
// res=capnam("druva benz")
// console.log(res);

//             function upp(b)
//             {
//                 x = b.length
//                 var i=b.slice(x-3,x)//start end(0,4) bunny
//                 var j=i.toUpperCase();
//                 var k= b.slice(0,-3)
//                 return k+j;
//             } 

//             res=upp("miracle")
//             console.log(res)

//     function awesomeFunction(){
//         var a = 2;
    
//         var multiplyBy2 = function(){
//         console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//         }
//     }
//     console.log(multiplyBy2); // Throws reference error since a is written in local scope and cannot be accessed outside
    
//     //   multiplyBy2();




//                         function divideByHalf(sum){
//                             console.log((sum / 2));
//                         }
                        
//                         function multiplyBy2(sum){
//                             console.log(sum * 2);
//                         }
                        
//                         function K1(num1,num2,operation){
//                             var sum = num1 + num2;
//                             operation(sum);
//                         }
                        
//                         K1(3, 7, divideByHalf); // Outputs 3
                        
//                         K1(5, 5, multiplyBy2);


// function add(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return number + add(number - 1);
//   }
// }

// res=add(5);
// console.log(res);
// // 3 + add(2)
// // 3 + 2 + add(1)
// // 3 + 2 + 1 + add(0)
// // 3 + 2 + 1 + 0 = 6  

// var str1="benz";
// var str2=str1.split("");
// var str3=str2.reverse();
// var str4=str3.join("");
// console.log(str4);

//                     var array1=[5,8,9,66,2,54];
//                     var min=array1[0];
//                     for(i=0;i<array1.length;i++){
//                         if(array1[i]<min){
//                         min=array1[i]
//                         }
//                     }
//                     console.log(min);

//   function sum(array){
//       var sum=0;
//       for(num of array){
//           sum+=num
//       }
//       return sum;
//   }   console.log(sum([10,20,30,40]));               
     


// function sli(x,y)//x is num where num i array
// {
    
//     var i=x.slice(y,-y)
//     return i;
// }
// num = [10,20,3,41,51,52,55,5,60]
// res=sli(num,3)
// console.log(res);



//             function last(x,b)
//             {
//                 var y=x.slice(0,-b)
//                 return y;
//             }
//             res=last("benz from miracle",6)
//             res1=last("sailendra and tarun are friends",10)
//             console.log(res)
//             console.log(res1)


// function sli(a,b)
// {   
    
//     x = a.slice(0,b)+","+a.slice(-b)

//     return (x);
// }
// num=[11,21,54,65,85,78,10,2,1,32,65,98,75,2,1,4,5,82,65,45,88,55]
// res=sli(num,2)
// console.log(res);


//         var points = [40, 100, 1, 5, 25, 10];
//        res= points.sort(function(a, b)
//                        { 
//                            return a-b 
//                         } );
//                         res1=res.length
//        console.log(res1);




    // for(var i = 1; i <= 10; i++)
    // {
    //     printTable(i);
    //     console.log("");
    // }
    
            //     function printTable(t)
            //     {  
            //         for(var n=1;n<=10;n++){
            //         for(var i = 1; i <= t; i++)
            //         {
            //             var row = n + " * " + i + " = " + n * i;
            //             console.log(row);
                    
            //         } console.log("")
            //     }
            // }
            //     printTable(8);






//     function makeAdder(x) {
//         return function(y) {
//           return x + y;
//         };
//       }
      
//       var add5 = makeAdder(5);
//     //   var add10 = makeAdder(10);
      
//       console.log(add5(2));  
//     //   console.log(add10(2));


// function level1(){
//     var x=10;
//     console.log(x)
    
//     return function level2(){
//         var y =20;
//         console.log(x)
//         console.log(y)
//        return function level3(){
//             var z= 30;
//             console.log(x)
//             console.log(y)
//             console.log(z)
//         }
//     }
// }
// level1()()()
// x=level1()
// // x()
// y=x()
// y()



//                         for(n=1;n<=10;n++){
//                             for(i=1;i<=10;i++){
//                                 var tab1= (`${n} * ${i} = ${n*i}`);
//                                 console.log(tab1)
//                             }console.log("");
//                         }

 
//                         for(i=0;i<=100;i+=2){
//                             console.log(i)
//                         }



//     function findFibonacci(n)
//     {
//         if (n == 0)
//             return 0;

//         if (n == 1)
//             return 1;
//         for(i = 0;i<=100;i++){
//         return findFibonacci(n - 1) + findFibonacci(n - 2);}
//     }

//     var n = findFibonacci(15);
//     console.log(n);


// function nums(j) {
    
 
//     var nums=prompt('enter5 nember')
//     let n1=0,n2=1, nextnum;
//     for(i=1;i<=j;i++){
//         document.write(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//         document.write(",")

//     }
// }nums(prompt("enter number"))



//     function getpos(n){
    
//         return n.filter(el => el>=0);
//         }      
        
//     var n=[10,-1,-2,-99,-89,-6,88,99,25,65,54];
//     res=getpos(n);
//     console.log(res);


//                             function getPositives(ar)
//                             {
//                                 var ar2 = [];

//                                 for(var el of ar)
//                                 {
//                                     if (el >= 0)
//                                     {
//                                         ar2.push(el);
//                                     }
//                                 }

//                                 return ar2;
//                             }

//                             var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//                             var ar2 = getPositives(ar);


// var sum1 = 0;

// for(var i = 11; i <= 30; i += 2)
// {
//     sum1 += i;
// }
// console.log(sum1);
 
// function fact(n){
    
//     var prod = 1;

//     for(var i = 1; i <= n; i++)
//     {
       
//        prod *= i;
      
//      }
//    return prod;

// }
// // var n=5;
// res=fact(5);
// console.log(res);


