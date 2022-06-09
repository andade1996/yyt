<template>
  <div class="search12">
    <nut-input v-model="buttonVal" clearable center  placeholder="请输入任务名称">
      <template #button>
        <nut-button style="background-color: #1E90FF" size="small" type="primary"> 搜索 </nut-button>
      </template>
    </nut-input>
  </div>
</template>

<script>
export default {
  name: "index",
  data () {
     return {
       buttonVal: ''
     }
  }
}
</script>

<style lang="scss" >
.search12{
  .nut-input{
     padding: 0;
     height: 30px;
   }

   .nut-input-border{
     border: 1px solid #1E90FF;
     border-radius: 25px;
     .nut-button{
       width: 70px;
       height: 30px;
       margin-left: 20px;
       border-top-right-radius: 20px;
       border-top-left-radius: 0;
       border-bottom-left-radius:0;
       position: relative;
       left: 1px;
     }
     .input-text {
        padding-left: 10px;
     }
     .nut-button--primary {
       background-color: #1E90FF;
     }
     .nut-button.nut-button--primary {
        background-color: #1E90FF;
     }
  }
}

</style>