const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
const showBtnImg = showBtn.querySelector("img");
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
         no = 1; // Weak Password Output
      if (
         input.value.length >= 6 &&
         ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
            (input.value.match(regExpMedium) &&
               input.value.match(regExpStrong)) ||
            (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
      )
         no = 2; // Medium Password Output
      if (
         input.value.length >= 6 &&
         input.value.match(regExpWeak) &&
         input.value.match(regExpMedium) &&
         input.value.match(regExpStrong)
      )
         no = 3; // Strong Password Output

      //Changing Style Based on Output

      if (no == 1) {
         weak.classList.add("active");
         text.style.display = "block";
         text.textContent = "Your password is too week";
         text.classList.add("weak");
      }

      if (no == 2) {
         //Changing Colors from Weak to Medium
         medium.classList.add("active");
         weak.classList.add("medium");
         text.textContent = "Your password is medium";
         text.classList.add("medium");
      } else {
         medium.classList.remove("active");
         weak.classList.remove("medium");

         text.classList.remove("medium");
      }

      if (no == 3) {
         //Changing Colors from Medium to Strong
         medium.classList.add("strong");
         weak.classList.add("strong");
         strong.classList.add("active");

         text.textContent = "Your password is strong";
         text.classList.add("strong");
      } else {
         strong.classList.remove("active");
         medium.classList.remove("strong");
         weak.classList.remove("strong");

         text.classList.remove("strong");
      }

      showBtn.style.display = "block";
      showBtn.onclick = function () {
         if (input.type == "password") {
            input.type = "text";
            showBtnImg.src = "eye-slash-regular.svg";
         } else {
            input.type = "password";
            showBtnImg.src = "eye-regular.svg";
         }
      };
   } else {
      indicator.style.display = "none";
      text.style.display = "none";
   }
}
