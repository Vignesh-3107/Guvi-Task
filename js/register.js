$(document).ready(function () {
  $("#SubmitBtn").click(function () {
    var formData = {
      FirstName: $("#FirstName").val(),
      LastName: $("#LastName").val(),
      UserName: $("#UserName").val(),
      Email: $("#Email").val(),
      Password: $("#Password").val(),
    };
    console.log(formData);
    $.ajax({
      type: "POST",
      url: "/php/register.php",
      data: $("#RegisterForm").serialize(),
      success: function () {
        alert("Success!");
      },
    }).fail(function () {
      $("#RegisterForm").html('<div class="alert alert-danger">Server in Offline .<br> We could not reach server, please try again later.</div>');
    });

    return false;
  });
});
