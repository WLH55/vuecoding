<template>
  <div id="app">
    <!-- 头部组件 -->
    <HmHeader>
      <HmButton></HmButton>

    </HmHeader>
    <!-- 主体组件 -->
    <HmMain>
      <HmButton></HmButton>

    </HmMain>
    <!-- 底部组件 -->
    <HmFooter>
      <HmButton></HmButton>

    </HmFooter>


  </div>
</template>

<script>
import HmMain from "@/components/HmMain";
import HmFooter from "@/components/HmFooter";
import HmHeader from "@/components/HmHeader";
export default {

  components:{
    HmMain,
    HmHeader,
    HmFooter

  },

  created() {
    console.log('我是created')
  },
  methods:{
    fn(){
      alert('你好')
    }
  }

}
</script>

<style lang="less">
#app {

  width: 400px;
  height: 400px;
  background-color: #42b983;

}

#box{
  background-color: pink;
  width: 200px;
  height: 200px;
}
</style>
