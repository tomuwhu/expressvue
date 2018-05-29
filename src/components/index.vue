<template>
  <div class="hello">
    <h1>{{ msg }}</h1><hr>
    <div>
      <b-button variant="success"
                @click="send">Gomb {{x}}</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mvc',
  data() {
    return {
      x: 1
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
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
