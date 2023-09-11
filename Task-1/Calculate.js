var enter=document.getElementById("entered")
var results=document.getElementById("result-place")

function myButton(num){
    enter.value+=num
    answer()
}

function Del(){
      enter.value = enter.value.toString().slice(0,-1)
      answer()
}
function allClear(){
    enter.value=""
    results.value=""

}
function answer(){
    var answer = eval(enter.value)
    results.value=answer

}