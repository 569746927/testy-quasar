<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-form
        @submit="onSubmit"
        class="q-ma-md"
        >
        <q-card-section>
          <q-input
            outlined
            v-model="account"
            label="请输入账号"
            hint=""
            lazy-rules
            :rules="[ val => val && val.length > 0 || '账号不能为空']"
          />
          <q-input
            outlined
            type="password"
            v-model="password"
            label="请输入密码"
            hint="新用户请输入初始密码,登录后请尽快修改"
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

     <q-dialog v-model="prompt" persistent >
      <q-card style="min-width: 350px" >
        <q-card-section>
          <div class="text-h6"><span class="text-weight-bold">Testy</span> Pletform-确认密码</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="q-mb-md" outlined type="password" v-model="npwd" autofocus label="请输入新密码"/>
          <q-input
            outlined
            type="password"
            v-model="ncpwd"
            label="请确认新密码"
            lazy-rules
            :rules="[ val => val && val===npwd || '前后密码不一致']"/>
        </q-card-section>

        <q-card-actions align="center" class="text-primary">
          <q-btn label="修改并登录" v-close-popup :disable="ncpwd!==npwd"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      account: null,
      password: null,
      prompt: false,
      npwd: null,
      ncpwd: null
    }
  },

  methods: {
    onSubmit () {
      if (this.password === '123456') {
        this.prompt = true
        if (this.account !== null && this.npwd !== null && this.npwd === this.ncpwd) {
          this.$router.push('/index')
        }
      } else {
        this.$router.push('/index')
      }

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
