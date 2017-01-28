console.log("yo what up");

//var home = window.document.getElementById('home');
var about = window.document.getElementById('about');
var now = window.document.getElementById('now');
var opus = window.document.getElementById('opus');
var influences = window.document.getElementById('influences');
var contact = window.document.getElementById('contact');

var contents = window.document.getElementById('contents');

//home.addEventListener("click", goToHome);
about.addEventListener("click", goToAbout);
now.addEventListener("click", goToNow);
opus.addEventListener("click", goToOpus);
influences.addEventListener("click", goToInfluences);
contact.addEventListener("click", gotoContact);

function goToHome() {
  console.log("this is home");
  contents.innerHTML = "";
}

function goToAbout() {
  console.log("this is about");
  contents.innerHTML = "aarón montoya-moraga is a chilean electric engineer, musician and programmer. he designs custom software for audio visual installations where both performers and audience can do real-time manipulation in unexpected ways. he has worked for the processing foundation and critter & guitari. his work has been exhibited at the world maker faire, the google geek street fair and the computer science fair nyc.";
}

function goToNow() {
  console.log("this is now");
  contents.innerHTML = "stuff i'm currently working as of november 2016:";
  contents.innerHTML += "<li>finishing my assignments at my third semester at nyu itp (one more to go!)</li>"
  contents.innerHTML += "<li>working on an interactive performance with yuli cai</li>"
  contents.innerHTML += "  <li>wrapping up work for the processing foundation</li>"
  contents.innerHTML += "<li>working on a sound installation for artist sonia li</li>"
  contents.innerHTML += "<li>teaching myself how to play the moog synthesizer</li>"

}

function goToOpus() {
  console.log("this is opus");
  contents.innerHTML = "this is a list of my artistic output, work in progress, stay tuned";
}

function goToInfluences() {
  console.log("this is influences");
  contents.innerHTML = "";

  contents.innerHTML += "<li>alejandro zambra</li>"
  contents.innerHTML += "<li>francisco papas fritas</li>"
  contents.innerHTML += "<li>kyle mcdonald</li>"
  contents.innerHTML += "<li>lauren mccarthy</li>"
  contents.innerHTML += "<li>leo fender</li>"
  contents.innerHTML += "<li>nicanor parra</li>"
  contents.innerHTML += "<li>raúl zurita</li>"

}

function gotoContact() {
  console.log("this is contact");
  contents.innerHTML = "say hi here: aamontoya@gmail.com";
}
