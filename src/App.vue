<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite + husky + eslint + ant-design-vue + router4"
  />
  <router-link to="/page1" class="link">
    <a-button type="primary">goto page1</a-button>
  </router-link>
  <router-link to="/page2">
    <a-button type="primary">goto page2</a-button>
  </router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss" scoped>
.link {
  margin-right: 8px;
}
</style>
