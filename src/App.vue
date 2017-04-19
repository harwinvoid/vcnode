<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
body,
button,
p,
pre,
ul {
  margin: 0;
  padding: 0;
}




/**动画**/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.user__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>
