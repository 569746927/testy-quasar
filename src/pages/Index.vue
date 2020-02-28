<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div>
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
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
          </q-form>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn class="bg-primary text-white">登录</q-btn>
        <q-btn class="text-primary" flat>忘记密码？</q-btn>
      </q-card-actions>
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
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
