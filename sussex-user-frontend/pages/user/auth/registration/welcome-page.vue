<template>
  <div class="page page-center">
    <div class="container container-narrow">
      <div>
        <div class="text-center pt-5">
          <a href="../../profile" class="navbar-brand navbar-brand-autodark">
            Moxy-logo
          </a>
        </div>
        <div class="card card-md mt-4 d-flex justify-content-center align-items-center" style="width: 100%;height: 30rem">
          <div class="mx-5 ms-5 justify-content-center align-items-center">
            <h2 class="text-center">Welcome to Moxybase, {{ $auth.user.first_name }}</h2>
            <p class="text-center">Let's get started by setting up your profile.</p>
            <div class="mt-5">
              <NuxtLink to="/user/auth/registration/education-steps" class="btn btn-primary w-100">LET'S GO</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "welcome-page",

  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
.steps-counter{
  width: 100%;
  margin: 2rem auto;
}
</style>
