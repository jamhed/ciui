<template>
<b-container>
  <b-row>
    <b-col><button @click="onBuild" class="btn btn-primary pointer">Build</button></b-col>
  </b-row>
  <b-row>
    <b-col>Data</b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'user-build',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    onBuild: async function () {
      await this.$api.pmfa('ws_user', 'build', [])
    }
  }
}
</script>
