<template>
    <div>
        <h1>主页面</h1>
        欢迎你!
        <span class="user-role"> {{email}} </span>
        <span v-if="user"> {{user.name}}
            <el-button type="warning"  @click="login">注销</el-button>
        </span>
        <el-button v-else type="success" @click="login">点击登录</el-button>
        <button class="btn btn--primary">Click</button>
    </div>
</template>

<script>
// import {fb} from '../../firebase';

    export default {
        methods: {
            login () {
                this.$router.replace('/login')
            },
            logout () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.replace('/login')
                })
            }
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        },
        //  created(){
        //     let user = fb.auth().currentUser;
        //     this.email = user.email;
        //     }
    }
</script>
