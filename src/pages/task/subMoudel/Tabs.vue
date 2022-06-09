<template>
    <div class="tabs">
      <nut-tabs
          color="#1E90FF"
          v-model="tabValue"
          class="test"
          background="#FFFFFF">
        <nut-tabpane title="征稿" style="padding: 0; width: 95%;margin-left: 10px">
          <task-model />
        </nut-tabpane>
        <nut-tabpane title="特邀任务">
          Tab 2
        </nut-tabpane>
        <nut-tabpane title="历史接单">
          Tab 3
        </nut-tabpane>
      </nut-tabs>
    </div>
</template>

<script>
import taskModel from "./taskModel";
export default {
  name: "Tabs",
  components:{
    taskModel
  },
  data() {
     return {
       tabValue:''
     }
  }
}
</script>

<style lang="scss" scoped>

</style>