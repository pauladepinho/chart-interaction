$(document).ready(function () {
  // CREATE ALL POSSIBLE NEW ELEMENTS
  const $_BLUE_INPUT = $(
    "<input type='number' step='1' name='blue' class='blue' id='blue'>"
  );
  const $_PINK_INPUT = $(
    "<input type='number' step='1' name='pink' class='pink' id='pink'>"
  );
  const $_YELLOW_INPUT = $(
    "<input type='number' step='1' name='yellow' class='yellow' id='yellow'>"
  );
  const $_VIOLET_INPUT = $(
    "<input type='number' step='1' name='violet' class='violet' id='violet'>"
  );
  const $_ORANGE_INPUT = $(
    "<input type='number' step='1' name='orange' class='orange' id='orange'>"
  );
  const $_GREEN_INPUT = $(
    "<input type='number' step='1' name='green' class='green' id='green'>"
  );
  const $_BLUE_BAR = $("<div class='bar blue' id='blue-bar'><div>");
  const $_PINK_BAR = $("<div class='bar pink' id='pink-bar'><div>");
  const $_YELLOW_BAR = $("<div class='bar yellow' id='yellow-bar'><div>");
  const $_VIOLET_BAR = $("<div class='bar violet' id='violet-bar'><div>");
  const $_ORANGE_BAR = $("<div class='bar orange' id='orange-bar'><div>");
  const $_GREEN_BAR = $("<div class='bar green' id='green-bar'><div>");
  ////////////////////////////////
  let blueWidth, pinkWidth, yellowWidth, violetWidth, orangeWidth, greenWidth;
  let qntBar;
  let denominator;
  let scaleMax = 10;
  // CREATE FIRST BAR
  {
    // APPEND ELEMENTS
    $("#input-fields").append($_BLUE_INPUT);
    $("#container").append($_BLUE_BAR);
    // SET INPUT VALUE
    $("input").val(scaleMax.toFixed(1));
    // SET BAR WIDTH
    $(".bar").css("width", "100%");
  }
  // CHANGE QUANTITY OF BARS
  $("select").change(function () {
    qntBar = Number($(this).children("option:selected").val());
    // APPEND/REMOVE BARS AND INPUTS
    switch (qntBar) {
      case 1:
        // REMOVE EXTRA ELEMENTS ONLY
        $("#input-fields")
          .children()
          .filter(function (index) {
            return index >= qntBar;
          })
          .remove();
        $("#container")
          .children()
          .filter(function (index) {
            return index >= qntBar;
          })
          .remove();
        break;
      case 2:
        // REMOVE EXTRA ELEMENTS
        if ($(".bar").length > qntBar) {
          $("#input-fields")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
          $("#container")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
        }
        // APPEND NEW ELEMENTS
        else {
          $("#input-fields").append($_PINK_INPUT);
          $("#container").append($_PINK_BAR);
        }
        break;
      case 3:
        // REMOVE EXTRA ELEMENTS
        if ($(".bar").length > qntBar) {
          $("#input-fields")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
          $("#container")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
        }
        // APPEND NEW ELEMENTS
        else {
          $("#input-fields").append($_PINK_INPUT);
          $("#container").append($_PINK_BAR);
          $("#input-fields").append($_YELLOW_INPUT);
          $("#container").append($_YELLOW_BAR);
        }
        break;
      case 4:
        // REMOVE EXTRA ELEMENTS
        if ($(".bar").length > qntBar) {
          $("#input-fields")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
          $("#container")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
        }
        // APPEND NEW ELEMENTS
        else {
          $("#input-fields").append($_PINK_INPUT);
          $("#container").append($_PINK_BAR);
          $("#input-fields").append($_YELLOW_INPUT);
          $("#container").append($_YELLOW_BAR);
          $("#input-fields").append($_VIOLET_INPUT);
          $("#container").append($_VIOLET_BAR);
        }
        break;
      case 5:
        // REMOVE EXTRA ELEMENTS
        if ($(".bar").length > qntBar) {
          $("#input-fields")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
          $("#container")
            .children()
            .filter(function (index) {
              return index >= qntBar;
            })
            .remove();
        }
        // APPEND NEW ELEMENTS
        else {
          $("#input-fields").append($_PINK_INPUT);
          $("#container").append($_PINK_BAR);
          $("#input-fields").append($_YELLOW_INPUT);
          $("#container").append($_YELLOW_BAR);
          $("#input-fields").append($_VIOLET_INPUT);
          $("#container").append($_VIOLET_BAR);
          $("#input-fields").append($_ORANGE_INPUT);
          $("#container").append($_ORANGE_BAR);
        }
        break;
      case 6:
        // APPEND NEW ELEMENTS ONLY
        $("#input-fields").append($_PINK_INPUT);
        $("#container").append($_PINK_BAR);
        $("#input-fields").append($_YELLOW_INPUT);
        $("#container").append($_YELLOW_BAR);
        $("#input-fields").append($_VIOLET_INPUT);
        $("#container").append($_VIOLET_BAR);
        $("#input-fields").append($_ORANGE_INPUT);
        $("#container").append($_ORANGE_BAR);
        $("#input-fields").append($_GREEN_INPUT);
        $("#container").append($_GREEN_BAR);
        break;
      default:
        console.log("Not a valid option");
    }

    $("input").val((scaleMax / qntBar).toFixed(1));
    $(".bar").css("width", `${100 / qntBar}%`);
  });
  // CHANGE BARS WIDTHS WITH INPUT VALUE
  $(document).on("change", "input", function () {
    if ($(this).val() > 0) {
      console.log("changing...");
      // RESET FRACTION DENOMINATOR
      denominator = 0;
      $("input").each(function () {
        denominator += Number($(this).val());
      });
      // REDEFINE BARS WIDTHS
      blueWidth = Number($("input.blue").val()) / denominator;
      pinkWidth = Number($("input.pink").val()) / denominator;
      yellowWidth = Number($("input.yellow").val()) / denominator;
      violetWidth = Number($("input.violet").val()) / denominator;
      orangeWidth = Number($("input.orange").val()) / denominator;
      greenWidth = Number($("input.green").val()) / denominator;
      // MODIFY CSS WIDTHS
      $(".bar.blue").animate({ width: `${blueWidth * 100}%` }, 1500);
      $(".bar.pink").animate({ width: `${pinkWidth * 100}%` }, 1500);
      $(".bar.yellow").animate({ width: `${yellowWidth * 100}%` }, 1500);
      $(".bar.violet").animate({ width: `${violetWidth * 100}%` }, 1500);
      $(".bar.orange").animate({ width: `${orangeWidth * 100}%` }, 1500);
      $(".bar.green").animate({ width: `${greenWidth * 100}%` }, 1500);
    } else {
      $("#disclaimer").prepend("<p>Digite um número maior que zero!</p>");
      $("#disclaimer p").fadeOut(5000, function () {
        $(this).remove();
      });
    }
  });

  new ResizeSensor(jQuery(".bar"), function () {
    // console.log("content dimension changed");
    // console.log($(".bar").width());
    // $("input").val(barWidth);
  });
});
