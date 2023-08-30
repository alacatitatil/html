$(document).ready(function () {

    $(document).on("click",".heart-button .heart-icon",function() {
        $(this).toggleClass("fas");
        $(this).toggleClass("far");
    });

    $("#search-input").click(function () {
        $("#otel_box").fadeIn(200);
        $(".graybg").fadeIn(200);
        $("#search-input").val("");
    });

    $("#search-country").click(function () {
        $("#country_box").fadeIn(200);
        $(".graybg").fadeIn(200);
        $("#search-country").html("Ülke Seç");
        $("#search-country-in").val("");
    });

    $("#search-region").click(function () {
        $("#region_box").fadeIn(200);
        $(".graybg").fadeIn(200);
       // $("#search-region").val("");
    });

    $(".graybg").click(function () {
        $(".autocomplete-result").fadeOut(200);
        $(".graybg").fadeOut(200);
    });

    $("#location li").click(function () {
        $("#search-input").val($(this).attr('data-parent'));
        $(".autocomplete-result").fadeOut(200);
        $(".graybg").fadeOut(200);
    });

    $("#ul_country li").click(function () {
        $("#search-country").html($(this).attr('data-parent'));
        $("#search-country-in").val($(this).attr('data-parent'));
        $(".autocomplete-result").fadeOut(200);
        $(".graybg").fadeOut(200);
        $("#search-region").html("Bölge Seç");
        $("#search-region-in").val("");
        GetTourRegion($(this).attr('data-target'));
    });

    $("#ul_region li").click(function () {
        $("#search-region").val($(this).attr('data-parent'));
        $(".autocomplete-result").fadeOut(200);
        $(".graybg").fadeOut(200);

    });

    $("#otel_kisi_txt").click(function () {
        $("#otel_kisi_box").fadeIn(200);
        $(".graybg").fadeIn(200);
        $("#otel_kisi_txt").val("");
    });

    $("#ok_max_btn").click(function () {
        var c = $("#otel_cocuk_sayisi").val();
        var get_count = Number($("#otel_kisi_sayisi").val());
        var t = get_count + 1;
        $("#otel_kisi_sayisi").val(t);
        if (c == 0) {
            $("#otel_kisi_txt").val(t + " Yetişkin");
        } else {
            $("#otel_kisi_txt").val(t + " Yetişkin " + c + " Çocuk");
        }

    });

    $("#ok_min_btn").click(function () {
        var c = $("#otel_cocuk_sayisi").val();
        var get_count = Number($("#otel_kisi_sayisi").val());
        var t = get_count - 1;
        if (t <= 1) {
            t = 1;
        }
        $("#otel_kisi_sayisi").val(t);
        if (c == 0) {
            $("#otel_kisi_txt").val(t + " Yetişkin");
        } else {
            $("#otel_kisi_txt").val(t + " Yetişkin " + c + " Çocuk");
        }
    });

    $("#oc_max_btn").click(function () {
        var y = $("#otel_kisi_sayisi").val();
        var get_count = Number($("#otel_cocuk_sayisi").val());
        var t = get_count + 1;
        $("#otel_cocuk_sayisi").val(t);
        if (t == 0) {
            $("#otel_kisi_txt").val(y + " Yetişkin");
        } else {
            $("#otel_kisi_txt").val(y + " Yetişkin " + t + " Çocuk");
        }
    });

    $("#oc_min_btn").click(function () {
        var y = $("#otel_kisi_sayisi").val();
        var get_count = Number($("#otel_cocuk_sayisi").val());
        var t = get_count - 1;
        if (t <= 0) {
            t = 0;
        }
        $("#otel_cocuk_sayisi").val(t);
        if (t == 0) {
            $("#otel_kisi_txt").val(y + " Yetişkin");
        } else {
            $("#otel_kisi_txt").val(y + " Yetişkin " + t + " Çocuk");
        }
    });


    $("#villa_kisi_txt").click(function () {
        $("#villa_kisi_box").fadeIn(200);
        $(".graybg").fadeIn(200);
        $("#villa_kisi_txt").val("");
    });


    $("#vk_max_btn").click(function () {
        var c = $("#villa_cocuk_sayisi").val();
        var get_count = Number($("#villa_kisi_sayisi").val());
        var t = get_count + 1;
        $("#villa_kisi_sayisi").val(t);
        if (c == 0) {
            $("#villa_kisi_txt").val(t + " Yetişkin");
        } else {
            $("#villa_kisi_txt").val(t + " Yetişkin " + c + " Çocuk");
        }

    });

    $("#vk_min_btn").click(function () {
        var c = $("#villa_cocuk_sayisi").val();
        var get_count = Number($("#villa_kisi_sayisi").val());
        var t = get_count - 1;
        if (t <= 1) {
            t = 1;
        }
        $("#villa_kisi_sayisi").val(t);
        if (c == 0) {
            $("#villa_kisi_txt").val(t + " Yetişkin");
        } else {
            $("#villa_kisi_txt").val(t + " Yetişkin " + c + " Çocuk");
        }
    });

    $("#vc_max_btn").click(function () {
        var y = $("#villa_kisi_sayisi").val();
        var get_count = Number($("#villa_cocuk_sayisi").val());
        var t = get_count + 1;
        $("#villa_cocuk_sayisi").val(t);
        if (t == 0) {
            $("#villa_kisi_txt").val(t + " Yetişkin");
        } else {
            $("#villa_kisi_txt").val(y + " Yetişkin " + t + " Çocuk");
        }

    });

    $("#vc_min_btn").click(function () {
        var y = $("#villa_kisi_sayisi").val();
        var get_count = Number($("#villa_cocuk_sayisi").val());
        var t = get_count - 1;
        if (t <= 0) {
            t = 0;
        }
        $("#villa_cocuk_sayisi").val(t);
        if (t == 0) {
            $("#villa_kisi_txt").val(y + " Yetişkin");
        } else {
            $("#villa_kisi_txt").val(y + " Yetişkin " + t + " Çocuk");
        }
    });

});


