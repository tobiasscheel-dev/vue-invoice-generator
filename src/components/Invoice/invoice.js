import Vue from 'vue';

import template from './invoice.html';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
      postsFilter: '',
      posts: []
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
    fetchPosts(){
      console.log('fresh D')
    },

    // Methods for transitions
    handleBeforeEnter(el) {
      el.style.opacity = 0;
      el.classList.add('animated');
    },

    handleEnter(el) {
      const delay = el.dataset.index * animationDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.add(animation);
      }, delay);
    }
  }
});
