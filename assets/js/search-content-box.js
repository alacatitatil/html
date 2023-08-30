var separator = ' - ',
        dateFormat = 'DD.MM.YYYY';
    var options = {
        autoUpdateInput: false,
        autoApply: true,
        locale: {
            format: dateFormat,
            separator: separator,
            "daysOfWeek": [
                "Pz",
                "Pt",
                "Sl",
                "Çr",
                "Pr",
                "Cm",
                "Ct"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
        },
        minDate: moment().add(0, 'days'),
        maxDate: moment().add(365, 'days'),
        opens: "right",

    };


    $('[data-datepicker=separateRange]')
        .daterangepicker(options)
        .on('apply.daterangepicker', function(ev, picker) {
            var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
            var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;

            var mainName = this.name.replace('value_from_start_', '');
            if (boolEnd) {
                mainName = this.name.replace('value_from_end_', '');
                $(this).closest('form').find('[name=value_from_end_' + mainName + ']').blur();
            }

            $(this).closest('form').find('[name=value_from_start_' + mainName + ']').val(picker.startDate.format(dateFormat));
            $(this).closest('form').find('[name=value_from_end_' + mainName + ']').val(picker.endDate.format(dateFormat));

            $(this).trigger('change').trigger('keyup');
        })
        .on('show.daterangepicker', function(ev, picker) {
            var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
            var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;
            var mainName = this.name.replace('value_from_start_', '');
            if (boolEnd) {
                mainName = this.name.replace('value_from_end_', '');
            }

            var startDate = $(this).closest('form').find('[name=value_from_start_' + mainName + ']').val();
            var endDate = $(this).closest('form').find('[name=value_from_end_' + mainName + ']').val();

            $('[name=daterangepicker_start]').val(startDate).trigger('change').trigger('keyup');
            $('[name=daterangepicker_end]').val(endDate).trigger('change').trigger('keyup');

            if (boolEnd) {
                $('[name=daterangepicker_end]').focus();
            }
        });
</script>

<div class="mb-3" id="ageofchild1" style="display: none;">
    <label>Çocuğun yaşı:</label>
    <select id="first_child_age" name="ageofchild1" aria-label="">
        <option <?php if ($firstChildAge == 0) {
                    echo "selected";
                } ?>value="0">0</option>
        <option <?php if ($firstChildAge == 1) {
                    echo "selected";
                } ?> value="1">1</option>
        <option <?php if ($firstChildAge == 2) {
                    echo "selected";
                } ?> value="2">2</option>
        <option <?php if ($firstChildAge == 3) {
                    echo "selected";
                } ?> value="3">3</option>
        <option <?php if ($firstChildAge == 4) {
                    echo "selected";
                } ?> value="4">4</option>
        <option <?php if ($firstChildAge == 5) {
                    echo "selected";
                } ?> value="5">5</option>
        <option <?php if ($firstChildAge == 6) {
                    echo "selected";
                } ?> value="6">6</option>
        <option <?php if ($firstChildAge == 7) {
                    echo "selected";
                } ?> value="7">7</option>
        <option <?php if ($firstChildAge == 8) {
                    echo "selected";
                } ?> value="8">8</option>
        <option <?php if ($firstChildAge == 9) {
                    echo "selected";
                } ?> value="9">9</option>
        <option <?php if ($firstChildAge == 10) {
                    echo "selected";
                } ?> value="10">10</option>
        <option <?php if ($firstChildAge == 11) {
                    echo "selected";
                } ?> value="11">11</option>
        <option <?php if ($firstChildAge == 12) {
                    echo "selected";
                } ?> value="12">12</option>
        <option <?php if ($firstChildAge == 13) {
                    echo "selected";
                } ?> value="13">13</option>
        <option <?php if ($firstChildAge == 14) {
                    echo "selected";
                } ?> value="14">14</option>
        <option <?php if ($firstChildAge == 15) {
                    echo "selected";
                } ?> value="15">15</option>
        <option <?php if ($firstChildAge == 16) {
                    echo "selected";
                } ?> value="16">16</option>
        <option <?php if ($firstChildAge == 17) {
                    echo "selected";
                } ?> value="17">17</option>
    </select>

</div>

<div class="mb-3" id="ageofchild2" style="display: none;">
    <label>Çocuğun yaşı:</label>
    <select id="second_child_age" name="ageofchild2" aria-label="">
        <option <?php if ($secondChildAge == 0) {
                    echo "selected";
                } ?>value="0">0</option>
        <option <?php if ($secondChildAge == 1) {
                    echo "selected";
                } ?> value="1">1</option>
        <option <?php if ($secondChildAge == 2) {
                    echo "selected";
                } ?> value="2">2</option>
        <option <?php if ($secondChildAge == 3) {
                    echo "selected";
                } ?> value="3">3</option>
        <option <?php if ($secondChildAge == 4) {
                    echo "selected";
                } ?> value="4">4</option>
        <option <?php if ($secondChildAge == 5) {
                    echo "selected";
                } ?> value="5">5</option>
        <option <?php if ($secondChildAge == 6) {
                    echo "selected";
                } ?> value="6">6</option>
        <option <?php if ($secondChildAge == 7) {
                    echo "selected";
                } ?> value="7">7</option>
        <option <?php if ($secondChildAge == 8) {
                    echo "selected";
                } ?> value="8">8</option>
        <option <?php if ($secondChildAge == 9) {
                    echo "selected";
                } ?> value="9">9</option>
        <option <?php if ($secondChildAge == 10) {
                    echo "selected";
                } ?> value="10">10</option>
        <option <?php if ($secondChildAge == 11) {
                    echo "selected";
                } ?> value="11">11</option>
        <option <?php if ($secondChildAge == 12) {
                    echo "selected";
                } ?> value="12">12</option>
        <option <?php if ($secondChildAge == 13) {
                    echo "selected";
                } ?> value="13">13</option>
        <option <?php if ($secondChildAge == 14) {
                    echo "selected";
                } ?> value="14">14</option>
        <option <?php if ($secondChildAge == 15) {
                    echo "selected";
                } ?> value="15">15</option>
        <option <?php if ($secondChildAge == 16) {
                    echo "selected";
                } ?> value="16">16</option>
        <option <?php if ($secondChildAge == 17) {
                    echo "selected";
                } ?> value="17">17</option>
    </select>

</div>

<div class="mb-3" id="ageofchild3" style="display: none;">
    <label>Çocuğun yaşı:</label>
    <select id="third_child_age" name="ageofchild3" aria-label="">
        <option <?php if ($thirdChildAge == 0) {
                    echo "selected";
                } ?>value="0">0</option>
        <option <?php if ($thirdChildAge == 1) {
                    echo "selected";
                } ?> value="1">1</option>
        <option <?php if ($thirdChildAge == 2) {
                    echo "selected";
                } ?> value="2">2</option>
        <option <?php if ($thirdChildAge == 3) {
                    echo "selected";
                } ?> value="3">3</option>
        <option <?php if ($thirdChildAge == 4) {
                    echo "selected";
                } ?> value="4">4</option>
        <option <?php if ($thirdChildAge == 5) {
                    echo "selected";
                } ?> value="5">5</option>
        <option <?php if ($thirdChildAge == 6) {
                    echo "selected";
                } ?> value="6">6</option>
        <option <?php if ($thirdChildAge == 7) {
                    echo "selected";
                } ?> value="7">7</option>
        <option <?php if ($thirdChildAge == 8) {
                    echo "selected";
                } ?> value="8">8</option>
        <option <?php if ($thirdChildAge == 9) {
                    echo "selected";
                } ?> value="9">9</option>
        <option <?php if ($thirdChildAge == 10) {
                    echo "selected";
                } ?> value="10">10</option>
        <option <?php if ($thirdChildAge == 11) {
                    echo "selected";
                } ?> value="11">11</option>
        <option <?php if ($thirdChildAge == 12) {
                    echo "selected";
                } ?> value="12">12</option>
        <option <?php if ($thirdChildAge == 13) {
                    echo "selected";
                } ?> value="13">13</option>
        <option <?php if ($thirdChildAge == 14) {
                    echo "selected";
                } ?> value="14">14</option>
        <option <?php if ($thirdChildAge == 15) {
                    echo "selected";
                } ?> value="15">15</option>
        <option <?php if ($thirdChildAge == 16) {
                    echo "selected";
                } ?> value="16">16</option>
        <option <?php if ($thirdChildAge == 17) {
                    echo "selected";
                } ?> value="17">17</option>
    </select>
</div>

<div class="mb-3" id="ageofchild4" style="display: none;">
    <label>Çocuğun yaşı:</label>
    <select id="fourth_child_age" name="ageofchild4" aria-label="">
        <option <?php if ($fourthChildAge == 0) {
                    echo "selected";
                } ?>value="0">0</option>
        <option <?php if ($fourthChildAge == 1) {
                    echo "selected";
                } ?> value="1">1</option>
        <option <?php if ($fourthChildAge == 2) {
                    echo "selected";
                } ?> value="2">2</option>
        <option <?php if ($fourthChildAge == 3) {
                    echo "selected";
                } ?> value="3">3</option>
        <option <?php if ($fourthChildAge == 4) {
                    echo "selected";
                } ?> value="4">4</option>
        <option <?php if ($fourthChildAge == 5) {
                    echo "selected";
                } ?> value="5">5</option>
        <option <?php if ($fourthChildAge == 6) {
                    echo "selected";
                } ?> value="6">6</option>
        <option <?php if ($fourthChildAge == 7) {
                    echo "selected";
                } ?> value="7">7</option>
        <option <?php if ($fourthChildAge == 8) {
                    echo "selected";
                } ?> value="8">8</option>
        <option <?php if ($fourthChildAge == 9) {
                    echo "selected";
                } ?> value="9">9</option>
        <option <?php if ($fourthChildAge == 10) {
                    echo "selected";
                } ?> value="10">10</option>
        <option <?php if ($fourthChildAge == 11) {
                    echo "selected";
                } ?> value="11">11</option>
        <option <?php if ($fourthChildAge == 12) {
                    echo "selected";
                } ?> value="12">12</option>
        <option <?php if ($fourthChildAge == 13) {
                    echo "selected";
                } ?> value="13">13</option>
        <option <?php if ($fourthChildAge == 14) {
                    echo "selected";
                } ?> value="14">14</option>
        <option <?php if ($fourthChildAge == 15) {
                    echo "selected";
                } ?> value="15">15</option>
        <option <?php if ($fourthChildAge == 16) {
                    echo "selected";
                } ?> value="16">16</option>
        <option <?php if ($fourthChildAge == 17) {
                    echo "selected";
                } ?> value="17">17</option>
    </select>

</div>

<div class="mb-3" id="ageofchild5" style="display: none;">
    <label>Çocuğun yaşı:</label>
    <select id="fifth_child_age" name="ageofchild5" aria-label="">
        <option <?php if ($fifthChildAge == 0) {
                    echo "selected";
                } ?>value="0">0</option>
        <option <?php if ($fifthChildAge == 1) {
                    echo "selected";
                } ?> value="1">1</option>
        <option <?php if ($fifthChildAge == 2) {
                    echo "selected";
                } ?> value="2">2</option>
        <option <?php if ($fifthChildAge == 3) {
                    echo "selected";
                } ?> value="3">3</option>
        <option <?php if ($fifthChildAge == 4) {
                    echo "selected";
                } ?> value="4">4</option>
        <option <?php if ($fifthChildAge == 5) {
                    echo "selected";
                } ?> value="5">5</option>
        <option <?php if ($fifthChildAge == 6) {
                    echo "selected";
                } ?> value="6">6</option>
        <option <?php if ($fifthChildAge == 7) {
                    echo "selected";
                } ?> value="7">7</option>
        <option <?php if ($fifthChildAge == 8) {
                    echo "selected";
                } ?> value="8">8</option>
        <option <?php if ($fifthChildAge == 9) {
                    echo "selected";
                } ?> value="9">9</option>
        <option <?php if ($fifthChildAge == 10) {
                    echo "selected";
                } ?> value="10">10</option>
        <option <?php if ($fifthChildAge == 11) {
                    echo "selected";
                } ?> value="11">11</option>
        <option <?php if ($fifthChildAge == 12) {
                    echo "selected";
                } ?> value="12">12</option>
        <option <?php if ($fifthChildAge == 13) {
                    echo "selected";
                } ?> value="13">13</option>
        <option <?php if ($fifthChildAge == 14) {
                    echo "selected";
                } ?> value="14">14</option>
        <option <?php if ($fifthChildAge == 15) {
                    echo "selected";
                } ?> value="15">15</option>
        <option <?php if ($fifthChildAge == 16) {
                    echo "selected";
                } ?> value="16">16</option>
        <option <?php if ($fifthChildAge == 17) {
                    echo "selected";
                } ?> value="17">17</option>
    </select>

</div>


<script type="text/javascript">
    function changeadultNumber(action) {
        var yetiskin_sayisi = parseInt(document.getElementById("otel_kisi_sayisi").value) + 1;

        console.log("yetiskin");

        if (action == "substraction") {
            yetiskin_sayisi = yetiskin_sayisi - 2;

            if (yetiskin_sayisi == 1 || yetiskin_sayisi < 1) {
                document.getElementById("ok_min_btn").style.display = "none";
            } else if ((yetiskin_sayisi < 6) && (document.getElementById("ok_max_btn").style.display = "none")) {
                document.getElementById("ok_max_btn").style.display = null;
            }

        } else if (action == "add") {
            if (yetiskin_sayisi >= 1) {
                document.getElementById("ok_min_btn").style.display = null;
            }

            if (yetiskin_sayisi == 6) {
                document.getElementById("ok_max_btn").style.display = "none";
            }
        }

    }


    function changechildNumber(action) {
        var cocuk_sayisi = parseInt(document.getElementById("otel_cocuk_sayisi").value) + 1;

        if (action == "substraction") {

            cocuk_sayisi = cocuk_sayisi - 2;

            if (cocuk_sayisi == 0 || cocuk_sayisi < 0) {
                document.getElementById("oc_min_btn").style.display = "none";
            } else if (cocuk_sayisi > 0 || cocuk_sayisi < 5) {
                document.getElementById("oc_max_btn").style.display = null;
            }
            if (cocuk_sayisi == 0) {
                document.getElementById("ageofchild1").style.display = "none";
            } else if (cocuk_sayisi == 1) {
                document.getElementById("ageofchild2").style.display = "none";
            } else if (cocuk_sayisi == 2) {
                document.getElementById("ageofchild3").style.display = "none";
            } else if (cocuk_sayisi == 3) {
                document.getElementById("ageofchild4").style.display = "none";
            } else if (cocuk_sayisi == 4) {
                document.getElementById("ageofchild5").style.display = "none";
            }

        } else if (action = "add") {
            if (cocuk_sayisi == 1) {
                document.getElementById("oc_min_btn").style.display = null;
                document.getElementById("ageofchild1").style.display = null;
            } else if (cocuk_sayisi == 2) {
                document.getElementById("ageofchild1").style.display = null;
                document.getElementById("ageofchild2").style.display = null;
            } else if (cocuk_sayisi == 3) {
                document.getElementById("ageofchild1").style.display = null;
                document.getElementById("ageofchild2").style.display = null;
                document.getElementById("ageofchild3").style.display = null;
            } else if (cocuk_sayisi == 4) {
                document.getElementById("ageofchild1").style.display = null;
                document.getElementById("ageofchild2").style.display = null;
                document.getElementById("ageofchild3").style.display = null;
                document.getElementById("ageofchild4").style.display = null;
            } else if (cocuk_sayisi == 5) {
                document.getElementById("ageofchild1").style.display = null;
                document.getElementById("ageofchild2").style.display = null;
                document.getElementById("ageofchild3").style.display = null;
                document.getElementById("ageofchild4").style.display = null;
                document.getElementById("ageofchild5").style.display = null;
                document.getElementById("oc_max_btn").style.display = "none";
            }
        }
    }