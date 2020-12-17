<template>
  <el-table :data='data'>
    <el-table-column label="ID" prop="ID"/>
    <el-table-column label="名字" prop="name"/>
    <el-table-column label="年龄" prop="age"/>
    <el-table-column label="时间">
      <template slot-scope="slot">
        {{slot.row.time*1000|mktime}}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="slot">
        <el-button type="danger" @click="$emit('delete',slot.row)">删除</el-button>
        <el-button @click="$emit('edit',slot.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="text/javascript">
export default {
  props:['data'],
  data(){
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>

</style>