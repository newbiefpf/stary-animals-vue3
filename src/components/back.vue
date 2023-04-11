<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
      <FormItem label="标题" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入标题"/>
      </FormItem>
      <FormItem label="宠物性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">公</Radio>
          <Radio label="female">母</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="数量" prop="quantity">
        <InputNumber v-model="formValidate.quantity" min="1" placeholder="请输入数量"/>
      </FormItem>
      <FormItem label="年龄" prop="age">
        <InputNumber v-model="formValidate.age" placeholder="请输入年龄"/>
      </FormItem>
      <FormItem label="描述信息" prop="description">
        <Input v-model="formValidate.description" type="textarea" :autosize="{minRows: 2, maxRows: 6}"
               placeholder="请输入描述信息"/>
      </FormItem>
      <FormItem label="联系人" prop="contact">
        <Input v-model="formValidate.contact" placeholder="请输入联系人姓名"/>
      </FormItem>
      <FormItem label="微信号" prop="wechat">
        <Input v-model="formValidate.wechat" placeholder="请输入微信号"/>
      </FormItem>
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="请输入手机号"/>
      </FormItem>
      <FormItem label="城市" prop="city">
        <Select v-model="formValidate.city" placeholder="请选择城市">
          <Option v-for="city in cities" :key="city.value" :value="city.value">{{ city.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="供求" prop="type">
        <RadioGroup v-model="formValidate.type">
          <Radio label="supply">供应</Radio>
          <Radio label="demand">需求</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="宠物分类" prop="category">
        <Select v-model="formValidate.category" placeholder="请选择宠物分类">
          <Option v-for="category in categories" :key="category.value" :value="category.value">{{
              category.label
            }}
          </Option>
        </Select>
      </FormItem>
      <FormItem label="驱虫状态" prop="deworming">
        <CheckboxGroup v-model="formValidate.deworming">
          <Checkbox label="yes">已驱虫</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="疫苗状态" prop="vaccine">
        <CheckboxGroup v-model="formValidate.vaccine">
          <Checkbox label="yes">已接种疫苗</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="图片列表" prop="images">
        <Upload
            :file-list="fileList"
            :on-remove="handleUploadRemove"
            :before-upload="handleBeforeUpload"
            :limit="5"
            :show-upload-list="true"
            action="https://jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline" type="primary">上传图片
          </Button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5个文件，大小不超过2MB</div>
        </Upload>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">发布</Button>
        <Button @click="handleReset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>

export default {
  name: 'PublishAdopt',
  data() {
    return {
      formValidate: {
        title: '',
        gender: '',
        quantity: '',
        age: '',
        description: '',
        contact: '',
        wechat: '',
        phone: '',
        city: '',
        type: '',
        category: '',
        deworming: [],
        vaccine: [],
        images: []
      },
      ruleValidate: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择宠物性别', trigger: 'change'}
        ],
        quantity: [
          {required: true, message: '请输入数量', trigger: 'blur'}
        ],
        age: [
          {required: true, message: '请输入年龄', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入描述信息', trigger: 'blur'}
        ],
        contact: [
          {required: true, message: '请输入联系人姓名', trigger: 'blur'}
        ],
        wechat: [
          {required: true, message: '请输入微信号', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        city: [
          {required: true, message: '请选择城市', trigger: 'change'}
        ],
        type: [
          {required: true, message: '请选择供求', trigger: 'change'}
        ],
        category: [
          {required: true, message: '请选择宠物分类', trigger: 'change'}
        ]
      },
      fileList: []
    }
  },
  computed: {
    cities() {
      // 城市列表
      return [
        {value: 'beijing', label: '北京'},
        {value: 'shanghai', label: '上海'},
        {value: 'guangzhou', label: '广州'},
        {value: 'shenzhen', label: '深圳'}
      ]
    },
    categories() {
      // 宠物分类列表
      return [
        {value: 'cat', label: '猫'},
        {value: 'dog', label: '狗'},
        {value: 'rabbit', label: '兔子'},
        {value: 'other', label: '其他'}
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          // 表单验证通过，可以提交表单数据
          console.log(this.formValidate);
          Message.success('发布成功！');
        } else {
          // 表单验证不通过，提示用户
          Message.error('表单验证失败，请检查输入！');
        }
      });
    },
    handleReset() {
      // 重置表单
      this.$refs.formValidate.resetFields();
      this.fileList = [];
    },
    handleUploadSuccess(response, file, fileList) {
      // 文件上传成功回调函数
      if (response.code === 200) {
        this.formValidate.images.push(response.data);
        Message.success('上传成功！');
      } else {
        Message.error('上传失败，请重试！');
      }
    },
    handleRemove(file, fileList) {
      // 删除文件回调函数
      let index = this.formValidate.images.indexOf(file.response.data);
      if (index !== -1) {
        this.formValidate.images.splice(index, 1);
      }
    }
  }
}
</script>

<style>
.upload-img {
  width: 104px;
  height: 104px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  vertical-align: top;
  background-color: #f5f5f5;
  background-image: none;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  transition: border-color .2s ease-out;
}

.upload-img .el-icon-close {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  font-size: 16px;
  color: #666;
  background-color: #fff;
  padding: 2px;
  cursor: pointer;
}

.upload-img:hover .el-icon-close {
  display: block;
}
</style>
