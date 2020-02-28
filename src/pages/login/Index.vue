<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        >
        <q-card-section>
          <q-input
            filled
            v-model="account"
            label="请输入账号"
            hint="邮箱或者手机号"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '账号不能为空']"
          />
          <q-input
            filled
            type="password"
            v-model="password"
            label="请输入密码"
            hint="密码"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '密码不能为空']"
          />
      </q-card-section>
      <q-card-actions vertical>
        <q-btn class="bg-primary text-white" type="submit" >登录</q-btn>
        <q-btn class="text-primary" flat>忘记密码？</q-btn>
      </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      account: null,
      password: null
    }
  },

  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
      this.$router.push('/manage')
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
