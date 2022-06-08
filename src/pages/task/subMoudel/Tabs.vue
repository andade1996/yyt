<template>
  <nut-tabs
      color="#1E90FF"
      v-model="tabValue"
      background="#FFFFFF">
    <nut-tabpane title="征稿">
      Tab 1
    </nut-tabpane>
    <nut-tabpane title="特邀任务">
      Tab 2
    </nut-tabpane>
    <nut-tabpane title="历史接单">
      Tab 3
    </nut-tabpane>
  </nut-tabs>
</template>

<script>
export default {
  name: "Tabs",
  data() {
     return {
       tabValue:''
     }
  }
}
</script>

<style scoped>

</style>