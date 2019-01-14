<template>
<b-container>
  <b-row>
    <b-col>
      <div class="form">
        <div style="margin-top:20px">
          <button @click="onCommit" class="btn btn-primary pointer">Commit</button>
          <button @click="onCancel" class="btn btn-outline-primary float-right pointer">Cancel</button>
        </div>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'user-profile',
  components: {
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    query: async function () {
      this.user = await this.$api.pmfa('ws_user', 'get', [])
    },
    onCommit: async function () {
      try {
        await this.$api.pmfa('ws_user', 'update', [this.user])
        this.$router.go(-1) // eslint-disable-next-line
      }
      catch (error) {
        this.$notify({ title: 'Data error:', text: error, type: 'error' })
      }
    },
    onCancel () {
      this.$router.go(-1)
    }
  },
  created () {
    this.query()
  }
}
</script>
