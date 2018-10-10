<template>
    <div>
        <div class="logs-tab">
            <ul class="logs-sidebar">
                <button 
                v-for=" table in getTable"
                v-bind:key="table"
                v-bind:class="['kind-button',{ selected: table === selectedTable}]"
                v-on:click="selectedTable = table,  selectedYear=2018, getStoredLogsProc(selectedTable,selectedYear)"
                >
                {{table}}
                </button>
            </ul>
        </div>
        <div class="stored-log-container">
            <div class="delete-button"  v-if="selectedSeq.length>0"> 
                <span class="selectSeq-delete" @click="deleteStoredLog(selectedTable,selectedSeq,selectedYear)">
                    <b>{{selectedSeq.length}} delete</b>
                </span> 
                <span class="selectSeq-cancle" @click="selectedAllCancle()">
                    <b>cancle</b> 
                </span>
            </div>
            <div 
            v-if="selectedTable"
            class="stored-log"
            >
                <table>
                    <tr class="cols">
                        <th></th>
                        <th
                            v-for="col in getCols[selectedTable]" 
                            :key="col"> {{col}} </th>
                    </tr>
                    <tr  
                        class="list" v-for=" list  in getStoredLogs " 
                        :key="list.seq"
                        @click="selectedRow = list.seq, 
                                selectedSeq.includes(list.seq)? selectedSeq.splice(selectedSeq.indexOf(list.seq),1) : selectedSeq.push(list.seq) ,
                                click_tr(),store()" 
                        :class="['cols',{highlight:selectedSeq.includes(list.seq)}]">
                        <td></td>
                        <td class="one" v-for="value in list" :key="value" :id="list.seq"> {{value}} </td>
                    </tr>
                </table>
            </div>
            <strong v-else>
                Click on log button want to see
            </strong>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
            // tables : table,
            selectedTable: '',
            // obj : object,
            // cols : cols,
            // colsNum : colsNum,
            selectedYear: '',
            selectedTableName : '',
            selectedRow : '',
            selectedSeq : [ ],
            login : '',
            page: '',
            scrap: '',
            logs: ''
        }
    },
    computed : {
        ...mapGetters([
        'getTable',
        'getCols',
        'getColsNum',
        'getObject',
        'getStoredLogs'
        ]),
        // getLoginLogData() {
        //     this.$store.getters.getLoginLogData.then((data) => {
        //         this.login = data;
        //     })
        //     return this.login
        // },
        // getPageLogData() {
        //     this.$store.getters.getPageLogData.then((data) => {
        //         this.page = data;
        //     })
        //     return this.page
        // },
        // getScrapLogData() {
        //     this.$store.getters.getScrapLogData.then((data) => {
        //         this.scrap = data;
        //     })
        //     return this.scrap
        // },

    },
    methods: {
        getStoredLogsProc(table,year) {
            let table_name = table.toLowerCase();
            this.$store.dispatch('getStoredLogsProc' ,{table_name,year})
            
        },
        click_tr() {
            //$(".highlight").prepend("<td class='store'>보관</td>");
            console.log(this.selectedSeq);
        },
        store() {
            if(this.selectedSeq.length > 0) {
                console.log('선택된 행이 있음');

            }
        },
        click_store() {
            alert('보관되어야할 seq :' + this.selectedSeq);
            console.log('비우기전 :' + this.selectedSeq);
        },
        selectedAllCancle() {
            this.selectedSeq = [ ];
        },
        deleteStoredLog(table,seq,year){
            console.log('삭제  : ' + table + ', ' + seq + ', ' + year);
            this.selectedAllCancle();
            let table_name = table.toLowerCase();
            this.$store.dispatch('deleteStoredLog', {table_name, seq, year});

        }
        
    }

}
    
</script>
<style >

.stored-log-container {
    margin-top: 95px;
}
.stored-log-container .delete-button {
    position: fixed;
    top:51px;
    width: 100%;
    height:45px;
    background: lightblue;
    line-height: 45px;
    cursor: pointer;
}

.stored-log-container .selectSeq-delete {
    margin : 0;
    height: 45px;
    float:left;
    width: 70%;
    padding-left:15%
   
}
.selected-log-container .selectSeq-cancle {
    margin : 0;
    float: right;
    width: 15%;
}
.stored-log table {
    width: 100%;
    align-content: center;
}
.stored-log table tr .cols {
    cursor: pointer;
}
.stored-log table th{
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background:#fffdfd;
    
}
.stored-log table th:last-child{
    border-right: none;
}
.stored-log table tr .one {
    padding: 3px 0;
    border-bottom: #e0e0e0;
}
.stored-log .highlight{
    background-color:#e0dfdf;
}

</style>