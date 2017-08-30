$(document).ready(function() {

	//E-mail Ajax Send
	$("#contact").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
	//Вывод окна с оповещением классом visible после отправки
      $(".success").addClass("visible");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
	//сброс формы и закрытие окна
        $(".success").removeClass("visible");
        $.fancybox.close();
      }, 3500);
    });
    return false;
  });

});
