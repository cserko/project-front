<template>
  <div>
    <div class="container">
      <div class="header">
        <nav>Home Side</nav>
      </div>
      
      <div class="main">
        <!--<div class="post" v-for="blog in blogs" :key="blog.id"></div>-->
        <div class="post" v-for="post in posts.posts" :key="post.id">
          <div
            class="parallax"
            :style="{
              backgroundImage: 'url(' + imgPath(post.coverPicture) + ')',
            }"
            alt="cover image"
          />
          <div class="title">
            <h1>{{ post.title }}</h1>
            <h3>By {{ post.author }}</h3>
            <h4>At {{ post.date }}</h4>
          </div>
          <div class="content" v-html="post.content"></div>
        </div>
      </div>
    </div>
    <Paginator v-on:fetch="fetch" class="footer" :postCount="posts.postCount"/>
  </div>
</template>

<script>
import Paginator from "./Paginator";

export default {
  components: {
    Paginator
  },
  data() {
    return {
    };
  },
  props: ["posts"],
  methods: {
    imgPath(img) {
      console.log(img);
      console.log(require("../assets/" + img));
      return require("../assets/" + img);
    },
    fetch(query){
      this.$emit('fetch', query);
    },
  }
  
};
</script>


<style scoped>
.container {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}
.header {
  grid-column: 1 / 4;
}
.sidebar {
  grid-column: 3 / 4;
}
.main {
  grid-column: 1 / 3;
}
.footer {
  grid-column: 1 / 4;
}
.post {
  justify-items: center;
  border-style:  outset;
}
.post .content {
  padding-left: 10%;
  padding-right: 10%;
}
.post .parallax {
  /* Set a specific height */
  border-radius: 8px;
  height: 500px;
  max-width: 100%;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.post .title {
  margin: 5em 5em 5em 5em;
}
.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
</style>