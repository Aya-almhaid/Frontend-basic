
/*function checkvalue(){
let checkvalue1=document.getElementById('#checkvalue1');
let checkvalue2=document.getElementById('#checkvalue2');
let btn =document.getElementById('#addBtn');
let  result=document.getElementById('#result');
}*/


function addition(){
    
var checkvalue1=document.getElementById('checkvalue1');
var checkvalue2=document.getElementById('checkvalue2');
var result=document.getElementById('result1');

  // Convert input values to numbers
  var num1 = parseInt(checkvalue1.value);
  var num2 = parseInt(checkvalue2.value);
  var result = num1 + num2;

    document.getElementById('result1').innerHTML=result;

}
//---------------------
function sub(){
var checkvalue11=document.getElementById('checkvalue11');
var checkvalue22=document.getElementById('checkvalue22');
var result11=document.getElementById('result11');

  // Convert input values to numbers
  var num11 = parseInt(checkvalue11.value);
  var num22 = parseInt(checkvalue22.value);
  var result11 = num11 -num22;

    document.getElementById('result11').innerHTML=result11;

}
//-----------------------
function mult(){
var checkvalue111=document.getElementById('checkvalue111');
var checkvalue222=document.getElementById('checkvalue222');
var result111=document.getElementById('result111');


  // Convert input values to numbers
  var num1 = parseInt(checkvalue111.value);
  var num2 = parseInt(checkvalue222.value);
  var result = num1 * num2;

    document.getElementById('result111').innerHTML=result;

}










//addition();

//since the value is entered as a string n0t as a number  ,we need to use === to
//compare datatype with a value so it returns the value is  not 5 we shold do
//parsing using parseint so we willbe  sure that townvalues are int


