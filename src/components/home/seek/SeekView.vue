<template>
  <div class="left-section" style="margin-bottom: 50px" v-if="seekDto!==null">
    <!-- 标题 -->
    <div class="title">
          <span :style="{'color': seekDto.type?'#ff1818':'#19be6b','font-size':'26px'}">[{{
              seekDto.type ? '寻宠' : '寻主人'
            }}]</span> {{ seekDto.title }}
      <SeekStatusComponent :status="seekDto.status"/>
    </div>
    <!-- 发布人 -->
    <div class="info-section" style="background-color: #f5f5f5">
      <div class="info-section">
        <div class="label">发布人：</div>
        <div class="value">{{ seekDto.userDto.userName }}</div>
      </div>
      <span style="width: 30px"></span>
      <div class="info-section">
        <div class="label">发布时间：</div>
        <div class="value">{{ seekDto.gmtCreate }}</div>
      </div>
      <span style="width: 70px"></span>
      <div class="info-section">
        <div class="label">信息编号：</div>
        <div class="value">{{ seekDto.id }}</div>
      </div>
    </div>
    <!-- 图片和信息 -->
    <div class="info-section" style="margin-top: 10px;">
      <div style="width: 500px">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="item in seekDto.imgFiles" :key="item.id">
            <img :src="item.filePath" alt="" style="width: 100%; height: 300px; object-fit: contain;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="margin-left: 20px;display:flex;flex-wrap: wrap;width:700px;align-content: space-between;">
        <div class="info-section" style="width: 100%">
          <div class="label">酬金：</div>
          <div class="value">{{ seekDto.money }}元</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">年龄：</div>
          <div class="value">{{ seekDto.age }}</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">宠物分类：</div>
          <div class="value">{{ seekDto.animalCategoryDto.name }}</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">宠物性别：</div>
          <div class="value">{{ seekDto.sex === 0 ? '公' : '母' }}</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">联系人：</div>
          <div class="value">{{ seekDto.personName }}</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">手机号：</div>
          <div class="value">{{ seekDto.phone }}</div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">城市：</div>
          <div class="value">
            {{ seekDto.cityDto.province }}/
            {{ seekDto.cityDto.city }}/
            {{ seekDto.cityDto.county }}
          </div>
        </div>
        <div class="info-section" style="width: 100%">
          <div class="label">详细位置：</div>
          <div class="value">{{ seekDto.address }}</div>
        </div>
      </div>
    </div>
    <!-- 详细信息 -->
    <div style="margin-top: 20px;">
      <div>
        <el-text tag="b" style="font-size: 20px;color: orange">描述信息</el-text>
      </div>
      <el-text style="font-size: 20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {{ seekDto.description }}
      </el-text>
    </div>
  </div>
  <CommentComponent v-if="seekDto!==null" :biz-id="seekDto.id" :biz-type="2"/>
</template>

<script>
import CommentComponent from "@/components/home/CommentComponent";
import {seekById} from "@/http/api/seekApi";
import {ElLoading} from 'element-plus';
import SeekStatusComponent from "@/components/home/seek/SeekStatusComponent";

export default {
  name: 'SeekView',
  components: {SeekStatusComponent, CommentComponent},
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      loadingInstance: null,
      seekDto: null
    }
  },
  methods: {
    InitData() {
      //页面初始化
      this.loadingInstance = ElLoading.service();
      seekById(this.id)
          .then(data => {
            this.seekDto = data
            this.loadingInstance.close();
          })
    }
  },
  beforeCreate() {
    this.$nextTick(() => {
      this.InitData()
    });
  }
};
</script>

<style scoped>
.info-section {
  display: flex;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

</style>
