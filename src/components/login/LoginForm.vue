<template>
    <div>
        <img src="./login.png">
        <form @submit="onSubmit">
            <div class="inputBox"> 
                <input type="text" placeholder=" 아이디" v-model="uid">
            </div>
            <div class="inputBox">
                <input type="password" placeholder=" 비밀번호" v-model="password">
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
                alert(this.uid);
                if (this.uid === '1234' && this.password === '1234')  {
                    redirect : to => "home";
                } else {
                    alert("id 및 password가 맞지 않습니다.")
                }
            }
        }
    }
</script>
<style scoped>
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
    background-color : #f6f6f8;
    height : 45px;
    line-height: 45px;
    border-radius: 5px;
    margin : 5px auto;
}
.inputBox input {
    border-style: none;
    background-color : #f6f6f8;
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
