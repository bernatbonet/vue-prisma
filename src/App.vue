<template>
  <div id="app">
    <app-header></app-header>
      <div class="defaultHeight">
        <router-view></router-view>
      </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0479f1;
  margin-top: 60px;
}
</style>
