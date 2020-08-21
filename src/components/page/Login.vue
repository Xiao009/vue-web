<template>
    <div class="login-wrap">
        <div class="ms-login">
         <div class="ms-title">StreamFlow Login Test</div>
           <el-row type="flex" justify="center">
            <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
          </el-row>
       </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
             login() {
                this.$refs.loginForm.validate((valid) => {
                 if (valid) {
                     // 所有数据一般通过修改ajax 获取和修改
                    this.$ajax.post('/users/validate', this.user).then((res) => {
                    if (res.data) {
                         this.$store.dispatch('login', res.data).then(() => {
                         this.$notify({
                             type: 'success',
                             message: '欢迎你,' + res.data.name + '!',
                             duration: 3000
                         })
                         this.$router.replace('/')
                        })
                    } else {
                    this.$message({
                        type: 'error',
                        message: '用户名或密码错误',
                        showClose: true
                     })
                    }
                  }).catch((err) => {
                     console.log(err)
                     this.$message({
                     type: 'error',
                     message: '网络错误，请重试',
                     showClose: true
                     })
                  })
                }
                 else {
                 return false
                 }
             })
         }
      }
    }
</script>


<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/login.jpg);
    background-size: cover;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #000;
    border-bottom: 1px solid #ddd;
}

</style>