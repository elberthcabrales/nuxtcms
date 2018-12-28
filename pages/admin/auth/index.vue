<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="box">
          <figure class="avatar">
            <img src="https://avatars2.githubusercontent.com/u/8602093?s=128&v=4">
          </figure>

          <form @submit.prevent="submit">
            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="email"
                  v-model="email"
                  placeholder="Your Email"
                  autofocus
                >
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="password"
                  v-model="password"
                  placeholder="Your Password"
                >
              </div>
            </div>
            <button class="button is-block is-info is-large is-fullwidth" >Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("authenticateUser", {
          email: this.email,
          password: this.password
        })
    }
  },
  beforeMount() {
    this.$store.dispatch("verifyTokenExp")
  },
};
</script>
<style>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
