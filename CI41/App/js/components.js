const components ={
    signUp:`<section class="sign-up-container">
    <form class="form-sign-up">
        <div class="form-header">
            <h3>Em Iu Đăng Kí Tài Khoản Đi</h3>
        </div>
        <div class="form-content">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" name="firstname" placeholder="Fristname">
                    <div id="firstname-error" class="message-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="lastname"placeholder="Lastname">
                    <div id="lasttname-error" class="message-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email"placeholder="Email">
                <div id="email-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password"placeholder="Password" required>
                <div id="passWord1-error" class="message-error"></div>
                </div>
            <div class="input-wrapper">
                <input type="password" name="confirmPassword"placeholder="Confirm Password">
                <div id="passWord-error" class="message-error"></div>
            </div>
            <div id="sign-up-error" class="message-error"></div>
            <div id="sign-up-success" class="message-success"></div>
        </div>
        <div class="form-footer">
            <a id="form-sign-up-link" href="#">Already have an account? Login</a>
            <button id="form-sign-up-btn" class ="aaa" type="submit">Register</button>
            <!-- <button type="reset">aaaa</button> -->
        </div>

    </form>
</section>
    `,
    signIn:`<section class="sign-in-container">
    <form class="form-sign-in">
        <div class="form-header">
            <h3>Hello Vợ Iu</h3>
        </div>
        <div class="form-content">
            <div class="input-wrapper">
                <input type="email" name="email"placeholder="Email">
                <div id="email-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password"placeholder="PassWord">
                <div id="firstname-error" class="message-error"></div>
            </div>
            <div id="sign-in-error" class="message-error"></div>
            
        </div>
        <div class="form-footer">
                <a id="form-sign-in-link" href="#">Not yet have a account? Register</a>
                <button id="form-sign-in-btn" class="aaa"type="submit">Login</button>
                <!-- <button type="reset">aaaa</button> -->
        </div>
        
    </form>
</section>`,
    chat:`<nav class="main-nav" id="nav">
    
</nav>   
     <section class="chat-container">
    <!-- aside-left -->
    <div class="aside-left">
            <div class="list-conversation">
                
            </div>
            <form class="form-add-conversation">
                <div class="input-wrapper">
                    <input type="text" name="title" placeholder="New Conversation">
                    <div id ="title-error" class="message-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="friendEmail" placeholder="Your Friend Email">
                    <div id ="friend-email-error" class="message-error"></div>
                </div>
                <!-- <i class="fas fa-acorn"></i> -->
                <button class="btn-icon" type="submit">Add Conversation</button>
            </form>
        </div>
    <div class="current-conversation">
        <div class="list-message-chat">
            
        </div>
        <form class="form-add-message-chat">
            <div class="input-wrapper">
                <input type="text" name="message" placeholder="Enter Your Message...">
            </div>
            <button id="aaa" class="aaa" type="submit">Send</button>
        </form>
    </div>
    <!-- aside-right -->
    <div class="aside-right">
            <div class="details-current-conversation">
                
            </div>
            <div class='btn-leave-conversation-wapper'>
                <button id="btn-leave-conversation" class="btn-icon">
                    Leave
                </button>
            </div>
        </div>
</section>`
}