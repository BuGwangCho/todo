<template>
    <div>
        <h2>getter로 로그인 로그 목록 가져오기</h2>
        <ul>
            <li v-for=" log in getLoginLogData" :key="log.seq">
                <span v-for="ele in log" :key="ele">{{ele}}</span>
            </li>
        </ul>
        <h2>getter로 페이지 로그 목록 가져오기</h2>
        <ul>
            <li v-for=" log in getPageLogData" :key="log.seq">
                <span v-for="ele in log" :key="ele">{{ele}}</span>
            </li>
        </ul>
        <h2>getter로 스크랩 로그 목록 가져오기</h2>
        <ul>
            <li v-for=" log in getScrapLogData" :key="log.seq">
                <span v-for="ele in log" :key="ele">{{ele}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selectedTable : 'Login',
            login : '',
            page : '',
            scrap : ''
        }
    },
    computed : {
        getLoginLogData() {
            this.$store.getters.getLoginLogData.then((data) => {
                this.login = data;
            })
            return this.login
        },
        getPageLogData() {
            this.$store.getters.getPageLogData.then((data) => {
                this.page = data;
            })
            return this.page
        },
        getScrapLogData() {
            this.$store.getters.getScrapLogData.then((data) => {
                this.scrap = data;
            })
            return this.scrap
        }
        
    }
}
</script>