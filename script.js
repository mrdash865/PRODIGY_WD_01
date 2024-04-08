window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.background = "#222";
  } else {
    document.querySelector(".navbar").style.background = "#333";
  }
}

const menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.style.color = 'yellow';
  });

  item.addEventListener('mouseout', function() {
    this.style.color = 'white';
  });
});
