<div id="app" class="text-center">
   <b-input v-model="hv"></b-input><br>
   <b-btn variant="outline-danger" size="sm" @click="f">Valami</b-btn>
   <br><br><hr>
   <div style="text-align: left;width: 200px;background-color:#edfeff;border-radius: 5px;box-shadow: 1px 1px 5px;margin: 0 auto;">
   <ul>
    <li v-for="elem in sl">{{elem}}</li>
   </ul>
 </div>
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    hv: '',
    sl: []
  },
  methods: {
    f() {
      this.sl.push(this.hv)
      this.hv=''
    }
  }
})
</script>
