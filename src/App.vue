<template>
  <div>
    <tb :data='rows' @delete="handleDelete" @edit="handleEdit">
      <template name="time"></template>
    </tb>
  </div>
</template>

<script type="text/javascript">
import tb from '@/components/table'
export default {
  components:{tb},
  data(){
    return {
      rows: [
        {ID:1,name:'adf',age:12,time:1607998725},
        {ID:2,name:'sd',age:12,time:1607998725},
        {ID:3,name:'ew',age:12,time:1607998725},
        {ID:4,name:'hsr',age:12,time:1607998725},
      ],
      cols: [
        {label: '名字', prop:'name'},
        {label: '年龄', prop: 'age'},
        {label: '时间', prop:'age'},
        {label: '年龄', prop: 'age'},
      ]
    }
  },
  methods: {
    handleDelete(row){
      console.log(row)
    },
    handleEdit(row){
      console.log(row)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
