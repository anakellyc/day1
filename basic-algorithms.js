// Names and Input

var hacker1 = "Francisco"
console.log("The driver's name is " + hacker1);

let hacker2 = prompt ("What's the navigator's name?") 
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length>hacker2.length) {
  console.log("The driver has the longest name, it has "+hacker1.length+" characters");
}
else if (hacker1.length<hacker2.length) {
  console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters");
}
else {
  console.log("Wow, you both got equally long names, "+hacker1.length+" characters");
}


var driverArray = [];
for (var i = 0; i<hacker1.length; i++) {
  driverArray.push (hacker1[i].toUpperCase());
}

var driverString = driverArray.join(' ');
console.log(driverString);

var navigatorArray = [];
for (var j = hacker2.length -1; j>=0; j--) {
  navigatorArray.push (hacker2[j])
}
var navigatorString = navigatorArray.join('');
console.log(navigatorString);

/*
function alphabetize (hacker1, hacker2) {
  if (hacker1.toLowerCase() == hacker2.toLowerCase()) {
    console.log("What?! You both got the same name?");
    return true;
  }
  if (hacker1.length>hacker2.length) {
  for (var i = 0; i < hacker2.length; i++) {
      if (hacker1[i].toLowerCase()<hacker2[i].toLowerCase()) {
        console.log("The driver's name goes first");
        break;
      }
      else if (hacker1[i].toLowerCase()>hacker2[i].toLowerCase()) {
        console.log("Yo, the navigator goes first definitely");
        break;
      }
      else {
        continue;
      }
    }
  }
  else {
    for (var i = 0; i < hacker1.length; i++) {
      if (hacker1[i].toLowerCase()<hacker2[i].toLowerCase()) {
        console.log("The driver's name goes first");
        break;
      }
      else if (hacker1[i].toLowerCase()>hacker2[i].toLowerCase()) {
        console.log("Yo, the navigator goes first definitely");
        break;
      }
      else {
        continue;
      }
    }
  }
}

alphabetize(hacker1, hacker2);
*/

function alphabetize (hacker1, hacker2) {
  if (hacker1.toLowerCase() == hacker2.toLowerCase()) {
    console.log("What?! You both got the same name?");
    return true;
  }
  if (hacker1.length<hacker2.length) {
  for (var i = 0; i < hacker1.length; i++) {
      if (hacker1[i].toLowerCase()<hacker2[i].toLowerCase()) {
        console.log("The driver's name goes first");
        break;
      }
      else if (hacker1[i].toLowerCase()>hacker2[i].toLowerCase()) {
        console.log("Yo, the navigator goes first definitely");
        break;
      }
    }
  }
  else {
    for (var i = 0; i < hacker2.length; i++) {
      if (hacker1[i].toLowerCase()<hacker2[i].toLowerCase()) {
        console.log("The driver's name goes first");
        break;
      }
      else if (hacker1[i].toLowerCase()>hacker2[i].toLowerCase()) {
        console.log("Yo, the navigator goes first definitely");
        break;
      }
    }
  }
  if (hacker2.toLowerCase().includes(hacker1.toLowerCase(),0)) {
    console.log("The driver's name goes first");
    return true;
  } 
  else if (hacker1.toLowerCase().includes(hacker2.toLowerCase(),0)) {
    console.log("Yo, the navigator goes first definitely");
    return true;
  }
}

alphabetize(hacker1, hacker2);

/* 8 extra, alphabetize using sort:
hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
namesArray = [hacker1,hacker2];
namesArray.sort();
if (hacker1==hacker2) {
  console.log("What?! You both got the same name?");
}
else if (namesArray[0]==hacker1) {
  console.log("The driver's name goes first");
}
else {
  console.log("Yo, the navigator goes first definitely");
} */


let guest = prompt ("What's the guests's name?") 
console.log("The guest's name is " + guest);

var guestString = guest.split(/[\s,!]+/).join("");
console.log(guestString);

var leftright = "";
var rightleft = "";

for (var i = 0; i<guestString.length; i++) {
  var leftright = leftright + guestString[i].toLowerCase();
}
console.log(leftright);

for (var i = guestString.length -1; i>=0; i--) {
  var rightleft = rightleft + guestString[i].toLowerCase();
}
console.log(rightleft);

if (rightleft==leftright) {
  console.log("Palindrome detected!");
}
else {
  console.log("Not palindrome");
}

// Lorem ipsum generator

var randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec lorem nunc. Nam non venenatis orci. Donec dignissim fringilla neque. Donec lobortis, sapien ac efficitur molestie, ante felis vulputate est, non efficitur nibh felis non felis. Praesent sit amet lacus felis. Nulla dignissim facilisis ligula at efficitur. Maecenas ac tempus nunc. Vivamus varius convallis enim quis fringilla. Mauris porttitor, ipsum vitae rutrum rutrum, mi libero volutpat nulla, at fringilla tortor dui nec sapien. Cras egestas libero in cursus porttitor. Sed hendrerit iaculis magna, eget malesuada ante porta sed. Etiam sit amet purus hendrerit, hendrerit ipsum ac, tristique purus. Suspendisse vitae pellentesque tellus. Mauris id elit venenatis, venenatis libero sed, euismod nisl. Proin convallis tristique accumsan. Pellentesque volutpat dapibus neque, at porttitor est consectetur eu. Nam maximus, libero fringilla scelerisque ultricies, libero ligula fermentum elit, commodo commodo felis lacus in nisi. Sed sem felis, posuere sit amet eros eu, finibus pharetra risus. Donec malesuada dolor nisl, ac venenatis dui interdum ut. Donec sollicitudin, dui et condimentum molestie, lacus elit vestibulum mauris, in suscipit ante augue in est. Aliquam erat volutpat. Donec eget dolor quam. Cras hendrerit arcu at lacus pellentesque hendrerit at ac nunc. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In iaculis efficitur purus, in accumsan nisi aliquam ut. Integer interdum felis ac pretium sagittis. Etiam fermentum in magna efficitur ullamcorper. Phasellus varius eget eros id feugiat. Ut tincidunt metus nec nibh dignissim, at viverra nulla varius. Suspendisse vestibulum gravida pharetra. Proin metus diam, rhoncus id justo sit amet, sagittis ullamcorper nulla. Aliquam erat volutpat."

var randomArray = randomText.split(/[\s,!;?]+/);
console.log(randomArray);
console.log(randomArray.length);

var countText = 0;

for (var i = 0; i<randomArray.length; i++) {
    if (randomArray[i]=="et") {
      countText ++;
    }
}


console.log(countText);

/* another way to count, with RegEx:
var counterWord = (randomText.match(/\bet\b/g) || []).length;
console.log(counterWord);
*/
