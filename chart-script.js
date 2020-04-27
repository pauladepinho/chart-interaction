$(document).ready(function () {
  // CREATE ALL POSSIBLE NEW ELEMENTS
  let blueInput, pinkInput, yellowInput, violetInput, orangeInput, greenInput;
  let blueBar, pinkBar, yellowBar, violetBar, orangeBar, greenBar;
  let blueWidth, pinkWidth, yellowWidth, violetWidth, orangeWidth, greenWidth;
  {
    blueInput = $("<label class='blue' for='blue'>Width:</label>'").append(
      "<input type='number' step='10' name='blue' class='blue' id='blue'>"
    );
    blueBar = $("<div class='bar blue' id='blue-bar'><div>");
    pinkInput = $("<label class='pink' for='pink'>Width:</label>'").append(
      "<input type='number' step='10' name='pink' class='pink' id='pink'>"
    );
    pinkBar = $("<div class='bar pink' id='pink-bar'><div>");
    yellowInput = $(
      "<label class='yellow' for='yellow'>Width:</label>'"
    ).append(
      "<input type='number' step='10' name='yellow' class='yellow' id='yellow'>"
    );
    yellowBar = $("<div class='bar yellow' id='yellow-bar'><div>");
    violetInput = $(
      "<label class='violet' for='violet'>Width:</label>'"
    ).append(
      "<input type='number' step='10' name='violet' class='violet' id='violet'>"
    );
    violetBar = $("<div class='bar violet' id='violet-bar'><div>");
    orangeInput = $(
      "<label class='orange' for='orange'>Width:</label>'"
    ).append(
      "<input type='number' step='10' name='orange' class='orange' id='orange'>"
    );
    orangeBar = $("<div class='bar orange' id='orange-bar'><div>");
    greenInput = $("<label class='green' for='green'>Width:</label>'").append(
      "<input type='number' step='10' name='green' class='green' id='green'>"
    );
    greenBar = $("<div class='bar green' id='green-bar'><div>");
  }
  // APPEND BLUE BAR
  let qntBar, barWidth;
  {
    $("#input-fields").append(blueInput);
    $("#container").append(blueBar);
    // SET INITIAL WIDTH
    qntBar = $(".bar").length;
    barWidth = 100 / qntBar;
    $(".bar").css("width", `${barWidth}%`);
    // PLACE WIDTH INTO INPUT FIELD
    $("input").val(barWidth);
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
          $("#input-fields").append(pinkInput);
          $("#container").append(pinkBar);
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
          $("#input-fields").append(pinkInput);
          $("#container").append(pinkBar);
          $("#input-fields").append(yellowInput);
          $("#container").append(yellowBar);
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
          $("#input-fields").append(pinkInput);
          $("#container").append(pinkBar);
          $("#input-fields").append(yellowInput);
          $("#container").append(yellowBar);
          $("#input-fields").append(violetInput);
          $("#container").append(violetBar);
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
          $("#input-fields").append(pinkInput);
          $("#container").append(pinkBar);
          $("#input-fields").append(yellowInput);
          $("#container").append(yellowBar);
          $("#input-fields").append(violetInput);
          $("#container").append(violetBar);
          $("#input-fields").append(orangeInput);
          $("#container").append(orangeBar);
        }
        break;
      case 6:
        // APPEND NEW ELEMENTS ONLY
        $("#input-fields").append(pinkInput);
        $("#container").append(pinkBar);
        $("#input-fields").append(yellowInput);
        $("#container").append(yellowBar);
        $("#input-fields").append(violetInput);
        $("#container").append(violetBar);
        $("#input-fields").append(orangeInput);
        $("#container").append(orangeBar);
        $("#input-fields").append(greenInput);
        $("#container").append(greenBar);
        break;
      default:
        console.log("Not a valid option");
    }

    barWidth = 100 / qntBar;
    $(".bar").css("width", `${barWidth}%`);
    $("input").val(Math.round(barWidth));
    blueWidth = pinkWidth = yellowWidth = violetWidth = orangeWidth = greenWidth = barWidth;
  });

  // CHANGE BARS WIDTHS WITH INPUT VALUE
  $(document).on("change", "input", function () {
    let delta;
    let targetClass = $(this).attr("class");
    let newWidth = Number($(this).val());
    let validWidth = newWidth > 0 && newWidth < 100;
    if (qntBar > 1 && validWidth) {
      console.log("changing...");
      switch (targetClass) {
        case "blue":
          console.log("I'm blue");
          delta = newWidth - blueWidth;
          // REDEFINE BARS WIDTHS
          blueWidth = newWidth;
          pinkWidth = pinkWidth - delta / (qntBar - 1);
          yellowWidth = yellowWidth - delta / (qntBar - 1);
          violetWidth = violetWidth - delta / (qntBar - 1);
          orangeWidth = orangeWidth - delta / (qntBar - 1);
          greenWidth = greenWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.pink").val(Math.round(pinkWidth));
          $("input.yellow").val(Math.round(yellowWidth));
          $("input.violet").val(Math.round(violetWidth));
          $("input.orange").val(Math.round(orangeWidth));
          $("input.green").val(Math.round(greenWidth));
          break;
        case "pink":
          console.log("I'm pink");
          delta = newWidth - pinkWidth;
          // REDEFINE BARS WIDTHS
          pinkWidth = newWidth;
          blueWidth = blueWidth - delta / (qntBar - 1);
          yellowWidth = yellowWidth - delta / (qntBar - 1);
          violetWidth = violetWidth - delta / (qntBar - 1);
          orangeWidth = orangeWidth - delta / (qntBar - 1);
          greenWidth = greenWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.blue").val(Math.round(blueWidth));
          $("input.yellow").val(Math.round(yellowWidth));
          $("input.violet").val(Math.round(violetWidth));
          $("input.orange").val(Math.round(orangeWidth));
          $("input.green").val(Math.round(greenWidth));
          break;
        case "yellow":
          console.log("I'm yellow");
          delta = newWidth - yellowWidth;
          // REDEFINE BARS WIDTHS
          yellowWidth = newWidth;
          blueWidth = blueWidth - delta / (qntBar - 1);
          pinkWidth = pinkWidth - delta / (qntBar - 1);
          violetWidth = violetWidth - delta / (qntBar - 1);
          orangeWidth = orangeWidth - delta / (qntBar - 1);
          greenWidth = greenWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.blue").val(Math.round(blueWidth));
          $("input.pink").val(Math.round(pinkWidth));
          $("input.violet").val(Math.round(violetWidth));
          $("input.orange").val(Math.round(orangeWidth));
          $("input.green").val(Math.round(greenWidth));
          break;
        case "violet":
          console.log("I'm violet");
          delta = newWidth - violetWidth;
          // REDEFINE BARS WIDTHS
          violetWidth = newWidth;
          blueWidth = blueWidth - delta / (qntBar - 1);
          pinkWidth = pinkWidth - delta / (qntBar - 1);
          yellowWidth = yellowWidth - delta / (qntBar - 1);
          orangeWidth = orangeWidth - delta / (qntBar - 1);
          greenWidth = greenWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.blue").val(Math.round(blueWidth));
          $("input.pink").val(Math.round(pinkWidth));
          $("input.yellow").val(Math.round(yellowWidth));
          $("input.orange").val(Math.round(orangeWidth));
          $("input.green").val(Math.round(greenWidth));
          break;
        case "orange":
          console.log("I'm orange");
          delta = newWidth - orangeWidth;
          // REDEFINE BARS WIDTHS
          orangeWidth = newWidth;
          blueWidth = blueWidth - delta / (qntBar - 1);
          pinkWidth = pinkWidth - delta / (qntBar - 1);
          yellowWidth = yellowWidth - delta / (qntBar - 1);
          violetWidth = violetWidth - delta / (qntBar - 1);
          greenWidth = greenWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.blue").val(Math.round(blueWidth));
          $("input.pink").val(Math.round(pinkWidth));
          $("input.yellow").val(Math.round(yellowWidth));
          $("input.violet").val(Math.round(violetWidth));
          $("input.green").val(Math.round(greenWidth));
          break;
        case "green":
          console.log("I'm green");
          delta = newWidth - violetWidth;
          // REDEFINE BARS WIDTHS
          greenWidth = newWidth;
          blueWidth = blueWidth - delta / (qntBar - 1);
          pinkWidth = pinkWidth - delta / (qntBar - 1);
          yellowWidth = yellowWidth - delta / (qntBar - 1);
          violetWidth = violetWidth - delta / (qntBar - 1);
          orangeWidth = orangeWidth - delta / (qntBar - 1);
          // MODIFY CSS WIDTHS
          $(".bar.blue").animate({ width: `${blueWidth}%` }, 1500);
          $(".bar.pink").animate({ width: `${pinkWidth}%` }, 1500);
          $(".bar.yellow").animate({ width: `${yellowWidth}%` }, 1500);
          $(".bar.violet").animate({ width: `${violetWidth}%` }, 1500);
          $(".bar.orange").animate({ width: `${orangeWidth}%` }, 1500);
          $(".bar.green").animate({ width: `${greenWidth}%` }, 1500);
          // CHANGE INPUT VALUES
          $("input.blue").val(Math.round(blueWidth));
          $("input.pink").val(Math.round(pinkWidth));
          $("input.yellow").val(Math.round(yellowWidth));
          $("input.violet").val(Math.round(violetWidth));
          $("input.orange").val(Math.round(orangeWidth));
          break;
        default:
          console.log("Not a valid class");
      }
    } else {
      $("input").val(Math.round(barWidth));
      $(".bar").css("width", `${barWidth}%`);
    }
  });

  new ResizeSensor(jQuery(".bar"), function () {
    // console.log("content dimension changed");
    // console.log($(".bar").width());
    // $("input").val(barWidth);
  });
});
