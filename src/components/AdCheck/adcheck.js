import Vue from 'vue';

import template from './adcheck.html';

export default Vue.extend({
  template,

  data() {
    return {
    };
  },
  computed: {
  },
  created(){
  },
  methods: {
    addRow () {
      console.log('add Row')
      this.numberOfRows += 1
    },
    removeRow () {
      console.log('remove Row')
      this.numberOfRows -= 1
    }
  }
});
