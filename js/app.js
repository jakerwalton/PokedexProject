const $name = $("#name");
const $numId = $("#idNum");
const $elType = $("#elemType");
const $description = $("#description");
const $height = $("#height");
const $weight = $("#weight");
const $input = $('input[type="text"]');
const $image = $("#sprite");

$("form").on("submit", getData);

function getData(e) {
  e.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`,
  })
  .then(
    function (data) {
      console.log(data);
      apiData = data;
      $input.val("");
      display();
    },
    function (error) {
      console.log("bad request", error);
    }
  );
}
function display() {
  let height = apiData.height * 0.1;
  let weight = apiData.weight * 0.1;
  $name.text(apiData.name);
  $numId.text("ID " + apiData.id);
  $elType.text(apiData.types[0].type.name);
  $height.text(height.toFixed(1) + " m");
  $weight.text(weight.toFixed(1) + " kg");
  $image.attr("src", apiData.sprites.front_default);
}
