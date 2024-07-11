function validate_url(url) {
            
    var youtube = url.search("youtu");
    var vimeo = url.search("vimeo");
    var soundcloud = url.search("soundcloud");
    var metacafe = url.search("metacafe");
    var dailymotion = url.search("dailymotion");
    
    if((youtube != -1) || (vimeo != -1) || (soundcloud != -1) || (metacafe != -1) || (dailymotion != -1))
    {
        if(youtube != -1) { var type = 'youtube'; }
        if(vimeo != -1) { var type = 'vimeo' ; }
        if(soundcloud != -1) { var type = 'soundcloud'; }
        if(metacafe != -1) { var type = 'metacafe'; }
        if(dailymotion != -1) { var type = 'dailymotion'; }
        return type;
    } else {
        return false;
    }
}

function videoPreview(value, url) {
    var valid = validate_url(value)
    if (!valid) {
        alert("Enter Youtube/Vimeo/Soundcloud/Metacafe/Dailymotion url");
        $("#video").focus();
        return;
    }
    $(".videos").remove();
    var video_url = value
    var url_type = "youtube";
    var dataString = 'video=' + video_url + '&url_type=' + valid;
    $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        cache: false,
        success: function (a) {
            $('#video').parent().append(a);
        }
    });
}