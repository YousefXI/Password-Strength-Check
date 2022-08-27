const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger() {
   if (input.value != "") {
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if (
         input.value.length <= 3 &&
         (input.value.match(regExpWeak) ||
            input.value.match(regExpMedium) ||
            input.value.match(regExpStrong))
      )
         no = 1;

      if (
         input.value.length >= 6 &&
         ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
            (input.value.match(regExpMedium) &&
               input.value.match(regExpStrong)) ||
            (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
      )
         no = 1;

      if (
         input.value.length >= 6 &&
         ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
            (input.value.match(regExpMedium) &&
               input.value.match(regExpStrong) &&
               input.value.match(regExpWeak) &&
               input.value.match(regExpStrong)))
      )
         no = 3;

      if (no == 1) {
         weak.classList.add("active");
         text.style.display = "block";
         text.textContent = "Your password is too weak";
         text.classList.add("weak");
      }
   } else {
      indicator.style.display = "none";
   }
}
