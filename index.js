function showMenu() {
  const asideBar = document.querySelector(".aside-bar");
  asideBar.style.display = "flex";
}

closeMenu = () => {
  const asideBar = document.querySelector(".aside-bar");
  asideBar.style.display = "none";
};

/*
function openFullScreen(image) {
    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) { // Safari 
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // IE11 
        image.msRequestFullscreen();
    }

    image.style.display = 'flex'
    image.style.justifyContent = 'center'
    image.style.backgroundSize = 'cover'
    image.style.backgroundPosition = 'center'
}
*/

let fullScreenImage = null;

function openFullScreen(image) {
  fullScreenImage = image;
  if (fullScreenImage.requestFullscreen) {
    fullScreenImage.requestFullscreen();
  } else if (fullScreenImage.webkitRequestFullscreen) {
    /* Safari */
    fullScreenImage.webkitRequestFullscreen();
  } else if (fullScreenImage.msRequestFullscreen) {
    /* IE11 */
    fullScreenImage.msRequestFullscreen();
  }

  image.style.display = "flex";
  image.style.justifyContent = "center";
  image.style.backgroundSize = "contain";
  image.style.backgroundPosition = "center";
}

function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
  fullScreenImage = null;
}

document.addEventListener("fullscreenchange", function (event) {
  if (!document.fullscreenElement) {
    fullScreenImage = null;
  }
});

//Scroll Function

document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".scroll-element");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    }
  });
});
