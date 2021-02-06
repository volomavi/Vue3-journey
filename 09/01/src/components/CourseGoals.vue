<template>
  <ul>
    <li v-for="goal in goals" :key="goal"> 
      <slot :item="goal" a-a="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      goals: ['Finish the Course', 'Learn Vue', 'Test']
    }
  }
}
</script>