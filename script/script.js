$(function () {

    /* 체크박스 유효성 검사 시작 */
    $("button").click(function () {
        var chkYN = $("#chkAgree").prop("checked");
        // YN = Yes / No
        //        $("#res").text("chkYN : " + chkYN);

        var msg = "";

        if (chkYN == true) {
            msg = "유효성 검사를 통과했습니다.";
        } else {
            msg = "체크사항은 필수입니다!";
        }
        $("#res").text(msg);

    });
    /* 체크박스 유효성 검사 끝 */


    /* 체크박스 동기화 시작*/
    $("#wholeChk").click(function () {

        var chkYN = $(this).prop("checked");


        if (chkYN == true) {
            $(".subChkbox").prop("checked", "true");
        } else if (chkYN == false) {
            document.getElementById("chk1").checked = false;
            document.getElementById("chk2").checked = false;
            document.getElementById("chk3").checked = false;
            document.getElementById("chk4").checked = false;
        }

        //        $(".subChkbox").prop("checked", "true");

        /* 2. 하위 체크박스 체크 => 전체동의 체크여부 결정 */
        $(".subChkbox").click(function () {
            var chk1 = $("#chk1").prop("checked");
            var chk2 = $("#chk2").prop("checked");
            var chk3 = $("#chk3").prop("checked");
            var chk4 = $("#chk4").prop("checked");

            if (chk1 && chk2 && chk3 && chk4) {
                $(".subChkbox").prop("checked", "true");
            } else {
                document.getElementById("wholeChk").checked = false;
            }

        });

    });
    /* 체크박스 동기화 끝*/


});
