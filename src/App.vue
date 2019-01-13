<template>
<div>
  <transition name="app" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
