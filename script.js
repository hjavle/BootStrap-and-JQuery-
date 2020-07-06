$(document).ready(function()
    {
        /* Hide Box One */
        $("#hidBxOneLink").click(function () {
            $("#redDiv").hide();
        });
         /* Hide Box Two */
        $("#hidBxTwoLink").click(function () {
            $("#bluDiv").hide();
        });
         /* Hide Box Three */
        $("#hidBxThreeLink").click(function () {
            $("#grnDiv").hide();
        });
         /* Hide All Boxes */
        $("#hidBxFourLink").click(function () {
            $("#redDiv").hide();
            $("#bluDiv").hide();
            $("#grnDiv").hide();
        });
        /* Change Box One */
        $("#cgBxOneLink").click(function (){
            $("#redDiv").toggleClass("red pink");
            $("#redDiv").show();
        });

        /* Change Box Two */
        $("#cgBxTwoLink").click(function (){
            $("#bluDiv").toggleClass("blue yellow");
            $("#bluDiv").show();
        });
        /* Change Box Three */
        $("#cgBxThreeLink").click(function (){
            $("#grnDiv").toggleClass("green purple");
            $("#grnDiv").show();
        });

        /* Change All Boxes */

        $("#cgBxFourLink").click(function () {
            $("#redDiv").toggleClass("red pink");
            $("#bluDiv").toggleClass("blue yellow");
            $("#grnDiv").toggleClass("green purple");
        });  

        /* Show All Boxes */
        $("#showAllLink").click(function () {
            $("#redDiv").show();
            $("#bluDiv").show();
            $("#grnDiv").show();
        });

          /* Reset All Colors */
          $("#resetColoLink").click(function () {
            $("#redDiv").removeClass("pink");
            $("#redDiv").addClass("red");
            $("#bluDiv").removeClass("yellow");
            $("#bluDiv").addClass("blue");
            $("#grnDiv").removeClass("purple");
            $("#grnDiv").addClass("green");
        });        
        
    });
