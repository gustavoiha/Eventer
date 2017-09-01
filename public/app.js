
/**
*** Author: Gustavo Iha
**/

new Vue({
  el: '#app',

  data: {
    user: {
      name: "",
      email: "",
      emailConfirm: ""
    }
  },

  methods: {

    // Send subscription information to server
    submit: function(){
      console.log(this.user);
    }
  }
});
