function reverseString(value) {
  return value.split("").reverse().join("");
}

function shuffleString(value) {
  var chars = value.split("");
  for (var i = chars.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
  }
  return chars.join("");
}

function randomGlyph() {
  var glyphs = "abcdefghijklmnopqrstuvwxyz0123456789._";
  return glyphs.charAt(Math.floor(Math.random() * glyphs.length));
}

function animateUnscramble(displayLink, finalEmail, done) {
  var frame = 0;
  var totalFrames = finalEmail.length + 6;
  var timer = setInterval(function () {
    var revealed = Math.max(0, frame - 4);
    var output = "";

    for (var i = 0; i < finalEmail.length; i++) {
      if (finalEmail.charAt(i) === "@") {
        output += "@";
      } else if (i < revealed) {
        output += finalEmail.charAt(i);
      } else {
        output += randomGlyph();
      }
    }

    displayLink.textContent = output;
    frame += 1;

    if (frame > totalFrames) {
      clearInterval(timer);
      displayLink.textContent = finalEmail;
      done();
    }
  }, 45);
}

document.addEventListener("DOMContentLoaded", function () {
  var displays = document.querySelectorAll("a.email-scrambled");

  for (var i = 0; i < displays.length; i++) {
    var display = displays[i];
    var userReversed = display.getAttribute("data-user-reversed");
    var domainReversed = display.getAttribute("data-domain-reversed");

    if (!userReversed || !domainReversed) {
      continue;
    }

    var email = reverseString(userReversed) + "@" + reverseString(domainReversed);
    display.setAttribute("data-email", email);
    display.textContent = shuffleString(email);
    display.setAttribute("href", "#");
  }

  var keys = document.querySelectorAll("a.email-unscramble-trigger");
  for (var k = 0; k < keys.length; k++) {
    keys[k].addEventListener("click", function (event) {
      event.preventDefault();

      var displayLink = this.previousElementSibling;
      if (!displayLink || !displayLink.classList.contains("email-scrambled")) {
        return;
      }

      if (displayLink.getAttribute("data-revealed") === "true") {
        return;
      }

      var email = displayLink.getAttribute("data-email");
      if (!email) {
        return;
      }

      var trigger = this;
      trigger.textContent = "Unscrambling...";
      trigger.style.pointerEvents = "none";

      animateUnscramble(displayLink, email, function () {
        displayLink.setAttribute("href", "mailto:" + email);
        displayLink.setAttribute("data-revealed", "true");
        trigger.textContent = "Done";
      });
    });
  }
});
