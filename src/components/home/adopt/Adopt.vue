<template>
  <div>
    <div style="justify-content: space-between;align-items:center;display: flex">
      <Breadcrumb>
        <BreadcrumbItem to="/adopt">
          <Icon type="ios-home-outline"></Icon>
          领养信息
        </BreadcrumbItem>
      </Breadcrumb>
      <div class="ivu-fr" style="display: flex">
        <Button type="primary" @click="push('/adopt_publish')">发布领养</Button>
      </div>
    </div>
    <el-divider style="margin-top: 15px"/>
    <Row>
      <Col span="1" class="ivu-text-center" style="margin-top: 6px">区县：</Col>
      <Col span="23">
        <TagSelect v-model="chooseCity">
          <TagSelectOption v-for="item in cityArray" :name="item">{{ item }}</TagSelectOption>
        </TagSelect>
      </Col>
    </Row>
    <Row class-name="ivu-mt-8">
      <Col span="1" class="ivu-text-center" style="margin-top: 6px">宠类：</Col>
      <Col span="23">
        <!--        expandable-->
        <TagSelect v-model="chooseCategory">
          <TagSelectOption v-for="item in categoryArray" :name="item">{{ item }}</TagSelectOption>
        </TagSelect>
      </Col>
    </Row>
    <Row class-name="ivu-mt-8">
      <Col span="1" class="ivu-text-center" style="margin-top: 6px">供求：</Col>
      <Col span="23">
        <!--        expandable-->
        <TagSelect v-model="chooseType">
          <TagSelectOption v-for="item in typeArray" :name="item">{{ item }}</TagSelectOption>
        </TagSelect>
      </Col>
    </Row>
    <!--    最新信息-->
    <Tabs value="name1" class="ivu-mt-16" :animated="true">
      <TabPane icon="ios-information-circle" label="最新信息" name="name1">
        <div class="cardContainer">
          <div style="background:#f8f8f8;padding: 3px;width: 650px" v-for="item in infoArray">
            <Card :bordered="false" @click="push('/adopt_view?id='+item.id)">
              <div style="display: flex">
                <img :src="item.url" style="max-width: 160px">
                <div class="ivu-ml-16">
                  <ul style="list-style: none">
                    <li class="title">
                      <b v-if="item.type===1" style="color: #19be6b">[领养]</b>
                      <b v-else style="color: #ed4014">[送养]</b>
                      <b>{{ item.title }}</b>
                    </li>
                    <li class="ivu-mb-8 ivu-mt-4 description">
                      {{ item.description }}{{ item.description }}{{ item.description }}
                    </li>
                    <li style="position: absolute;bottom: 10px;width: 420px">
                      <el-text>宠类：{{ item.category }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        区县：{{ item.city }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        时间：{{ item.time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </el-text>
                      <AdoptStatusComponent :status="item.status"/>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </TabPane>
      <!--      已搞定-->
      <TabPane icon="ios-checkmark-circle" label="已搞定" name="name2">
        <div class="cardContainer">
          <div style="background:#f8f8f8;padding: 3px;width: 650px" v-for="item in infoArray">
            <Card :bordered="false">
              <div style="display: flex">
                <img :src="item.url" style="max-width: 160px">
                <div class="ivu-ml-16">
                  <ul style="list-style: none">
                    <li class="title">
                      <b>{{ item.title }}</b>
                    </li>
                    <li class="ivu-mb-8 ivu-mt-4 description">
                      {{ item.description }}{{ item.description }}{{ item.description }}
                    </li>
                    <li style="position: absolute;bottom: 10px;width: 420px">
                      <el-text>宠类：{{ item.category }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        区县：{{ item.city }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        时间：{{ item.time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </el-text>
                      <el-text class="ivu-fr"
                               :style="{'background-color': item.status === 3||item.status === 4 ?'#19be6b':'#c5c8ce','border-radius': '2px',color: 'white',}">
                        {{ item.status === 3 ? '已领养' : item.status === 4 ? '已送养' : '放弃了' }}
                      </el-text>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>


import router from "@/router";
import AdoptStatusComponent from "@/components/home/adopt/AdoptStatusComponent";

export default {
  name: 'AdoptComponent',
  components: {AdoptStatusComponent},
  data() {
    // "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区"
    return {
      chooseCity: ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区"],
      chooseCategory: ["狗狗", "猫咪", "鸟", "鱼", "小宠", "其他"],
      chooseType: ["送养", "领养"],
      cityArray: ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区"],
      categoryArray: ["狗狗", "猫咪", "鸟", "鱼", "小宠", "其他"],
      typeArray: ["送养", "领养"],
      infoArray: [
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 1,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 1,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 2,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 1,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 2,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 1,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 1,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 1,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 1,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 3,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 1,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 4,
          time: '3月18日22:02'
        },
        {
          url: 'https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304',
          type: 1,
          title: '免费赠送三个月大的猫咪，体外体内除虫已做',
          category: '狗狗',
          city: '城市',
          description: '一共12只小狗，2022年12月20号左右出生，2个狗妈妈生的，小狗身体健康活泼可爱，经历了上海冬天最冷的时侯，好养活',
          status: 1,
          time: '3月18日22:02'
        }
      ]
    }
  },
  methods: {
    push(model) {
      router.push(model)
    }
  }
}
</script>

<style>
.cardContainer {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 16px;
}

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
