//ボタンを押すごとに画面が切り替わる関数
$(function () {

  $(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
  });


//選択ボタンデータを配列に入れてカウントする関数
var countA, countB, countC, countD, countE, countF, countG, countH, countI;
var box =[];
$(".btn").each(function(){
$(this).on('click',function(){
  var value = $(this).data("value");
   box.push(value);

  countA = box.filter(function(x){
                  return x === "a"
              }).length;
  countB = box.filter(function(x){
                  return x === "b"
              }).length;
  countC = box.filter(function(x){
                  return x === "c"
              }).length;
  countD = box.filter(function(x){
                  return x === "d"
              }).length;
  countE = box.filter(function(x){
                  return x === "e"
              }).length;
  countF = box.filter(function(x){
                  return x === "f"
              }).length;
  countG = box.filter(function(x){
                  return x === "g"
              }).length;
  countH = box.filter(function(x){
                  return x === "h"
              }).length;
  countI = box.filter(function(x){
                  return x === "i"
              }).length;

});
});


//結果を出力する関数
$(".end").on("click", function() {
  var counts = [{name: 'A', value: countA}, {name: 'B', value: countB}, {name: 'C', value: countC}, {name: 'D', value: countD}, {name: 'E', value: countE}, {name: 'F', value: countF}, {name: 'G', value: countG}, {name: 'H', value: countH}, {name: 'I', value: countI}];
  var maxCount = Math.max(...counts.map(c => c.value));

  var totalCount = 0;
  for (var i = 0; i < counts.length; i++) {
      totalCount += counts[i].value;
  }

  if (totalCount === 0) {
     $('#answer_0').css("display","");
     $('#questionimage').css("display","none");
     $('#resultimage').css("display","none");
     $('#omakeimage').css("display","");
  } else {
    counts.forEach(function(count) {
      if(count.value === maxCount) {
        $('#answer_0' + (count.name.charCodeAt(0) - 'A'.charCodeAt(0) + 1)).css("display","");
        $('#questionimage').css("display","none");
        $('#resultimage').css("display","");
        $('#omakeimage').css("display","none");
      }
    });
  }
});

});