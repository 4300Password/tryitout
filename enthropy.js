var run_enthropy = function() {
      var entry = document.getElementById("search-results");
      //entry.removeChild(entry.lastChild);
      var element = document.getElementById("search-bar");
      var obj = zxcvbn(element.value, user_inputs=[]);
      var text = JSON.stringify(obj, null, "<br>");
      var testing = obj[0];
      var stringtest = "<br>";

      stringtest = stringtest + '<h2>' + '<b>' + "Rating" + '</b>' +'</h2>';

      if(obj['guesses'])
        stringtest = stringtest + "guesses: " + obj['guesses'] + '<br>';

      if(obj['guesses_log10'])
        stringtest = stringtest + "guesses_log10: " + obj['guesses_log10'] + '<br>';

      if(obj['score'])
        stringtest = stringtest + "score: " + obj['score'] + ' / 4' + '<br>';
      else
        stringtest = stringtest + "score: 0 / 4" + '<br>';

      stringtest = stringtest + '<br>';

      var startText = "";

      if(obj['crack_times_display']) {
        var separate = obj['crack_times_display'];
        for(var key in separate) {offline_fast_hashing_1e10_per_second
:

          if(key == "online_throttling_100_per_hour")
            startText = '<b>' + "Throttled online attack (100 / hour)" + '</b>' + '<br>';
          else if(key == "online_no_throttling_10_per_second")
            startText  = '<b>' + "Unthrottled online attack (10 / second)" + '</b>' + '<br>';
          else if(key == "offline_slow_hashing_1e4_per_second")
            startText = '<b>' + "Offline Attack - Slow (10k / second)" + '</b>' + '<br>';
          else if(key == "offline_fast_hashing_1e10_per_second")
            startText = '<b>' + "Offline Attack - Fast (10B / second)" + '</b>' + '<br>';
          else
            startText = "Error: ";

          stringtest = stringtest + startText + separate[key] + '<br>' + '<br>';
        }
      }

      stringtest = stringtest + '<br>';

      if(obj['feedback']) {
        var separate = obj['feedback'];
        for(var key in separate) {

          var init = "";

          if(key == "suggestions") {
            var hold = separate[key];
            init = init + '<b>' + "Suggestions" + '</b>' + '<br>';
            for(var i=0; i<hold.length; i++) {
              init = init + " - " + hold[i] + '<br>';
            }

          }
          else if(key == "warning")
            init = init + '<span style="color:red;font-weight:bold">' + "Warning" + '</span>' + '<br>' + separate[key] + '<br>';
          else
            init = init + "Error  " + '<br>';

          stringtest = stringtest + init + '<br>';
        }
      }



      //Reformat string
      //text = text.split(", ").join("\n");

      //var textnode = document.createTextNode(text);
      document.getElementById("search-results").innerHTML = stringtest;
      //entry.appendChild(par);
    };