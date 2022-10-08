$(document).ready(function () {
  const loginForm = `<form action="">
    <div class="input_content">
        <input type="text" class="input-login_register" placeholder="Email" required>
        <hr>
        <input type="password" class="input-login_register" placeholder="Password" required>
        <hr>
    </div>
    <div class="remember_pass">
        <input type="checkbox" value="1" id="checkboxOneInput" />
        <label for="checkboxOneInput"></label>
        <p class="rmb">Remember me</p>
    </div>
    <button class="login_in login_register"><a href="">SIGN IN</a> </button>
    <a href="#" class="forgot_password"> Have you forgotten your password?</a>
  
  </form>`;
  const registerForm = `<form action="">
    <div class="input_content">
        <input type="text" class="input-login_register" placeholder="Email" required>
        <hr>
        <input type="password" class="input-login_register" placeholder="Password" required>
        <hr>
        <input type="password" class="input-login_register" placeholder="Password" required>
        <hr>
       
    </div>
    <div class="remember_pass">
        <input type="checkbox" value="1" id="checkboxOneInput" />
        <label for="checkboxOneInput"></label>
        <p class="rmb">Remember me</p>
    </div>
    <button class="login_in login_register"><a href="">SIGN IN</a> </button>
    <a href="#" class="forgot_password"> Have you forgotten your password?</a>
  
  </form>`;
  const state = {
    page: 1,
  };
  $("#account_form").html(loginForm);
  $(".account-btn").click(function () {
    const data = $(this).data("type");
    if (data == 1) {
      removeBackgroud();
      $(this).addClass("bg-white");
      $("#account_form").html(loginForm);
    } else {
      removeBackgroud();
      $(this).addClass("bg-white");
      $("#account_form").html(registerForm);
    }
  });

  const removeBackgroud = function () {
    $(".account-btn").removeClass("bg-white");
  };
});
