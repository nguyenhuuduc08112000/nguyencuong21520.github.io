const components = {
  signUp: `
  <section class="sign-up-container">
    <form class="form-sign-up">
      <div class="form-header">
          <h3>MindX Chat</h3>
      </div>
      <div class="form-content">
        <div class="name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstname" placeholder="Firstname">
            <div id="firstname-error" class="message-error"></div>
          </div>
          <div class="input-wrapper">
            <input type="text" name="lastname" placeholder="Lastname">
            <div id="lastname-error" class="message-error"></div>
          </div>
        </div>
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Email">
          <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password">
          <div id="password-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="Confirm password">
          <div id="confirm-password-error" class="message-error"></div>
        </div>
        <div id="sign-up-error" class="message-error"></div>
        <div id="sign-up-success" class="message-success"></div>
      </div>
      <div class="form-footer">
        <a id="form-sign-up-link" href="#">Already have an account? Login</a>
        <button id="form-sign-up-btn" type="submit">Register</button>
      </div>
    </form>
  </section>
  `,
  signIn: `
  <section class="sign-in-container">
    <form class="form-sign-in">
      <div class="form-header">
          <h3>MindX Chat</h3>
      </div>
      <div class="form-content">
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Email">
          <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password" >
          <div id="password-error" class="message-error"></div>
        </div>
      </div>
      <div class="form-footer">
        <a id="form-sign-in-link" href="#">Not yet have an account? Register</a>
        <button type="submit">Sign in</button>
      </div>
    </form>
  </section>
  `
}