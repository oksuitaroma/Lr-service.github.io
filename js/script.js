

//================== Get the modal===================================

const buttons = document.querySelectorAll(".open-modal");
[].slice.call(buttons, 0).forEach(b => b.addEventListener('click', function() {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  modalToOpen.style = 'display: block';
}));

const closeButtons = document.querySelectorAll(".close");
[].slice.call(closeButtons, 0).forEach(b => b.addEventListener('click', function() {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  modalToOpen.style = 'display: none';
}));


[].slice.call(window, 0).forEach(b => b.addEventListener('click', function(event) {
  const modalToOpen = document.querySelector(`.${this.dataset.modal}`);
  if (event.target == modalToOpen) {
  modalToOpen.style = 'display: none';
  }
}));

 // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }

function openModal() {
  var modal= document.querySelectorAll(".modal");
    for (var i = 0; i < modal.length; i++) {
      modal[i].addEventListener("click", function() {
        modal[i].style.display = "block";
      });
    }
}


function openSearch() {
	$('#search').slideToggle(400);
}

// function VIN() {
//   if (true) {
//     document.getElementById("search").style.display = "block";
//   } else {
//     document.getElementById("search").style.display = "none";
//   }
  
// }


//================== Get the modal===================================
// function openModal() {
//   var modal= document.querySelector(".modal");
//   var btn = document.querySelector(".open-modal");
//   var span = document.querySelector(".close");

//   // When the user clicks on the button, open the modal 
 
//   btn.onclick = function() {
//     modal.style.display = "block";
//  }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }
// }



//==================filter===================================
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card__item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}