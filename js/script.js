// Select Form
new Choices("#model", {
  searchEnabled: false,
  itemSelectText: "",
});

new Choices("#color", {
  searchEnabled: false,
  itemSelectText: "",
});

// AJAX form
$("#form-order").on("submit", function (event) {
  event.preventDefault();

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    dataType: "html",
    data: $("#form-order").serialize(),
    success: function (data) {
      console.log(data);
      $("#form-order").html("Спасибо Ваша заявка успешно отправлена!");
      $(".form__submit").hide();
    },
  });
});

// Плавная прокрутка
$(document).ready(function () {
  $('[href^="#"]').on("click", function (event) {
    if ($(this).attr("hash") !== "") {
      event.preventDefault();
      let hash = $(this).prop("hash");
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        3000,
        function () {},
      );
    }
  });
});
