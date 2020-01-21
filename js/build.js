$('.mmi').on("click", function () {
   highlight($(this));
   if ($(this).data("target") != undefined) {
     change_content($(this).data("target"));
   }
});

let a = $.getJSON('https://github.com/aafrecct/src/translations/en.json', function () {console.log("success");})
console.log(a);
// $(".mmi").text(function () {
//
// })
