$(document).ready(function() {
    $('.submitted').hide();
    $("#submit").click(function() {
        $.ajax({
            url: "/robot",
            type: "POST",
            data: {
                title: $("#title").val(),
                content: $("#content").val()
            }
        }).always(function(resp) {
            var ans = resp.answer;
            $("#Answer_Content").css('background-color', ans)
            $("#Answer_Content_Text").text("This should be the '" + ans + "' party.")
            setTimeout(function() {
                $('.submitted').show();
                $('#Wait').modal('hide');
            }, 1000)
        })
    })
    $(".reply_send").click(function() {
        $.ajax({
            url: "/result",
            type: "POST",
            data: {
                result: $(this).attr("code")
            }
        }).always(function(resp) {
            setTimeout(function() {
                $('#Reply').modal('hide');
                $('#IDK').modal('show');
                $("#some_text").text(resp);
            }, 1000)
        })
    })
    $("#Finish").click(function() {
        $('#IDK').modal('hide');
        setTimeout(function() {
            history.go(0)
        }, 0)
    })
})