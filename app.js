$(document).ready(function () {
  $(".x").data("clicked", false);
  $(".o").data("clicked", false);
  $("button").click(function () {
    $(".x").data("clicked", false);
    $(".o").data("clicked", false);
    console.log($(".x").data("clicked"));
    console.log($(".o").data("clicked"));
  });

  $(".x").click(function () {
    $(".o").data("clicked", true);
    $(".r1-1").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r1-1x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r1-2").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r1-2x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r1-3").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r1-3x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r2-1").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r2-1x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r2-2").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r2-2x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r2-3").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r2-3x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r3-1").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r3-1x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r3-2").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r3-2x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
    $(".r3-3").click(function () {
      console.log($(".x").data("clicked"));
      if (
        $(".x").data("clicked") === undefined ||
        $(".x").data("clicked") === true
      ) {
        return;
      }
      $(".r3-3x").show(1000);
      checkX();
      $(".x").data("clicked", true);
    });
  });

  $(".o").click(function () {
    $(".x").data("clicked", true);
    $(".r1-1").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r1-1o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r1-2").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r1-2o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r1-3").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r1-3o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r2-1").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r2-1o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r2-2").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r2-2o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r2-3").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r2-3o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r3-1").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r3-1o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r3-2").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r3-2o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
    $(".r3-3").click(function () {
      console.log($(".o").data("clicked"));
      if (
        $(".o").data("clicked") === undefined ||
        $(".o").data("clicked") === true
      ) {
        return;
      }
      $(".r3-3o").show(1000);
      checkY();
      $(".o").data("clicked", true);
    });
  });

  function checkX() {
    if (
      $(".r1-1x").css("display") != "none" &&
      $(".r1-2x").css("display") != "none" &&
      $(".r1-3x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r2-1x").css("display") != "none" &&
      $(".r2-2x").css("display") != "none" &&
      $(".r2-3x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r3-1x").css("display") != "none" &&
      $(".r3-2x").css("display") != "none" &&
      $(".r3-3x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-1x").css("display") != "none" &&
      $(".r2-1x").css("display") != "none" &&
      $(".r3-1x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-2x").css("display") != "none" &&
      $(".r2-2x").css("display") != "none" &&
      $(".r3-2x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-3x").css("display") != "none" &&
      $(".r2-3x").css("display") != "none" &&
      $(".r3-3x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-1x").css("display") != "none" &&
      $(".r2-2x").css("display") != "none" &&
      $(".r3-3x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-3x").css("display") != "none" &&
      $(".r2-2x").css("display") != "none" &&
      $(".r3-1x").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
  }

  function checkY() {
    if (
      $(".r1-1o").css("display") != "none" &&
      $(".r1-2o").css("display") != "none" &&
      $(".r1-3o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r2-1o").css("display") != "none" &&
      $(".r2-2o").css("display") != "none" &&
      $(".r2-3o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r3-1o").css("display") != "none" &&
      $(".r3-2o").css("display") != "none" &&
      $(".r3-3o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-1o").css("display") != "none" &&
      $(".r2-1o").css("display") != "none" &&
      $(".r3-1o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-2o").css("display") != "none" &&
      $(".r2-2o").css("display") != "none" &&
      $(".r3-2o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-3o").css("display") != "none" &&
      $(".r2-3o").css("display") != "none" &&
      $(".r3-3o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-1o").css("display") != "none" &&
      $(".r2-2o").css("display") != "none" &&
      $(".r3-3o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
    if (
      $(".r1-3o").css("display") != "none" &&
      $(".r2-2o").css("display") != "none" &&
      $(".r3-1o").css("display") != "none"
    ) {
      $("h2").show(2000);
      $("h1").hide(1000);
      $(".chosse").hide(1000);
    }
  }
});
