<template>
  <div>
    <Table :loading="loading" border height="650" size="small" :columns="columns" :data="data" width="1050">
      <!-- 标题-->
      <template #title="{ row }">
        <Ellipsis :text="row.title" :lines="1" tooltip @click="this.push('/adopt/view?id='+row.id)" style="color: #2b85e4;user-select: none"/>
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
      <template #supply="{ row }">
        <span :style="row.supply===0?'color:green':'color:red'">
        {{ row.supply === 0 ? '领养' : '送养' }}
        </span>
      </template>
      <!-- 审核状态 -->
      <template #verifyInfo="{ row }">
        {{ row.verifyDto.statusDesc }}
      </template>
      <!-- 操作 -->
      <template #action="{ row, index }">
        <span v-if="Math.random() > 0.5">
          <Button v-if="isAdmin" type="primary" size="small" @click="remove(index)">通过</Button>
          <Button v-else type="primary" size="small" @click="remove(index)">删除</Button>
        </span>
        <Button v-else type="error" size="small" @click="remove(index)">下架</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import {adoptListByUserId} from "@/http/api/adoptApi";
import {mapGetters} from "vuex";
export default {
  name: 'AdoptManagerComponent',
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
          "width": 100,
          "slot": "animalCategory"
        },
        {
          "title": "供求",
          "width": 70,
          "align": "center",
          "slot": "supply"
        },
        {
          "title": "发布人",
          "width": 100,
          "slot": "userInfo"
        },
        {
          "title": "发布时间",
          "width": 150,
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
      adoptListByUserId(1, 20)
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
  computed: {
    ...mapGetters(['isAdmin'])
  },
  beforeCreate() {
    //页面初始化
    this.$nextTick(() => {
      this.InitData();
    });
  }
}
</script>
