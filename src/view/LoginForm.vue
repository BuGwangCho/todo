<template>
    <div id="wrapper">
        <img src="../assets/login2-2.png">
        <form @submit="onSubmit()">
            <div class="inputBox"> 
                <input type="text" placeholder=" 아이디" name="uid" v-model="uid">
            </div>
            <div class="inputBox">
                <input type="password" placeholder=" 비밀번호" name="password" v-model="password">
            </div>
            <span class="loginBox">
            <input type="submit" aria-hidden="true" value="로그인" >
            </span>
        </form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                uid: '',
                password: ''
            }
        },
        methods : {
            onSubmit() {
                alert("로그인 인증진행중");
                this.$store.dispatch('login2' , {uid: this.uid, password:this.password}).then(data => data)
                let isAuth = this.$store.getters.getIsAuth
                console.log("id : " + this.$store.getters.getUid)
                console.log("isAuth : " + this.$store.getters.getIsAuth)
                if (isAuth === 'true') {
                    alert("성공");
                    this.goToPages();
                } else {
                    alert("실패")
                    this.uid = '';
                    this.password = '';
                }
               
            },
            goToPages() {
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    }
</script>
<style scoped>
#wrapper {
    margin-top : 60px;
}
div {
    margin : 0 auto;
    width : 230px;
}
img {
    height : 180px;
    width: 180px;
    margin-bottom: 1.5rem;
}
input:focus {
    outline: none;
}
.inputBox {
    background-color : #ffffff;
    height : 45px;
    line-height: 45px;
    border-radius: 5px;
    margin : 5px auto;
}
.inputBox input {
    border-style: none;
    background-color : #ffffff;
    font-size : 0.9rem;
    height : 30px;
    line-height: 30px;
}
.loginBox input {
    border-style: none;
    font-size : 0.9rem;
    border-radius: 5px; 
    width : 230px;
    height : 45px;
    line-height: 45px;
    color:white;
    vertical-align: middle;
    background: linear-gradient(to right, #687efd, #8624f5);
}
</style>
