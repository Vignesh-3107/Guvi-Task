$(document).ready(function () {
  $("#LoginBtn").click(function () {
    var UserData = {
      User: $("#userName").val(),
      Pswd: $("#pwd").val(),
    };
    console.log(UserData);
    $.ajax({
      type: "POST",
      url: "/php/login.php",
      data: $("#LoginForm").serialize(),
      success: function (res) {
        alert("Success!");
        if (res == 1) {
          window.location.href = "profile.html";
        }
      },
    }).fail(function () {
      $("#LoginForm").html('<div class="alert alert-danger">Server in Offline .<br> We could not reach server, please try again later.</div>');
    });

    return false;
  });
});
