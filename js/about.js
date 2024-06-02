(function () {
  $(".flex-container-mission").waitForImages(
    function () {
      $(".spinner-mission").fadeOut();
    },
    $.noop,
    true
  );

  $(".flex-slide-mission").each(function () {
    $(this).hover(
      function () {
        $(this).find(".flex-title-mission").css({
          transform: "rotate(0deg)",
          top: "10%",
        });
        $(this).find(".flex-about-mission").css({
          opacity: "1",
        });
      },
      function () {
        $(this).find(".flex-title-mission").css({
          transform: "rotate(90deg)",
          top: "15%",
        });
        $(this).find(".flex-about-mission").css({
          opacity: "0",
        });
      }
    );
  });
})();
