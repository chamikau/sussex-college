<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mb-4">
        <a class="navbar-brand navbar-brand-autodark" href=".">
          <!--          <img alt="" height="36" src='~/assets/Logo_primary.png'>-->
          Moxy-Logo
        </a>
      </div>
      <form class="card card-md" @submit.prevent=sendResetLink>
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Reset password</h2>
          <!--          <div v-if="password_reset_form.message" class="alert alert-danger" role="alert">-->
          <!--            {{ password_reset_form.message }}-->
          <!--          </div>-->

          <div class="mb-3">
            <label class="form-label">Password</label>
            <div class="input-group input-group-flat">
              <input v-model="password_reset_form.fields.password"
                     :class="[password_reset_form.errors.password ? 'is-invalid' : '']" :type="password_reset_form.password_show?'text':'password'"
                     autocomplete="off"
                     class="form-control" placeholder="Password"
                     @input="clearValidationPasswordError">
              <span class="input-group-text">
                  <a class="link-secondary" data-bs-toggle="tooltip"
                     href="#" title="Show password" @click.prevent="passwordVisibilityToggle('password')"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg v-if="password_reset_form.password_show" class="icon" fill="none"
                         height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                         width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"
                                                                             stroke="none"/><circle cx="12" cy="12"
                                                                                                    r="2"/><path
                      d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"/></svg>
                    <svg v-else class="icon icon-tabler icon-tabler-eye-off" fill="none"
                         height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                         width="24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                       <line x1="3" x2="21" y1="3" y2="21"></line>
                       <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                       <path
                         d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                    </svg>
                  </a>
                </span>
              <div v-if="password_reset_form.errors.password" class="invalid-feedback">{{
                  password_reset_form.errors.password[0]
                }}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password Confirmation</label>
            <div class="input-group input-group-flat">
              <input v-model="password_reset_form.fields.password_confirmation"
                     :class="[password_reset_form.errors.password_confirmation ? 'is-invalid' : '']" :type="password_reset_form.password_confirmation_show?'text':'password'"
                     autocomplete="off"
                     class="form-control" placeholder="Password"
                     @input="clearValidationConfirmationPasswordError">
              <span class="input-group-text">
                  <a class="link-secondary" data-bs-toggle="tooltip"
                     href="#" title="Show password" @click.prevent="passwordVisibilityToggle('password_confirmation')"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg v-if="password_reset_form.password_confirmation_show" class="icon"
                         fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z"
                                                                                                 fill="none"
                                                                                                 stroke="none"/><circle cx="12"
                                                                                                                        cy="12"
                                                                                                                        r="2"/><path
                      d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"/></svg>
                    <svg v-else class="icon icon-tabler icon-tabler-eye-off" fill="none"
                         height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                         width="24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                       <line x1="3" x2="21" y1="3" y2="21"></line>
                       <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                       <path
                         d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                    </svg>
                  </a>
                </span>
              <div v-if="password_reset_form.errors.password_confirmation" class="invalid-feedback">
                {{ password_reset_form.errors.password_confirmation[0] }}
              </div>
            </div>
          </div>

          <div class="form-footer">
            <button class="btn btn-primary w-100" type="submit">
              <!-- Download SVG icon from http://tabler-icons.io/i/mail -->
              <svg class="icon" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                <rect height="14" rx="2" width="18" x="3" y="5"/>
                <polyline points="3 7 12 13 21 7"/>
              </svg>
              Change Password
            </button>
          </div>
        </div>
      </form>
      <div class="text-center text-muted mt-3">
        Forget it,
        <NuxtLink to="login">send me back</NuxtLink>
        to the sign in screen.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  auth: 'guest',
  data() {
    return {
      password_reset_form: {
        fields: {
          password: '',
          password_confirmation: '',
          token: '',
          email: '',
        },
        errors: [],
        message: '',
        password_show: false,
        password_confirmation_show: false
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
    this.password_reset_form.fields.token = this.$route.query.token;
    this.password_reset_form.fields.email = this.$route.query.email;
  },
  methods: {
    clearValidationPasswordError() {
      this.password_reset_form.errors.password = false;
    },
    clearValidationConfirmationPasswordError() {
      this.password_reset_form.errors.password_confirmation = false;
    },
    async sendResetLink() {
      try {
        await this.$axios.$get('sanctum/csrf-cookie')
        await this.$axios.$post('reset-password?portal=student', this.password_reset_form.fields)

        // await this.$auth.loginWith('laravelSanctum', {
        //   data: this.password_reset_form.fields
        // })
        await this.$auth.loginWith('cookie', {
          data: this.password_reset_form.fields
        })
        this.$toast.success('Success!')
      } catch (error) {
        this.$errorToast('Error: Invalid')
        this.password_reset_form.errors = error.response.data.errors
        this.password_reset_form.message = error.response.data.message
      }
    },
    passwordVisibilityToggle(type) {
      switch (type) {
        case 'password':
          this.password_reset_form.password_show = !this.password_reset_form.password_show;
          break
        case 'password_confirmation' :
          this.password_reset_form.password_confirmation_show = !this.password_reset_form.password_confirmation_show;
          break
      }

    }
  }
}
</script>

<style scoped>

</style>
