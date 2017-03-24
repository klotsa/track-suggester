$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();
    var q6 = $("select#q6").val();

      $("#suggest").show();

    if (q2 === "no" && q4 === "no") {

      $("#java").show();
      $("#design").show();
      $("#rubyrails").show();

    } else if (q1 === "no" && q3 === "no") {
      $("#csharp").show();
      $("#drupal").show();
      $("#java").show();
    } else if (q1 === "no" && q5 === "no") {
      $("#java").show();
      $("#rubyrails").show();
      $("#csharp").show();
    } else if (q1 === "no" && q2 === "no" && q3 === "no" && q4 === "no"&& q5 === "no") {
      $("#rejection").show();
    } else {

      $("#rubyrails").show();

      $("#java").show();
      // $("#drupal").show();
    }

    event.preventDefault();
  });
});
