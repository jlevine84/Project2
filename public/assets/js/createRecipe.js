$(document).ready(function () {
  var counter = 1;
  $('.difficulty').hide();
  $('.prep').hide();
  $('.cook').hide();
  $('.ingredient-card').hide();
  $('.direction-card').hide();
  $('.responsive-video').hide();
  $('.name').hide();

  $('.add-ingredient').click(function () {
    $('.ingredient-card').show();
    if ($('#ingredient-input').val() !== '') {
      var ingredient = $('#ingredient-input').val();
      var cardIngredient = $("<li class='collection-item color close'>" + '<i class="material-icons right close">close</i>' + ingredient + '</li>');
      $('.ingredient-card').append(cardIngredient);
      $('#ingredient-input').val('');
    }
  });
  $('.add-direction').click(function () {
    $('.direction-card').show();
    if ($('#direction-input').val() !== '') {
      var direction = $('#direction-input').val();
      var cardDirection = $("<li class='collection-item color close'>" + '<i class="material-icons right close">close</i>' + 'Step ' + counter + ': ' + direction + '</li>');
      $('.direction-card').append(cardDirection);
      $('#direction-input').val('');
      counter++;
    }
  });
  $('.add-image').click(function () {
    if ($('#image-input').val() !== '') {
      $('#userImage').remove();
      var image = $('#image-input').val();
      var cardImage = $('<img src=' + image + " id='userImage'>");
      $('.card-image').append(cardImage);
      $('#cardImage').css('height', '0');
      $('#image-input').val('');
    }
  });
  $('.add-video').click(function () {
    if ($('#video-input').val() !== '') {
      $('.responsive-video').show();
    }
  });
  $('.add-prep').click(function () {
    if ($('#prep-input').val() !== '') {
      $('.prep').show();
      var value = $('#prep-input').val();
      $('.prep').empty();
      $('.prep').append('Prep time: ' + value);
      $(this).text('EDIT');
    }
  });
  $('.add-name').click(function () {
    if ($('#name-input').val() !== '') {
      $('.name').show();
      var value = $('#name-input').val();
      $('.name').empty();
      $('.name').append(value);
      $(this).text('EDIT');
    }
  });
  $('.add-cook').click(function () {
    if ($('#cook-input').val() !== '') {
      $('.cook').show();
      var value = $('#cook-input').val();
      $('.cook').empty();
      $('.cook').append('Cook time: ' + value);
      $(this).text('EDIT');
    }
  });
  $('.add-summary').click(function () {
    if ($('#summary-input').val() !== '') {
      var value = $('#summary-input').val();
      $('.summary-section').empty();
      $('.summary-section').append(value);
      $(this).text('EDIT');
    }
  });
  $(document).on('click', '.close', function () {
    $(this).remove();
  });
  $('.dropdown-trigger').dropdown({ constrainWidth: false });
  $('.clicked').on('click', function () {
    $('.difficulty').show();
    var value = $(this).val();
    var text = $(this).text();
    $('.dropdown-trigger').text(text);
    $('.difficulty').empty();

    if (value === 1) {
      $('.difficulty').append("Difficulty Rating: <i class='material-icons'>restaurant_menu</i> (Beginner)");
    }
    if (value === 2) {
      $('.difficulty').append("Difficulty Rating: <i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i> (Amateur)");
    }
    if (value === 3) {
      $('.difficulty').append("Difficulty Rating: <i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i> (Home Chef)");
    }
    if (value === 4) {
      $('.difficulty').append("Difficulty Rating: <i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i> (Professional Chef)");
    }
    if (value === 5) {
      $('.difficulty').append("Difficulty Rating: <i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i><i class='material-icons'>restaurant_menu</i> (Michelin Star Chef)");
    }
  });
});
