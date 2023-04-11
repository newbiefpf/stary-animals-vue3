<template>
  <div style="justify-content: space-between;align-items:center;display: flex">
    <Breadcrumb>
      <BreadcrumbItem to="/realTimeInfo">
        <Icon type="ios-home-outline"></Icon>
        资讯信息
      </BreadcrumbItem>
    </Breadcrumb>
    <div class="ivu-fr" style="display: flex">
      <!--      <Button type="primary">发布帖子</Button>-->
    </div>
  </div>
  <el-divider style="margin-top: 15px"/>
  <el-tabs v-model="chooseType" type="card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="全部" name="全部"/>
    <el-tab-pane label="热点" name="热点"/>
    <el-tab-pane label="趣闻" name="趣闻"/>
    <el-tab-pane label="知识" name="知识"/>
    <el-tab-pane label="图集" name="图集"/>
    <el-tab-pane label="社区" name="社区"/>
  </el-tabs>
  <div v-for="item in newInfos">
    <div style="background:#f8f8f8;padding: 4px" @click="push('/realtime_view?id='+item.id)">
      <Card>
        <div style="display: flex">
          <img :src="item.url" style="max-width: 180px">
          <div class="ivu-ml-16">
            <ul style="list-style: none">
              <li style="font-size: 20px"><b>{{ item.title }}</b></li>
              <li class="ivu-mb-8 ivu-mt-4 description">
                {{ item.description }}{{ item.description }}{{ item.description }}
              </li>
              <li style="position: absolute;bottom: 10px">
                作者：{{ item.author }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                分类：{{ item.type }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                发布时间：{{ item.time }}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>


import router from "@/router";

export default {
  name: 'RealTime',
  components: {},
  data() {
    return {
      chooseType: '全部',
      newInfos: [
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          title: '这是标题信息这是标题信息这是标题信息这是标题信息',
          author: '这是作者',
          type: '热点',
          description: '这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息',
          time: '2023年3月18日23:49:35'
        }
      ]
    }
  },
  methods: {
    handleClick(tag) {

    },
    push(model) {
      router.push(model)
    }
  }
}
</script>

<style>
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding-right: 30px;
  color: #888;
}
</style>
