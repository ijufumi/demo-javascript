(function($){
  "use strict";
  $.fn.creditNumber = function(number)
  {
    console.log(number);
    return this.text( $.creditNumber.apply(window,arguments) );
  }

  $.creditNumber = function(number){
    number = number.split(" ").join();
    if (number.length < 4) {
      return number;
    }
    var idx = 0;
    while (idx < number.length)
    {
      number = number.substring(0, idx) + number.substring(idx, idx + 4) + " " + number.substring(idx + 4);
      idx = idx + 5;
    }
    return number; 
  }
})(jQuery);
