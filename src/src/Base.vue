<script>
import moment from 'moment'

export default {
  data () {
    return {
      date: null
    }
  },
  methods: {
    userName () {
      return this.$session.user()['name']
    },
    logout () {
      this.$api.pmfa('ws_user', 'logout', [])
    }
  },
  created () {
    this.date = new Date()
    setInterval(() => { this.date = new Date() }, 1000)
  },
  filters: {
    filterDate: function (date) {
      return moment(date).format('ddd[,] Do MMM YYYY[,] HH:mm:ss')
    }
  }
}
</script>
