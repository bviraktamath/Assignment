<template>
  <div>
    <h1>Api Data</h1>

    <div v-for="post in posts" :key="post.id">
      <p>{{ post.id }}, {{ post.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Weather",

  created() {
      this.getposts()
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getposts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
