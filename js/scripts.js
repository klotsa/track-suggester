$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var q1 = $("select#q1").val();

    if (q1 === "no" || q2 === "no") {
      $("#design").show();
      $("#rubyrails").show();
      $("#java").show();
    } else {
      $("#rejection").show();
    }
    // var l1 = parseFloat($("input#firstside").val());
    // var l2 = parseFloat($("input#secondside").val());
    // var l3 = parseFloat($("input#thirdside").val());
    // // debugger;
    // if ( l1 + l2 <= l3 ||  l2 + l3 <=l1 || l3 + l1 <= l2 ) {
    //   // alert("if 1 work");
    //     $("#notTriangle").show();
    // } else if ( l1 === l2 && l2 === l1 && l3 === l1 ){
    //   // alert("if 2 work");
    //     $("#equilateral").show();
    // } else if (l1 != l2 && l2 != l3) {
    //   // alert("if 3 work");
    //     $("#scalene").show();
    // } else {
    //     $("#isosceles").show();
    // }
    event.preventDefault();
  });
});
