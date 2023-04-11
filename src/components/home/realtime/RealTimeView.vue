<template>
  <div v-if="newsDto!==null">
    <div class="title">标题信息标题信息标题信息标题信息标题信息</div>
    <!-- 发布人 -->
    <div class="info-section" style="justify-content: center">
      <div class="info-section">
        <div class="label">发布人：</div>
        <div class="value">{{ newsDto.userDto.userName }}</div>
      </div>
      <span style="width: 15px"></span>
      <div class="info-section">
        <div class="label">发布时间：</div>
        <div class="value">{{ newsDto.gmtCreate }}</div>
      </div>
      <span style="width: 15px"></span>
      <div class="info-section">
        <div class="label">新闻分类：</div>
        <div class="value">{{ newsDto.newsCategoryDto.name }}</div>
      </div>
      <div class="info-section">
        <div class="label">信息编号：</div>
        <div class="value">{{ newsDto.id }}</div>
      </div>
    </div>
    <div style="margin: 20px 30px;font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {{ newsDto.content }}
    </div>
    <el-divider/>
    <CommentComponent :biz-id="newsDto.id" :biz-type="8"/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
// 例如：import uploadFile from '@/components/uploadFile/uploadFile'

import CommentComponent from "@/components/home/CommentComponent";

export default {
  name: 'RealTimeView',
  // import引入的组件需要注入到对象中才能使用
  components: {CommentComponent},
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  // 这里存放数据
  data() {
    return {
      newsDto: {
        "title": "这是一个很长很长的标题",
        "fileDto": {
          "fileName": "test_21da567c1c06",
          "filePath": "test_e1b182070546",
          "userId": 70,
          "fileType": 51,
          "id": 59,
          "gmtCreate": "2030-02-01 06:14:53",
          "gmtModified": "2032-05-31 14:59:14",
          "isActive": false
        },
        "description": "test_87ea271b9386",
        "content": "这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容这个是新闻内容内容内容",
        "userDto": {
          "userName": "管理员",
          "passWord": "test_39fc9cf832b0",
          "birthday": "2021-01-20 17:01:41",
          "sex": 16,
          "phone": "test_ad29954a4b5b",
          "email": "test_539f099831e4",
          "photoFileDto": {
            "fileName": "test_1c24e2084db7",
            "filePath": "test_f2bab3852138",
            "userId": 34,
            "fileType": 30,
            "id": 32,
            "gmtCreate": "2029-06-27 05:43:29",
            "gmtModified": "2021-02-01 13:54:23",
            "isActive": true
          },
          "cityDto": {
            "province": "test_a43dd5453a91",
            "city": "test_d57372a60655",
            "county": "test_f39677fdbdb6",
            "id": 93,
            "gmtCreate": "2020-11-26 04:15:13",
            "gmtModified": "2020-10-17 01:24:41",
            "isActive": true
          },
          "userCategoryDto": {
            "code": 49,
            "name": "test_765b5c43b3cd",
            "description": "test_3d2f12134bb9",
            "id": 67,
            "gmtCreate": "2022-06-20 18:23:17",
            "gmtModified": "2021-04-20 06:15:14",
            "isActive": false
          },
          "lastActiveTime": "2024-07-12 15:57:51",
          "isAdmin": true,
          "id": 51,
          "gmtCreate": "2031-05-03 20:51:28",
          "gmtModified": "2027-04-18 05:29:23",
          "isActive": false
        },
        "newsCategoryDto": {
          "name": "养宠趣闻",
          "description": "test_938779db90eb",
          "id": 48,
          "gmtCreate": "2019-08-06 02:51:46",
          "gmtModified": "2017-04-30 16:07:38",
          "isActive": false
        },
        "verifyDto": {
          "bizType": 80,
          "bizId": 65,
          "status": 69,
          "statusDesc": "test_61fa3dd813a4",
          "message": "test_f7a9932d9032",
          "createUserUserDto": {
            "userName": "test_3e0c910d238d",
            "passWord": "test_032caa2d1c9b",
            "birthday": "2027-09-29 08:06:07",
            "sex": 53,
            "phone": "test_00f43750aac5",
            "email": "test_9f0195a253f8",
            "photoFileDto": {
              "fileName": "test_37dc4fcf246b",
              "filePath": "test_ae45da201f2f",
              "userId": 22,
              "fileType": 7,
              "id": 21,
              "gmtCreate": "2028-08-25 22:09:51",
              "gmtModified": "2026-02-04 00:56:22",
              "isActive": true
            },
            "cityDto": {
              "province": "test_68028f499e2b",
              "city": "test_811e1ff456ca",
              "county": "test_9839ac62540d",
              "id": 59,
              "gmtCreate": "2015-10-07 10:15:06",
              "gmtModified": "2014-11-17 15:01:29",
              "isActive": false
            },
            "userCategoryDto": {
              "code": 71,
              "name": "test_1712f6a75e5b",
              "description": "test_1f480043f6a1",
              "id": 19,
              "gmtCreate": "2019-11-23 12:38:24",
              "gmtModified": "2025-05-05 16:11:13",
              "isActive": true
            },
            "lastActiveTime": "2021-01-24 19:17:21",
            "isAdmin": true,
            "id": 86,
            "gmtCreate": "2024-10-01 05:37:44",
            "gmtModified": "2015-05-09 13:56:00",
            "isActive": true
          },
          "verifyUserDto": {
            "userName": "test_1000e8fc799c",
            "passWord": "test_4051216974b0",
            "birthday": "2023-04-20 19:35:30",
            "sex": 28,
            "phone": "test_bf4836469d32",
            "email": "test_85cf53048b8f",
            "photoFileDto": {
              "fileName": "test_913f7ba75f62",
              "filePath": "test_54db53d72fc6",
              "userId": 74,
              "fileType": 62,
              "id": 93,
              "gmtCreate": "2020-05-19 14:24:06",
              "gmtModified": "2016-08-01 14:36:03",
              "isActive": false
            },
            "cityDto": {
              "province": "test_90e9254f80f0",
              "city": "test_e2fb1f26257c",
              "county": "test_4651858f1177",
              "id": 90,
              "gmtCreate": "2015-04-25 08:39:48",
              "gmtModified": "2019-04-25 00:37:40",
              "isActive": false
            },
            "userCategoryDto": {
              "code": 28,
              "name": "test_e4e9f26e3529",
              "description": "test_70c8409d215e",
              "id": 88,
              "gmtCreate": "2020-02-03 01:03:45",
              "gmtModified": "2021-09-19 22:34:19",
              "isActive": true
            },
            "lastActiveTime": "2019-06-12 01:58:42",
            "isAdmin": false,
            "id": 39,
            "gmtCreate": "2013-05-22 15:40:39",
            "gmtModified": "2030-07-15 23:55:48",
            "isActive": true
          },
          "id": 25,
          "gmtCreate": "2026-10-07 02:58:35",
          "gmtModified": "2030-01-01 19:22:23",
          "isActive": true
        },
        "id": 49,
        "gmtCreate": "2017-09-21 14:11:25",
        "gmtModified": "2021-09-30 08:07:37",
        "isActive": true
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 方法集合
  methods: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  // 生命周期 - 创建之前
  beforeCreate() {
  },
  // 生命周期 - 挂载之前
  beforeMount() {
  },
  // 生命周期 - 更新之前
  beforeUpdate() {
  },
  // 生命周期 - 更新之后
  updated() {
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {
  }
}
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: center;
  align-content: center;
  display: flex;
  color: #444444;
  align-items: center;
}

.info-section {
  display: flex;
}
</style>
