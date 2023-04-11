<template>
  <div style="justify-content: space-between;align-items:center;display: flex">
    <Breadcrumb>
      <BreadcrumbItem to="/help">
        <Icon type="ios-home-outline"></Icon>
        帮助信息
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
  <el-divider style="margin-top: 15px"/>
  <div>
    <Row>
      <Col span="12" class="ivu-text-center">
        <Title :level="3">关于我们</Title>
      </Col>
      <Col span="12" class="ivu-text-center">
        <Title :level="3">帮助信息</Title>
      </Col>
    </Row>
  </div>
</template>

<script>


export default {
  name: 'HelpComponent',
  components: {}
}
</script>