function ShowVideo(id) {
    var l = $("#" + id).attr('data-parent');
    $("#iframe").attr('src', l);
}

function GetRoom(id) {
    for (i=0;i<=100;i++) {
        $("#g-list").trigger('remove.owl.carousel', i );
    }

    $("#modal-title").text($("#" + id).attr("data-title"));
    var list = $("#" + id).attr("data-list").split("|");
    var li = "";
    var g_list = $("#" + id).attr("data-g").split("|");
    var gallery = "";
    for (var x = 0; x < list.length-1; x++) {
        li += '<li style="flex: 0 0 50%; max-width: 50%;"><img src="assets/images/checked.png" style="width:20px; height:20px; margin-right:10px;">' + list[x] + '</li>';
    }
    $("#l-list").html(li);
    $("#m2").text($("#" + id).attr("data-m"));
    for (var x = 0; x < g_list.length-1; x++) {
        $('#g-list').trigger('add.owl.carousel', ['<div class="item"><div style="background:url(assets/images/hotel/rooms/'+g_list[x]+') center; background-size:cover; height:250px; width:100%;"></div></div>']).trigger('refresh.owl.carousel');
    }
}

function GetTourRegion(cid){
    $("#c_id").val(cid);
    $("#ul_region").html("");
    $.ajax({
        type: "POST",
        url: '../../main-callback.php',
        data: {
          getTourRegion: cid
        },
        success: function(data) {
            const obj = JSON.parse(data);
            for (var i = 0; i < obj.reg.length; i++) {
                $("#ul_region").append('<li onclick="closeRegion(\''+obj.reg[i].id+'\',\''+obj.reg[i].name+'\')"><span>'+obj.reg[i].name+'</span></li>');
            }

        },
      });
}

function closeRegion(id,reg){
    $("#search-region").html(reg);
    $("#search-region-in").val(reg);
    $(".autocomplete-result").fadeOut(200);
    $(".graybg").fadeOut(200);
    $("#r_id").val(id);
}


function FacebookLogin(id,fname,lname,mail){
    $.ajax({
        type: "POST",
        url: '../../main-callback.php',
        data: {
            getFacebookLogin: "1",
            id:id,
            fname:fname,
            lname:lname,
            mail:mail
        },
        success: function(data) {
            console.log(data);
            if(data == "0") {
                console.log(data);
            } else{
                FB.logout(function(response) {
                    document.location.reload();
                });
                location.href="https://www.alacatitatil.com";
            }
        },
      });
}
