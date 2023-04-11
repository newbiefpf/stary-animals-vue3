<template>
  <div class="help-form">
    <el-form :model="form" ref="form" :rules="rules" label-width="100px" style="max-width: 1000px; margin: 20px auto;">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="宠物分类" prop="category">
        <el-select v-model="form.category" placeholder="请选择">
          <el-option label="🐶 狗" value="dog"></el-option>
          <el-option label="🐱 猫" value="cat"></el-option>
          <el-option label="🐰 兔子" value="rabbit"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介信息" prop="summary">
        <el-input type="textarea" v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item label="描述信息" prop="description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-select v-model="form.city" placeholder="请选择">
          <el-option label="北京" value="Beijing"></el-option>
          <el-option label="上海" value="Shanghai"></el-option>
          <el-option label="广州" value="Guangzhou"></el-option>
          <el-option label="深圳" value="Shenzhen"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="图片列表" prop="images">
        <el-upload
            class="upload-demo"
            action="/upload"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload"
            :file-list="form.images"
            list-type="picture">

          <el-button slot="upload" size="small" type="success">上传文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="收款图片" prop="receipt">
        <el-upload
            class="upload-demo"
            action="/upload"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload"
            :file-list="form.receipt"
            list-type="picture">
          <el-button slot="upload" size="small" type="success">上传文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="求助金额" prop="amount">
        <el-input-number v-model="form.amount" :min="0" :max="3000" step="10"></el-input-number> 元
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'RescuePublish',
  data() {
    return {
      form: {
        title: '',
        category: '',
        summary: '',
        description: '',
        city: '',
        address: '',
        images: [],
        receipt: [],
        amount: 0
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        category: [{ required: true, message: '请选择宠物分类', trigger: 'change' }],
        summary: [{ required: true, message: '请输入简介信息', trigger: 'blur' }],
        description: [{ required: true, message: '请输入描述信息', trigger: 'blur' }],
        city: [{ required: true, message: '请选择城市', trigger: 'change' }],
        address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
        images: [{ required: true, message: '请上传图片', trigger: 'blur' }],
        receipt: [{ required: true, message: '请上传收款图片', trigger: 'blur' }],
        amount: [{ required: true, message: '请输入求助金额', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleUploadSuccess(response, file, fileList) {
      console.log(response, file, fileList)
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt5M = file.size / 1024 / 1024 < 5

      if (!isJpgOrPng) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过 5MB!')
      }
      return isJpgOrPng && isLt5M
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success('提交成功!')
        } else {
          this.$message.error('请填写完整信息!')
          return false
        }
      })
    }
  }
}
</script>

<style>
/*.help-form {*/
/*  margin: 0 auto;*/
/*}*/
</style>
