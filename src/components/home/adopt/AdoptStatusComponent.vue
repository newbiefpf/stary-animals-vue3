<template>
  <el-text class="ivu-fr" :style="{'background-color':  status === 0 || status===2 ? 'red' :
            status === 1 || status === 3? 'green' : '#c5c8ce','border-radius': '3px','padding':'1px 3px','color': 'white'}">
    {{
      status === 0 ? '待送养' :
          status === 1 ? '已送养' :
              status === 2 ? '待领养' :
                  status === 3 ? '已领养' : '已放弃'
    }}
  </el-text>
</template>
<script>
export default {
  name: 'AdoptStatusComponent',
  props: {
    status: {
      type: Number,
      default() {
        return 4
      }
    }
  }
}
</script>
