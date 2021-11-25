<template>
  <div>
    <table >
      <tbody>
      <tr>
        <td><b>#&nbsp;</b></td>
        <td><b>Date</b></td>
        <td><b>Category</b></td>
        <td><b>Value</b></td>
      </tr>
      <tr  v-for="(item, index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      items: Array,
    },
  }
</script>

