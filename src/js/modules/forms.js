function forms (formMessage, formRegistration) {

    $(formMessage).submit(function(e) {                             // функция для работы с формой отправки сообщения админу (внизу сайта)
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/mailerMessage/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(this).find("textarea").val("");
            $('.overlay').removeClass("fadeOut");
            $('.overlay').css("display", "block");
            $('.overlay').addClass("fadeIn");

            setTimeout(() => {
                $('.overlay').removeClass("fadeIn");
                $('.overlay').addClass("fadeOut");
                setTimeout(() => {
                    $('.overlay').css("display", "none");
                }, 1000);
            }, 3000);  
            
            $(formMessage).trigger('reset');
        });
        return false;
    });

    $(formRegistration).submit(function(e) {                        // функция для работы с формой отправки сообщения пользователю с его регистрационными данными 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/mailerReg/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay').removeClass("fadeOut");
            $('.overlay').css("display", "block");
            $('.overlay').addClass("fadeIn");

            setTimeout(() => {
                $('.overlay').removeClass("fadeIn");
                $('.overlay').addClass("fadeOut");
                setTimeout(() => {
                    $('.overlay').css("display", "none");
                }, 1000);
            }, 3000);  
            
            $(formRegistration).trigger('reset');
        });
        return false;
    });

}

export default forms; 