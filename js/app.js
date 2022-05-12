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
  }).then(
    function (data) {
      console.log(data);
      apiData = data;
      $input.val("");
      descrInfo();
    },
    function (error) {
      console.log("bad request", error);
    }
  );
}
function descrInfo() {
  let idValue = apiData.id;
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon-species/${idValue}`,
  }).then(function (data) {
    console.log(data);
    descrData = data;
    displayInfo();
  });
}
function displayInfo() {
  const height = apiData.height * 0.1;
  const weight = apiData.weight * 0.1;
  const descrArray = descrData.flavor_text_entries;
  const flavArray = descrArray
    .map((flavText) => flavText)
    .filter((flavText) => (flavText.language.name === "en" ? flavText : null));
  console.log(flavArray);
  $description.text(flavArray[0].flavor_text);
  $name.text(apiData.name);
  $numId.text(apiData.id);
  $elType.text(apiData.types[0].type.name)
  $height.text(height.toFixed(1) + " m");
  $weight.text(weight.toFixed(1) + " kg");
  $image.attr("src", apiData.sprites.front_default);
  visible();
}
function visible() {
  $(".visibility").css("visibility", "visible")
}
