$(".hero_header").each(function (i) {
  $(this).css({
    "animation-delay": i * 1.5 + "s",
  });
});
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(
              Math.floor(this.countNum).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            );
          },
          complete: function () {
            $this.text(
              this.countNum.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            );
          },
        }
      );
    });
    a = 1;
  }
});
