$(document).ready(function() {
  $("div.btn-group.spec button.btn.spec").click(function() {
    $("div.btn-group.spec")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
    var id_spec = this.id;
    console.log(id_spec);
    if (id_spec == "intrsz-btn") {
      $("#intrsz").addClass("show");
      $("#alkf").removeClass("show");
      $("#rendszm").removeClass("show");
    }
    if (id_spec == "rendszm-btn") {
      $("#intrsz").removeClass("show");
      $("#alkf").removeClass("show");
      $("#rendszm").addClass("show");
    }
    if (id_spec == "alkf-btn") {
      $("#intrsz").removeClass("show");
      $("#alkf").addClass("show");
      $("#rendszm").removeClass("show");
    }
  });

  $("div.btn-group.semester button.btn.semester").click(function() {
    $("div.btn-group.semester")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
    var id_sem = this.id;
    console.log(id_sem);
    if (id_sem == "all-btn") {
      $(".1").addClass("show1");
      $(".2").addClass("show1");
      $(".3").addClass("show1");
      $(".4").addClass("show1");
      $(".5").addClass("show1");
      $(".6").addClass("show1");
      $(".7").addClass("show1");
    }
    if (id_sem == "1-btn") {
      $(".1").addClass("show1");
      $(".2").removeClass("show1");
      $(".3").removeClass("show1");
      $(".4").removeClass("show1");
      $(".5").removeClass("show1");
      $(".6").removeClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "2-btn") {
      $(".1").removeClass("show1");
      $(".2").addClass("show1");
      $(".3").removeClass("show1");
      $(".4").removeClass("show1");
      $(".5").removeClass("show1");
      $(".6").removeClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "3-btn") {
      $(".1").removeClass("show1");
      $(".2").removeClass("show1");
      $(".3").addClass("show1");
      $(".4").removeClass("show1");
      $(".5").removeClass("show1");
      $(".6").removeClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "4-btn") {
      $(".1").removeClass("show1");
      $(".2").removeClass("show1");
      $(".3").removeClass("show1");
      $(".4").addClass("show1");
      $(".5").removeClass("show1");
      $(".6").removeClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "5-btn") {
      $(".1").removeClass("show1");
      $(".2").removeClass("show1");
      $(".3").removeClass("show1");
      $(".4").removeClass("show1");
      $(".5").addClass("show1");
      $(".6").removeClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "6-btn") {
      $(".1").removeClass("show1");
      $(".2").removeClass("show1");
      $(".3").removeClass("show1");
      $(".4").removeClass("show1");
      $(".5").removeClass("show1");
      $(".6").addClass("show1");
      $(".7").removeClass("show1");
    }
    if (id_sem == "7-btn") {
      $(".1").removeClass("show1");
      $(".2").removeClass("show1");
      $(".3").removeClass("show1");
      $(".4").removeClass("show1");
      $(".5").removeClass("show1");
      $(".6").removeClass("show1");
      $(".7").addClass("show1");
    }
  });
});
