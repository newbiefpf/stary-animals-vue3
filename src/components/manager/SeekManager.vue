<template>
  <div>
    <Table :loading="loading" border height="650" size="small" :columns="columns" :data="data" width="1050">
      <!-- 标题-->
      <template #title="{ row }">
        <Ellipsis :text="row.title" :lines="1" tooltip @click="this.push('/seek/view?id='+row.id)"
                  style="color: #2b85e4;user-select: none"/>
      </template>
      <!-- 描述-->
      <template #description="{ row }">
        <Ellipsis :text="row.description" :lines="1" tooltip/>
      </template>
      <!-- 宠类-->
      <template #animalCategory="{ row }">
        <Ellipsis :text="row.animalCategoryDto.name" :lines="1" tooltip/>
      </template>
      <!-- 用户信息 -->
      <template #userInfo="{ row }">
        <Ellipsis :text="row.userDto.userName" :lines="1" tooltip/>
      </template>
      <!-- 用户信息 -->
      <template #gmtCreate="{ row }">
        <Ellipsis :text="row.gmtCreate" :lines="1" tooltip/>
      </template>
      <!-- 供求 -->
      <template #type="{ row }">
        <span :style="row.type?'color:green':'color:red'">
        {{ row.type ? '寻宠' : '寻主人' }}
        </span>
      </template>
      <!-- 审核状态 -->
      <template #verifyInfo="{ row }">
        {{ row.verifyDto.statusDesc }}
      </template>
      <!-- 操作 -->
      <template #action="{ row, index }">
        <Button v-if="Math.random() > 0.5" type="primary" size="small" @click="remove(index)">通过</Button>
        <Button v-else type="error" size="small" @click="remove(index)">下架</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import {seekListByUserId} from "@/http/api/seekApi";

export default {
  name: 'SeekManagerComponent',
  components: {},
  data() {
    return {
      loading: true,
      columns: [
        {
          "title": "标题",
          "width": 200,
          "slot": "title"
        },
        {
          "title": "描述",
          "width": 240,
          "slot": "description"
        },
        {
          "title": "宠类",
          "width": 80,
          "slot": "animalCategory"
        },
        {
          "title": "类型",
          "width": 90,
          "align": "center",
          "slot": "type"
        },
        {
          "title": "发布人",
          "width": 130,
          "slot": "userInfo"
        },
        {
          "title": "发布时间",
          "slot": "gmtCreate"
        },
        {
          "title": "审核状态",
          "width": 90,
          "align": "center",
          "slot": "verifyInfo"
        },
        {
          "title": "操作",
          "slot": "action",
          "width": 80,
          "align": "center"
        }
      ],
      data: []
    }
  },
  methods: {
    InitData() {
      console.log(123123)
      seekListByUserId(1, 20)
          .then(data => {
            this.data = data.content
            this.loading = false
          })
    },
    push(model) {
      window.open(model)
    },
    remove(index) {
      this.data.splice(index, 1);
    }
  },
  beforeCreate() {
    //页面初始化
    this.$nextTick(() => {
      this.InitData();
    });
  }
}
</script>
