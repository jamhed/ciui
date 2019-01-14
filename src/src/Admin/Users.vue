<template>
<b-container>
  <b-row>
    <b-col>Users</b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'admin-users',
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
