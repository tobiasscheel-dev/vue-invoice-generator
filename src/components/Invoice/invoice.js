import Vue from 'vue';

import template from './invoice.html';

export default Vue.extend({
  template,

  data() {
    return {
      postsFilter: '',
      posts: [],
      numberOfRows: 1
    };
  },

  computed: {
    filteredPosts() {
      return this.posts.filter((post) => post.title.toLowerCase().indexOf(this.postsFilter.toLowerCase()) !== -1);
    }
  },

  created(){
    this.fetchPosts();
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
