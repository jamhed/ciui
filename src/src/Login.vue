<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-5">
      <div class="row">
        <div class="col">
          <h2>Login:</h2>
        </div>
      </div>
      <div class="form-signin">
        <div class="form-group">
          <label for="inputLogin">Name:</label>
          <input id="inputLogin" v-model="login" v-on:keyup.enter="onSubmit" type="text" class="form-control" placeholder="Login" required="true" autofocus="true">
        </div>
        <div class="form-group">
          <label for="inputPassword">Password:</label>
          <input id="inputPassword" v-model="password" v-on:keyup.enter="onSubmit" type="password" class="form-control" placeholder="Password" required="true">
        </div>
        <div class="form-check">
          <input type="checkbox" id="checkbox" v-model="remember">
          <label class="form-check-label" for="checkbox">Remember me</label>
        </div>
        <div class="row justify-content-end">
          <div class="col-auto">
            <button class="btn btn-primary pointer" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: '',
      password: '',
      remember: false
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
