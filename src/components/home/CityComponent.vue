<template>
  <span>
    {{ this.city.province }}{{ this.city.province !== null ? '/' : '' }}{{
      this.city.city
    }}{{ this.city.city !== null ? '/' : '' }}{{ this.city.county }}
  </span>
</template>
<script>
export default {
  name: 'CityComponent',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    city: {
      type: Object,
      default() {
        return {
          province: null,
          city: null,
          county: null
        }
      }
    }
  }
}
</script>
