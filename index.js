let tags = ["Node.JS", "MongoDB", "React.JS", "React Native", "Web dev", "UI/UX", "Backend Developer", "Frontend Developer", "Full Stack Developer", "Mobile App Developer"];

$(document).ready(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      const filteredTags = tags.filter(tag => tag.toLowerCase().includes(request.term.toLowerCase()));
      response(filteredTags);
    },
    classes: {
      "ui-autocomplete": "autocomplete-menu",
      "ui-autocomplete-item": "autocomplete-item"
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.button');

  likeButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.classList.toggle('liked');
          if (button.classList.contains('liked')) {
              button.classList.replace('fa-regular', 'fa-solid');
          } else {
              button.classList.replace('fa-solid', 'fa-regular');
          }
      });
  });
});
