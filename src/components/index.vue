<template>
  <div class="hello">
    <h1>{{ msg }}</h1><hr>
    <div>
      <b-button :variant="vt[x % vt.length]"
                @click="send">Gomb {{ x % vt.length }}</b-button>
    </div><hr>
    <pre><code>&ltb-button variant = "{{ vt[x % vt.length] }}"&gtGomb{{ x % vt.length }}&lt/b-button&gt</code></pre>
    <hr>
    {{ x }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mvc',
  data() {
    return {
      x: 1,
      vt: ['primary','secondary','success','warning','danger','link','outline-primary', 'outline-secondary', 'outline-success', 'outline-warning', 'outline-danger']
    }
  },
  props: {
    msg: String
  },
  methods: {
    send() {
      axios
        .post('http://localhost:3000',{ a: 1 })
        .then(resp => this.x=resp.data.count)
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
</style>
