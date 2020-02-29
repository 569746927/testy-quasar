<template>
  <q-page>
    <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      title="用户列表"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    >

        <template v-slot:top-right>
          <q-btn color="primary" :disable="loading" label="新增" @click="toolbar = true"/>
          <q-btn class="on-right text-white" color="primary" :disable="loading" label="禁用用户"/>
          <q-input class="q-ml-lg" debounce="300" color="primary" >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn
          flat round dense
          icon='fullscreen'
          class="q-ml-md"
        />
        </template>

      </q-table>
    </div>
    <q-dialog v-model="toolbar">
      <q-card>
        <q-toolbar>
          <q-toolbar-title><span class="text-weight-bold">Testy</span> Pletform-新增用户</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <q-input
            outlined
            v-model="username"
            label="请输入用户名"
            hint=""
            lazy-rules
            :rules="[ val => val && val.length > 0 || '用户名不能为空']"
          />
          <q-input
            outlined
            v-model="account"
            label="请输入邮箱"
            hint=""
            lazy-rules
            :rules="[ val => val && val.length > 0 || '邮箱不能为空']"
          />
          <q-select outlined v-model="dept" :options="depts" label="部门" />
          <q-select outlined v-model="role" :options="roles" label="角色" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="确认" @click="addUser" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'desc',
    required: true,
    label: '用户名',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'account', align: 'left', label: '账号(邮箱/手机号)', field: 'account', sortable: true },
  { name: 'dept', align: 'left', label: '部门', field: 'dept' },
  { name: 'role', align: 'left', label: '角色', field: 'role' },
  { name: 'status', align: 'left', label: '状态', field: 'status' }
]

const data = [
  {
    name: 'Frozen Yogurt',
    account: '123@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Ice cream sandwich',
    account: '237@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Eclair',
    account: '262@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Cupcake',
    account: '305@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Gingerbread',
    account: '356@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Jelly bean',
    account: '375@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Lollipop',
    account: '392@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Honeycomb',
    account: '408@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'Donut',
    account: '452@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  },
  {
    name: 'KitKat',
    account: '518@qq.com',
    dept: '技术',
    role: '开发',
    status: '使用'
  }
]

export default {
  data () {
    return {
      data,
      columns,
      selected: [],
      loading: false,
      toolbar: false,
      account: null,
      username: null,
      dept: null,
      role: null,
      depts: [
        { value: '2312', label: '四大护法' }
      ],
      roles: [
        { value: '0', label: '开发' },
        { value: '1', label: '测试' },
        { value: '2', label: '经理' },
        { value: '3', label: '管理' }
      ]
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
    addUser () {
      //
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
</style>
