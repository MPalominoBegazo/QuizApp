"use strict";
let appQuiz = {
    items: {
        quesGeography: undefined,
        userAnswers: [],
        score: 0,
        i: 0,
    },
    Questions: function (question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    },
    init: function () {
        appQuiz.items.quesGeography = [
            new appQuiz.Questions("¿Quién escribió el caballero Carmelo?", ["Ricardo Palma", "Abraham Valdelomar", "César Vallejo "], "Abraham Valdelomar"),
            new appQuiz.Questions("¿Cómo se llama este grupo?", ["Mar de Copas", "Amén", "Leusemia"], "Amén"),
            new appQuiz.Questions("¿Quién escribio el siguiente fragmento literario?", ["Javier Heraud", "Mariano Melgar", "Martin Adán"], "Mariano Melgar"),
            new appQuiz.Questions("¿Cómo se llama la protagonista de la película La teta asustada?", ["Perpetua", "Severina", "Fausta"], "Fausta"),
            new appQuiz.Questions("¿De que departamento del Perú es esta expresión artistica?", ["Cajamarca", "Moquegua", "Ayacucho"], "Ayacucho")
        ];
        //Initialize tooltips
        $('.nav-tabs > li a[title]').tooltip();
        //Wizard
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

            let $target = $(e.target);

            if ($target.parent().hasClass('disabled')) {
                return false;
            }
        });
        $(".next-step").click(function (e) {

            let $active = $('.wizard .nav-tabs li.active');
            $active.next().removeClass('disabled');
            appQuiz.nextTab($active);

        });
        appQuiz.showQuestion();
    },

    showQuestion: function () {
        for (let i = 0; i < appQuiz.items.quesGeography.length; i++) {
            let titleQuestion = "#QUESTION" + i;
            let divQuestion = "#Qstn" + i;
            $(`${titleQuestion}`).append(`<h3 align="center">"${appQuiz.items.quesGeography[i].question}"</h3>`);
            $(`${divQuestion}`).append(`<div class="row text-center">\
                                    <div class="col-md-12">\
                                         <a class="btn btn-block btn-success btnClic" id="a">${appQuiz.items.quesGeography[i].choices[0]}</a>\
                                    </div>\
                                    <div class="col-md-12">\
                                         <a class="btn btn-block btn-warning btnClic" id="b">${appQuiz.items.quesGeography[i].choices[1]}</a>\
                                    </div>\
                                    <div class="col-md-12">\
                                         <a class="btn btn-block btn-danger btnClic" id="c">${appQuiz.items.quesGeography[i].choices[2]}</a>\
                                    </div>\
                                </div>`);
        }
        $(".btnClic").click(function (e) {
            let $active = $('.wizard .nav-tabs li.active');
            $active.next().removeClass('disabled');
            appQuiz.nextTab($active);
            let answer = ($(this).text());
            appQuiz.items.userAnswers.push(answer);
            appQuiz.results();

        });
    },
    results: function () {
        // console.log(appQuiz.items.userAnswers[appQuiz.items.i]);
        //console.log(appQuiz.items.quesGeography[appQuiz.items.i].answer);
        if (appQuiz.items.userAnswers[appQuiz.items.i] == appQuiz.items.quesGeography[appQuiz.items.i].answer) {
            //console.log("Hola" + appQuiz.items.userAnswers[appQuiz.items.i]);
            appQuiz.items.score++;
            console.log(appQuiz.items.score);
            $("#results").append(`<div class="row text-center rowAnswers">\
                                    <div class="col-md-6 col-sm-6 col-xs-6">\
                                        <p class="colorRpta"><i class="fa fa-check-circle" aria-hidden="true"></i> ${appQuiz.items.userAnswers[appQuiz.items.i]}</p>\
                                    </div>\
                                    <div class="col-md-6 col-sm-6 col-xs-6">\
                                       <p class="colorRpta"><i class="fa fa-check-circle" aria-hidden="true"></i> ${appQuiz.items.quesGeography[appQuiz.items.i].answer}</p>\
                                    </div>\
                                </div>`);

        }
        else {
            // console.log("no es");
            $("#results").append(`<div class="row text-center rowAnswers">\
                                     <div class="col-md-6 col-sm-6 col-xs-6">\
                                        <p class="wrongRpta"><i class="fa fa-times-circle" aria-hidden="true"></i> ${appQuiz.items.userAnswers[appQuiz.items.i]}</p>\
                                     </div>\
                                     <div class="col-md-6 col-sm-6 col-xs-6">\
                                       <p class="colorRpta"><i class="fa fa-check-circle" aria-hidden="true"></i> ${appQuiz.items.quesGeography[appQuiz.items.i].answer}</p>\
                                    </div>\
                                 </div>`);

        }
        $(".colorRpta").css({ 'color': '#6aa55b', 'font-size': '1.3em' });
        $(".wrongRpta").css({ 'color': '#840909', 'font-size': '1.3em' });
        if (appQuiz.items.i == 4) {
            $("#results").append(`<div class="row text-center">\
                                <div class="col-md-12">\
                                     <p id="score">${appQuiz.items.score + "/5"}</p>\
                                </div>\
                              </div>`);
            $("#score").css({ 'color': '#1e316d', 'font-size': '1.5em' });
            /*HOME */
            $("#btnHome").show();
            $("#homebtn").click(function () {
                document.location.href = "index.html";
            });
            $("#next").click(function () {
                document.location.href = "level4.html";
            });

        }
        appQuiz.items.i++;
    },

    nextTab: function (elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
}

$(document).ready(appQuiz.init());
