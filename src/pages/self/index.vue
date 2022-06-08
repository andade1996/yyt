<template>
  <div class="template-m-wrap">
    {{ count }}
    <br />
    <button @click="click">加 1</button>
  </div>
</template>
<script>
export default {
  name: "TemplateM",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
};
</script>
<style scoped>

</style>