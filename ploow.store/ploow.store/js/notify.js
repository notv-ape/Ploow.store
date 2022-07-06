var n = false;

function notify(text, type) {
    if (n == false) {
        n = true;

        if (type == "error") {
            $(document.body).append('<div id="notify" class="dashboard-error">' + text + '</div>');
        } else if (type == "success") {
            $(document.body).append('<div id="notify" class="dashboard-success">' + text + '</div>');
        } else {
            $(document.body).append('<div id="notify" class="dashboard-info">' + text + '</div>');
        }

        setTimeout(function() {
            $('#notify').fadeOut(300, function() {
                $(this).remove();
                n = false;
            });
        }, 4000)

    }


}