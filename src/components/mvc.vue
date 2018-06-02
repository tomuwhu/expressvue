<template>
  <div class="hello">
    <h1>{{
      msg
    }}</h1><hr>
    <div>
      <b-button :variant = "vt[x % vt.length]"
                @click   = "send()">Gomb {{
         x % vt.length
      }}</b-button>
    </div><hr>
    <pre><code>{{
      gombhtml
    }}</code></pre>
    <hr>
    <h2>{{
      x
    }}</h2>
    <div v-if = "error"
         style= "color:red;">Nincs szerverkommunikáció!</div>
  </div>
</template>

<script>
export default {
  name: 'mvc',
  data() {
    return {
      x: 1,
      error: '',
      vt: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'link',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-warning',
        'outline-danger'
      ]
    }
  },
  props: {
    msg: String
  },
  methods: {
    send() {
      this.axios
            .post(
              'http://localhost:3000',
              { a: 1 }
            )
            .then( resp => {
              this.error = ''
              this.x = resp.data.count
            } )
            .catch( err => {
              this.error = err
              this.x++
            }  )
    }
  },
  mounted() {
    this.axios
          .post(
            'http://localhost:3000',
            { a: 1 }
          )
          .then(
            resp => this.x = resp.data.count
          )
  },
  computed: {
    gombhtml() {
      return `<b-button variant = "${
        this.vt[
            this.x % this.vt.length
          ]
      }">Gomb ${
          this.x % this.vt.length
      }</b-button>`
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}
pre {
  color :white;
  background-color: #100501;
  padding: 20px;
}
</style>
