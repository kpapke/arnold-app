<template>
  <div id="signIn">
    <section>
      <div class="content">
        <div 
          :class="{ 'signup-form': !showLoginForm && !showForgotPassword }" 
          class="md-layout">
          <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <form 
              v-if="showLoginForm" 
              @submit.prevent>
              <md-card>
                <md-card-header data-background-color="green">
                  <h4 class="title">Welcome Back</h4>
                  <p class="category">Enter your email and password to sign in.</p>
                </md-card-header>
                <md-card-content>
                  <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-33">
                      <md-field>
                        <md-icon>email</md-icon>
                        <label>Email</label>
                        <md-input 
                          v-model.trim="loginForm.email" 
                          placeholder="you@email.com" 
                          required/>
                        <span class="md-error">There is an error</span>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                      <md-field>
                        <md-icon>lock</md-icon>
                        <label>Password</label>
                        <md-input 
                          v-model.trim="loginForm.password" 
                          placeholder="password" 
                          type="password" 
                          required/>
                        <span class="md-error">There is an error</span>
                      </md-field>
                    </div>
                  </div>
                            
                  <md-button 
                    :class="{ 'md-success': !performingRequest }"
                    :disabled="performingRequest"
                    @click="login">
                    <md-icon>vpn_key</md-icon> Sign In
                  </md-button>
                  <div class="extras">
                    <md-button 
                      class="md-flat md-sm md-simple" 
                      @click="togglePasswordReset">
                      Forgot Password
                    </md-button>
                    <md-button 
                      class="md-flat md-sm md-simple" 
                      @click="toggleForm">
                      Create Account
                    </md-button>
                  </div>
                </md-card-content>
              </md-card>
            </form>
            <form 
              v-if="!showLoginForm && !showForgotPassword" 
              @submit.prevent>
              <md-card>
                <md-card-header data-background-color="green">
                  <h4 class="title">Create Account</h4>
                  <p class="category">Enter your name, email and password to create an account.</p>
                </md-card-header>
                <md-card-content>
                  <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-33">
                      <md-field>
                        <md-icon>person</md-icon>
                        <label>Name</label>
                        <md-input 
                          v-model.trim="signupForm.name" 
                          placeholder="Your Name" 
                          required/>
                        <span class="md-error">There is an error</span>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                      <md-field>
                        <md-icon>email</md-icon>
                        <label>Email</label>
                        <md-input 
                          v-model.trim="signupForm.email" 
                          placeholder="you@email.com" 
                          required/>
                        <span class="md-error">There is an error</span>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                      <md-field>
                        <md-icon>lock</md-icon>
                        <label>Password</label>
                        <md-input 
                          v-model.trim="signupForm.password" 
                          placeholder="password" 
                          type="password" 
                          required/>
                        <span class="md-error">There is an error</span>
                      </md-field>
                    </div>
                  </div>
                            
                  <md-button 
                    :class="{ 'md-success': !performingRequest }"
                    :disabled="performingRequest"
                    @click="signup">
                    <md-icon>how_to_reg</md-icon> Sign Up
                  </md-button>
                  <div class="extras">
                    <md-button 
                      class="md-flat md-sm md-simple" 
                      @click="toggleForm">
                      Back to sign in
                    </md-button>
                  </div>
                </md-card-content>
              </md-card>
            </form>
            <form 
              v-if="showForgotPassword" 
              class="password-reset" 
              @submit.prevent>
              <div v-if="!passwordResetSuccess">
                <md-card>
                  <md-card-header data-background-color="green">
                    <h4 class="title">Forgot Password</h4>
                    <p class="category">Enter the email address registered with your profile.</p>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout">
                      <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                          <md-icon>email</md-icon>
                          <label>Email</label>
                          <md-input 
                            v-model.trim="passwordForm.email" 
                            placeholder="you@email.com" 
                            required/>
                          <span class="md-error">There is an error</span>
                        </md-field>
                      </div>
                    </div>

                    <md-button 
                      :class="{ 'md-success': !performingRequest }"
                      :disabled="performingRequest"
                      @click="resetPassword">
                      <md-icon>email</md-icon> Send Password Reset
                    </md-button>
                    <div class="extras">
                      <md-button 
                        class="md-flat md-sm md-simple" 
                        @click="togglePasswordReset">
                        Back to sign in
                      </md-button>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
              <div v-else>
                <md-card>
                  <md-card-header data-background-color="green">
                    <h4 class="title">Email Sent</h4>
                    <p class="category">Check your email for a link to reset your password</p>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout">
                      <md-button 
                        class="md-flat md-sm" 
                        @click="togglePasswordReset">Back to sign in</md-button>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
            </form>
          </div>
          <transition name="fade">
            <div 
              v-if="errorMsg !== ''" 
              class="error-msg">
              <p>{{ errorMsg }}</p>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const fb = require('../../store/firebaseConfig')

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: ''
      },
      passwordForm: {
        email: ''
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ''
    }
  },
  methods: {
    toggleForm() {
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    login() {
      this.performingRequest = true

      fb.auth
        .signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
        .then(user => {
          this.$store.commit('setCurrentUser', user.user)
          this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/dashboard')
          this.showToast('primary', `Signed in with ${user.user.email}`)
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    signup() {
      this.performingRequest = true

      fb.auth
        .createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password)
        .then(user => {
          this.$store.commit('setCurrentUser', user.user)

          // create user obj
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: this.signupForm.name
            })
            .then(() => {
              this.$store.dispatch('fetchUserProfile')
              this.performingRequest = false
              this.$router.push('/dashboard')
            })
            .catch(err => {
              console.log(err)
              this.performingRequest = false
              this.errorMsg = err.message
            })
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    resetPassword() {
      this.performingRequest = true

      fb.auth
        .sendPasswordResetEmail(this.passwordForm.email)
        .then(() => {
          this.performingRequest = false
          this.passwordResetSuccess = true
          this.passwordForm.email = ''
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    showToast(type, message) {
      this.$notify({
        message: message,
        icon: 'add_alert',
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: type
      })
    }
  }
}
</script>