$(document).ready(function () {
  var counter = 1;
  $('.servingSize').hide();
  $('.difficulty').hide();
  $('.prep').hide();
  $('.cook').hide();
  $('.ingredient-card').hide();
  $('.direction-card').hide();
  $('.responsive-video').hide();
  $('.name').hide();

  let recipe = {};
  recipe.ingredients = [];
  recipe.instructions = [];
  function Ingredient (quantity, material) {
    this.quantity = quantity;
    this.material = material;
  }

  $('.add-servingSize').click(function () {
    recipe.servingSize = $('#servingSize-input').val();
  });

  $('.add-ingredient').click(function () {
    $('.ingredient-card').show();
    if ($('#ingredient-input').val() !== '') {
      let quantityToAdd = $('#quantity-input').val();
      let ingredientToAdd = $('#ingredient-input').val();
      let ingredient = new Ingredient(quantityToAdd, ingredientToAdd);

      recipe.ingredients.push(ingredient);

      var cardIngredient = $("<li class='collection-item color close'>" + '<i class="material-icons right close">close</i>' + quantityToAdd + '  ' + ingredientToAdd + '</li>');
      $('.ingredient-card').append(cardIngredient);
      $('.ingredient-card').append(cardIngredient);
      $('#quantity-input').val('');
      $('#ingredient-input').val('');
    }
  });
  $('.add-direction').click(function () {
    $('.direction-card').show();
    if ($('#direction-input').val() !== '') {
      var direction = $('#direction-input').val();
      recipe.instructions.push(direction);
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
      recipe.image = image;
      var cardImage = $('<img src=' + image + " id='userImage'>");
      $('.card-image').append(cardImage);
      $('#cardImage').css('height', '0');
      $('#image-input').val('');
    }
  });
  // $('.add-video').click(function () {
  //   if ($('#video-input').val() !== '') {
  //     $('.responsive-video').show();
  //   }
  // });
  $('.add-prep').click(function () {
    if ($('#prep-input').val() !== '') {
      $('.prep').show();
      var value = $('#prep-input').val();
      recipe.prepTime = value;
      $('.prep').empty();
      $('.prep').append('Prep time: ' + value);
      $(this).text('EDIT');
    }
  });
  $('.add-name').click(function () {
    if ($('#name-input').val() !== '') {
      $('.name').show();
      var value = $('#name-input').val();
      recipe.name = value;
      $('.name').empty();
      $('.name').append(value);
      $(this).text('EDIT');
    }
  });
  $('.add-cook').click(function () {
    if ($('#cook-input').val() !== '') {
      $('.cook').show();
      var value = $('#cook-input').val();
      recipe.cookTime = value;
      $('.cook').empty();
      $('.cook').append('Cook time: ' + value);
      $(this).text('EDIT');
    }
  });
  $('.add-summary').click(function () {
    if ($('#summary-input').val() !== '') {
      var value = $('#summary-input').val();
      recipe.summary = value;
      $('.summary-section').empty();
      $('.summary-section').append(value);
      $(this).text('EDIT');
    }
  });
  $('.add-servingSize').click(function () {
    if ($('#servingSize-input').val() !== '') {
      $('.servingSize').show();
      var value = $('#servingSize-input').val();
      recipe.summary = value;
      $('.servingSize').empty();
      $('.servingSize').append('Serving Size: ' + value);
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
    recipe.difficulty = value;
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

  $('#add-recipe').on('click', (event) => {
    recipe.instructions = recipe.instructions.join(',');
    recipe.ingredients = JSON.stringify(recipe.ingredients);
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/api/recipe',
      data: recipe
    }).then((response) => {
      if (response) window.location.href = '/dashboard';
    });
  });
});
