$(document).ready(function() {

    /*PRICE CALCULATOR*/



    var chairModel = $("#chairModel");
    //  MODEL FOTELA
    var chairColor = $("#chairColor");
    // KOLOR FOTELA
    var chairMaterial = $("#chairMaterial");
    // MATERIAŁ FOTELA.

    var chosenChair = $("#your_chair").find("span");
    // "WYBRANY" MODEL FOTELA.
    var chosenColor = $("#your_chair").find("p#color");
    // "WYBRANY" KOLOR FOTELA.
    var chosenMaterial = $("#your_chair").find("p#material");
    // "WYBRANY" MATERIAŁ FOTELA.

    // CENY FOTELI ICH KOLOROW I MATERIAŁOW.
    var costModel = $("#cost").find("span#modelCost");
    var costColor = $("#cost").find("p#colorCost");
    var materialCost = $("#cost").find("p#materialCost");

    // CHECKBOX TRANSPORTU
    var delivery = $("input#transport_cost");
    var costDelivery = $("#cost").find("p#deliverCost");

    // CAŁKOWITY KOSZT SUMA WYBORÓW KLIENTA DZIAŁANIE.



    // KOSZT TRANSPORTU I DZIAŁANIE
    delivery.on("click", function() {

        if ($(this).is(":checked")) {
            costDelivery.text(100);

        } else {
            costDelivery.text(0);
        }
        calc_price();

    });
    // MODEL KRZESEŁ I DZIAŁANIA.
    chairModel.on("click", function(e) {

        var chairVal = chairModel.val();
        chosenChair.text(chairVal);
        var priceModel = $("option:selected", this).attr("data-price");
        costModel.text(priceModel);
        calc_price();
    });
    // KOLOR KRZESEŁ I DZIAŁANIA.
    chairColor.on("click", function() {

        var colorVal = chairColor.val();
        chosenColor.text(colorVal);
        var priceColor = $("option:selected", this).attr("data-price");
        costColor.text(priceColor);
        calc_price();
    });
    // MATERIAŁ KRZESEŁ I DZIAŁANIA.
    chairMaterial.on("click", function() {

        var materialVal = chairMaterial.val();
        chosenMaterial.text(materialVal);
        var materialPrice = $("option:selected", this).attr("data-price");
        materialCost.text(materialPrice);
        calc_price();
    });

/// KALKULATOR FINALNY.
function calc_price(){
    var modelSum = $("#modelCost").text();
    var colorSum = $("#colorCost").text();
    var materialSum = $("#materialCost").text();
    var transportSum = $("#deliverCost").text();

    $("#all_sum").text(parseInt(modelSum) + parseInt(colorSum) + parseInt(materialSum) + parseInt(transportSum));
    console.log(modelSum);
    }




    /*VALIDATION FORM WITH AJAX */
    var submit = $("#send");
    var url = "http//www.example.com";


    submit.on("click", function(event) {


        event.preventDefault();

        var name = $("#nameUser").val();
        var mail = $("#mailUser").val();
        var text = $("#textUser").val();


        if (name.length < 4) {

            confirm("Imię jest za krotkie");

        } else if (mail.length < 4) {

            confirm("Nieprawidłowy mail");

        } else if (text.length < 4) {

            confirm("Za krotka wiadomość");

        } else if ($("#agree").is(":not(:checked)")) {

            confirm("Zgoda na przetwarzanie danych jest wymagana");

        }

    });

    function send() {

        var form = {

            name: $("input#nameUser").val(),
            mail: $("input#mailUser").val(),
            text: $("textarea##textUser").val(),

        };

        $.ajax({

            url: url,
            type: "POST",
            data: JSON.stringify(form)


        }).done(function(response) {

            console.log("register ok");


        }).fail(function() {


            console.log("register error");



        });
    }
});
