const speed = [
  3.1,
  18,
  24,
  19,
  22,
  10,
  12,
  18,
  15,
  9
];
const range = [
  30,
  7,
  31,
  18,
  10,
  13,
  22,
  15,
  8,
  6
];
const title = [
  "Walking",
  "Boosted Mini S Board",
  "Evolve Bamboo GTR 2in1",
  "OneWheel XR",
  "MotoTec Skateboard",
  "Segway Ninebot S",
  "Segway Ninebot S-PLUS",
  "Razor Scooter",
  "GeoBlade",
  "Hovertrax Hoverboard"
]

$(document).ready(function(){
  $("#results").hide();
  $("#picture").hide();

  $("#dist-to-time").click(function() {
    let dist = $("#distance").val();

    if ((dist.trim() != "") && (!isNaN(dist)) && (parseFloat(dist) >= 0)){
      let option = $('#type-of-trans').find(":selected").val();

      if(option != 0){
        dist = parseFloat(dist)

        if ( $("#results").first().is( ":hidden" ) ) {
          $(".output-type").text("Time: ");
          for (let i = 0; i < 10; i++){
            let update_title = "#output" + (i+1) + "-title";
            if (option == i + 1){
              $(update_title).css("color", "red");
            } else {
              $(update_title).css("color", "black");
            }
      
            let update_id = "#output" + (i+1) + "-value";
            let time = parseFloat(dist) / speed[i];
            let min = (time * 60).toFixed(2);
            if (dist > range[i]){
              $(update_id).text("Out of range");
              $(update_id).css("color", "lightgray");
            } else {
              $(update_id).text(min + " minute(s)");
              $(update_id).css("color", "black");
            }
          }
          $("#results").slideDown("slow");
        } else {
          $("#results").slideUp("slow", function(){
            $(".output-type").text("Time: ");
            for (let i = 0; i < 10; i++){
              let update_title = "#output" + (i+1) + "-title";
              if (option == i + 1){
                $(update_title).css("color", "red");
              } else {
                $(update_title).css("color", "black");
              }
        
              let update_id = "#output" + (i+1) + "-value";
              let time = parseFloat(dist) / speed[i];
              let min = (time * 60).toFixed(2);
              if (dist > range[i]){
                $(update_id).text("Out of range");
                $(update_id).css("color", "lightgray");
              } else {
                $(update_id).text(min + " minute(s)");
                $(update_id).css("color", "black");
              }
            }
          });
          $("#results").slideDown("slow");
        }

        let image = "images/" + option + ".png"

        if ( $("#picture").first().is( ":hidden" ) ) {
          $("#picture-image").attr("src", image);
          $("#picture-text").text(title[option-1]);
          $("#picture").slideDown("slow");
        } else {
          $("#picture").slideUp("slow", function(){
            $("#picture-image").attr("src", image);
            $("#picture-text").text(title[option-1]);
          });
          $("#picture").slideDown("slow");
        }
      }
    }
  });

  $("#time-to-dist").click(function() {
    let time = $("#time").val();

    if ((time.trim() != "") && (!isNaN(time)) && (parseFloat(time) >= 0)){
      if (!( $("#picture").first().is( ":hidden" ) )) {
        $("#picture").slideUp("slow", function(){
          $("#picture-image").attr("src", "");
        });
      }

      time = parseFloat(time)
      if ( $("#results").first().is( ":hidden" ) ) {
        $(".output-type").text("Distance: ");
        for (let i = 0; i < 10; i++){    
          let update_title = "#output" + (i+1) + "-title";
          $(update_title).css("color", "black");

          let update_id = "#output" + (i+1) + "-value";
          let dist = (speed[i] * time / 60).toFixed(2);
          if (dist > range[i]){
            $(update_id).text("Out of range");
            $(update_id).css("color", "lightgray");
          } else {
            $(update_id).text(dist + " mile(s)");
            $(update_id).css("color", "black");
          }
        }
        $("#results").slideDown("slow");
      } else {
        $("#results").slideUp("slow", function(){
          $(".output-type").text("Distance: ");
          for (let i = 0; i < 10; i++){    
            let update_title = "#output" + (i+1) + "-title";
            $(update_title).css("color", "black");

            let update_id = "#output" + (i+1) + "-value";
            let dist = (speed[i] * time / 60).toFixed(2);
            if (dist > range[i]){
              $(update_id).text("Out of range");
              $(update_id).css("color", "lightgray");
            } else {
              $(update_id).text(dist + " mile(s)");
              $(update_id).css("color", "black");
            }
          }
        });
        $("#results").slideDown("slow");
      }
    }
  });
});
