/*Menu BUTTONS */
$(document).ready(function () {
    /*Show categories*/
    $("#categoriesDiv").click(function () {
        $("#menu").hide();
        $("#categories").show();
    });
    /*Regresar*/

    /*PLay level1 */
    $("#play").click(function () {
        document.location.href = "Level1.html";
    });
});