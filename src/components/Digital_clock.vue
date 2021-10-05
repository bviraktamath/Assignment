<template>
 <div class="container">
       <h1>digital Clock</h1>

  <div>{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</div>
</div>
</template>





<script>
const date = new Date();
export default {
  name: "Digital_clock",
  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>