(
  function(){

  var names = ["Youssef", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for ( var i = 0; i < names.length; i++) {

var firstLetter =names[i].charAt(0);

if (firstLetter.toLocaleLowerCase() == "j") {

        byeSpeaker.speak(names[i]);

      } else {

        helloSpeaker.speak(names[i]);
      }
    }

  }
)();