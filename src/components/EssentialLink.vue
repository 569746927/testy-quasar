<template>
  <q-item clickable v-ripple :to="item.link" active-class="my-menu-link">
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label caption>{{ item.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    item: {
      title: {
        type: String,
        required: true
      },

      caption: {
        type: String,
        default: ''
      },

      link: {
        type: String,
        default: '#'
      },

      icon: {
        type: String,
        default: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-menu-link
  color: white
  background: #79bac1
</style>
