<template>
   <div class="login">
       <!-- Modal -->
       <!-- id here in the div is relate to the start button on the Navbar -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content">

                    <div class="modal-body">

                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                            </li>
                        </ul>

                       <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                            <h5 class="text-center">StreamFlow Login</h5>
                              <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
                                  <el-form-item label="用户名" prop="name">
                                     <el-input v-model="user.name"></el-input>
                                  </el-form-item>
                                  <el-form-item label="密码" prop="pass">
                                      <el-input v-model="user.pass" type="password"></el-input>
                                  </el-form-item>
                              </el-form>
                             <div class="form-group">
                                <button class="btn btn-primary" @click="login">Login</button>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                           <el-form ref="registerForm" :model="register" :rules="rule" status-icon label-width="80px">
                            <div class="form-group">
                                <label for="firstName">first name</label>
                                <input type="text" v-model="register.firstName" class="form-control" id="firstName" placeholder="Your first name">
                            </div>

                                                         
                            <div class="form-group">
                                <label for="lastName">last name</label>
                                <input type="text" v-model="register.lastName" class="form-control" id="lastName" placeholder="Your last name">
                            </div>
                                                         
                            <div class="form-group">
                                <label for="nickName">Nick name</label>
                                <input type="text" v-model="register.nickName" class="form-control" id="nickName" placeholder="Your nick name">
                            </div>

                            
                            <div class="form-group">
                                <label for="userName">User name</label>
                                <input type="text" v-model="register.userName" class="form-control" id="userName" placeholder="Your user name">
                            </div>


                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="register.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="register.password" class="form-control" id="password" placeholder="Enter Password">
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary" @click="register">Signup</button>
                            </div>
                           </el-form>
                        </div>
                       </div>
                   </div>
                </div>
             </div>
        </div>
   </div>
</template>

<script>


export default{
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                },
                register:{},
                rule:{
                    firstName: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    lastName: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                    userName: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    nickName: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                }
            }
        },
    methods:{
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
                         this.$router.replace('/Main')
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
         },
         register(){
             this.$refs.registerForm.validate((valid) => {
                 if(valid){
                     this.$ajax.post('/createUser', this.register).then((res) => {
                         //input something that's working 
                         if (res.data) {
                             //登录成功后
                         }else{
                              this.$message({
                                  type: 'error',
                                  message: '注册错误',
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
                 }else{
                     return false
                 }           
             })
         }
   },
  name:"Login",
    props: {
        msg:String
    }
 }
</script>