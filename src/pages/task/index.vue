<template>
  <div class="tabs">
    <not-tice-bar/>
    <tabs/>
  </div>

</template>
<script>
import NotTiceBar from "./subMoudel/NotTiceBar";
import Tabs from "./subMoudel/Tabs";
export default {
  name: "TemplateM",
  components:{
    NotTiceBar,
    Tabs
  },
  data() {
    return {
      tabValue:''
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
};
</script>
<style lang="scss">
.tabs{
    .active{
      color: #1E90FF !important;
    }

}
</style>
