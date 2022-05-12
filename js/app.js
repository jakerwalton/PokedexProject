const $name = $("#name");
const $numId = $("#idNum");
const $elType = $("#elemType");
const $el2Type = $("#elemType2");
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
  $height.text(height.toFixed(1) + " m");
  $weight.text(weight.toFixed(1) + " kg");
  $image.attr("src", apiData.sprites.front_default);
  $elType.text(apiData.types[0].type.name);
  if (apiData.types[1] === undefined) {
    $el2Type.text(null);
    $("#elemType2").css("background-color", "transparent");
  } else {
    $el2Type.text(apiData.types[1].type.name);
    elm2Color();
  }
  elmColor();
}

function elmColor() {
  if (apiData.types[0].type.name === "electric") {
    return $("#elemType").css("background-color", "yellow");
  } else if (apiData.types[0].type.name === "water") {
    return $("#elemType").css("background-color", "#2D7CFF");
  } else if (apiData.types[0].type.name === "grass") {
    return $("#elemType").css("background-color", "#23D500");
  } else if (apiData.types[0].type.name === "fire") {
    return $("#elemType").css("background-color", "#FF6B28");
  } else if (apiData.types[0].type.name === "ground") {
    return $("#elemType").css("background-color", "#7D4D00");
  } else if (apiData.types[0].type.name === "rock") {
    return $("#elemType").css("background-color", "#9a9a9a");
  } else if (apiData.types[0].type.name === "steel") {
    return $("#elemType").css("background-color", "#858585");
  } else if (apiData.types[0].type.name === "ice") {
    return $("#elemType").css("background-color", "#79f2ff");
  } else if (apiData.types[0].type.name === "dragon") {
    return $("#elemType").css("background-color", "#4e8f56");
  } else if (apiData.types[0].type.name === "ghost") {
    return $("#elemType").css("background-color", "#7d88be");
  } else if (apiData.types[0].type.name === "psychic") {
    return $("#elemType").css("background-color", "#D842E9");
  } else if (apiData.types[0].type.name === "normal") {
    return $("#elemType").css("background-color", "#FFC6AC");
  } else if (apiData.types[0].type.name === "fighting") {
    return $("#elemType").css("background-color", "#C70039");
  } else if (apiData.types[0].type.name === "poison") {
    return $("#elemType").css("background-color", "#8100A1");
  } else if (apiData.types[0].type.name === "bug") {
    return $("#elemType").css("background-color", "#C6E148");
  } else if (apiData.types[0].type.name === "flying") {
    return $("#elemType").css("background-color", "#92C6D3");
  } else if (apiData.types[0].type.name === "dark") {
    return $("#elemType").css("background-color", "#7B1245");
  } else if (apiData.types[0].type.name === "fairy") {
    return $("#elemType").css("background-color", "#FFACD4");
  } else null;
}

function elm2Color() {
  if (apiData.types[1].type.name === "electric") {
    return $("#elemType2").css("background-color", "yellow");
  } else if (apiData.types[1].type.name === "water") {
    return $("#elemType2").css("background-color", "#2D7CFF");
  } else if (apiData.types[1].type.name === "grass") {
    return $("#elemType2").css("background-color", "#23D500");
  } else if (apiData.types[1].type.name === "fire") {
    return $("#elemType2").css("background-color", "#FF6B28");
  } else if (apiData.types[1].type.name === "ground") {
    return $("#elemType2").css("background-color", "#7D4D00");
  } else if (apiData.types[1].type.name === "rock") {
    return $("#elemType2").css("background-color", "#9a9a9a");
  } else if (apiData.types[1].type.name === "steel") {
    return $("#elemType2").css("background-color", "#858585");
  } else if (apiData.types[1].type.name === "ice") {
    return $("#elemType2").css("background-color", "#79f2ff");
  } else if (apiData.types[1].type.name === "dragon") {
    return $("#elemType2").css("background-color", "#4e8f56");
  } else if (apiData.types[1].type.name === "ghost") {
    return $("#elemType2").css("background-color", "#7d88be");
  } else if (apiData.types[1].type.name === "psychic") {
    return $("#elemType2").css("background-color", "#D842E9");
  } else if (apiData.types[1].type.name === "normal") {
    return $("#elemType2").css("background-color", "#FFC6AC");
  } else if (apiData.types[1].type.name === "fighting") {
    return $("#elemType2").css("background-color", "#C70039");
  } else if (apiData.types[1].type.name === "poison") {
    return $("#elemType2").css("background-color", "#8100A1");
  } else if (apiData.types[1].type.name === "bug") {
    return $("#elemType2").css("background-color", "#C6E148");
  } else if (apiData.types[1].type.name === "flying") {
    return $("#elemType2").css("background-color", "#92C6D3");
  } else if (apiData.types[1].type.name === "dark") {
    return $("#elemType2").css("background-color", "#7B1245");
  } else if (apiData.types[1].type.name === "fairy") {
    return $("#elemType2").css("background-color", "#FFACD4");
  } else null;
}
