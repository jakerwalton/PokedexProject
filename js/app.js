// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

let pokeData, userInput;

const $name = $('#name');
const $input = $('input[type="text"]');

$(document).on('submit', getData);

function getData(e) {
    e.preventDefault();
    userInput = $input.val();
    $.ajax({url:"https://pokeapi.co/api/v2/pokemon/ditto"
        }).then(function(data) {
            console.log(data)
            pokeData = data;
            $input.val("")
            render();
        },function(error) {
            console.log('bad request', error);
        }
    );
}

function render() {
    $name.text(pokeData.name);
}
