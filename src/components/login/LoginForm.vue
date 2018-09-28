<template>
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
                alert('id : ' + this.uid);
                alert('password : ' + this.password);
            }
        }
    }
</script>
<style scoped>
div {
    margin : 0 auto;
    width : 230px;
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
