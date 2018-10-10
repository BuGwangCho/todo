<template>
    <div>
        <div class="logs-tab">
            <ul class="logs-sidebar">
                <button 
                v-for=" table in getTable"
                v-bind:key="table"
                v-bind:class="['kind-button',{ selected: table === selectedTable}]"
                v-on:click="selectedTable = table,  selectedYear=2018"
                >
                {{table}}
                </button>
                
            </ul>
        </div>
        <div class="selected-log-container">
            <div class="store-button"  v-if="selectedSeq.length>0" > 
                <span class="selectSeq-store" @click="goStorage(selectedTable,selectedSeq,selectedYear)"><b>{{selectedSeq.length}} to storage</b></span> 
                <span class="selectSeq-cancle" @click="selectedAllCancle()"><b>cancle</b> </span>
            </div>
            <div 
            v-if="selectedTable"
            class="selected-log"
            >
                <table>
                    
                    <tr class="cols">
                        <th></th>
                        <th
                            v-for="col in getCols[selectedTable]" 
                            :key="col"> {{col}} </th>
                        <!--
                        <th 
                            v-if="selectedTable == obj['PAGE']"
                            v-for="col in cols['PAGE']" 
                            :key="col"> {{col}} </th> 
                        <th v-if="selectedSeq.length>0"></th> -->
                    </tr>
                    <tr class="list" v-for="list  in obj[selectedTable]" :key="list.seq"
                        @click="selectedRow = list.seq, 
                                selectedSeq.includes(list.seq)? selectedSeq.splice(selectedSeq.indexOf(list.seq),1) : selectedSeq.push(list.seq) ,
                                click_tr(),store()" 
                        :class="['cols',{highlight:selectedSeq.includes(list.seq)}]">
                        <td></td>
                        <td class="one" v-for="value in list" :key="value" :id="list.seq"> {{value}} </td>
                        <!-- <td v-if="selectedSeq.length>0 && selectedSeq.includes(list.seq)" @click="click_store">store</td> -->

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

let object = { 
        'LOGIN': [],
        'PAGE' : [],
        'SCRAP' :  []
    }
const axios = require('axios');
object['LOGIN'] = getData('LOGIN');
object['PAGE'] = getData('PAGE');
object['SCRAP'] = getData('SCRAP');
function getData(table) {
    let table_name = table.toLowerCase();
    axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table='+table_name+'&year=2018&limit=50')
        .then(function(response) {
            let logData = response.data.Data;
            console.log(logData);
            object[table]= logData;
        }).catch(function(err) {
            console.log(err);
        });
}
export default {
    data () {
        return {
            tables : '',
            selectedTable: '',
            obj : object,
            // cols : cols,
            // colsNum : colsNum,
            selectedYear: '',
            selectedTableName : '',
            selectedRow : '',
            selectedSeq : [ ]

        }
    },
    computed: {
        
        ...mapGetters([
        'getTable',
        'getCols',
        'getColsNum',
        'getObject'
        ])
    },
    methods: {
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
        goStorage(table,seq,year){
            console.log('보관함으로 이동  : ' + table + ', ' + seq + ', ' + year + ', ');
            this.selectedAllCancle();
            let table_name = table.toLowerCase();
            this.$store.dispatch('goStorage', {table_name, seq, year});

        }
    }
}
</script>
<style>
.kind-button {
  padding: 6px 10px;
  width: 33.333%;
  height: 45px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid #ccc;
  border-top : none;
  border-left: none;
  cursor: pointer;
  background: #fffdfd;
  font-weight: 00;
}
.kind-button:hover {
  background: #e0e0e0;
}
.kind-button.active {
  background: #fffdfd;
}
.kind-button:last-child{
 border-right: none;
}
.logs-tab {
  display: flex;
  padding: 0;
}
.logs-sidebar {
  width: 100%;
  margin: 1px 0 0 0;
  padding: 0;
  list-style-type: none;

}
.logs-sidebar ul{
  display: inline-block;
}
.logs-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.logs-sidebar button:hover {
  background: #eeeded;
}
.logs-sidebar button.selected {
  background: #eeeded;
}
.selected-log-container {
    margin-top: 95px;
}
.selected-log-container table {
    width: 100%;
    align-content: center;
}
.selected-log-container table tr {
    cursor: pointer;
}
.selected-log-container table th{
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background:#fffdfd;
    
}
.selected-log-container table th:last-child{
    border-right: none;
}
.selected-log-container table tr .one {
    padding: 3px 0;
    border-bottom: #e0e0e0;
    
}
.selected-log-container .highlight{
    background-color:#e0dfdf;
}
.selected-log-container .store-button {
position: fixed;
top:51px;
width: 100%;
height:45px;
background: lightblue;
line-height: 45px;
cursor: pointer;
}

.selected-log-container .selectSeq-store {
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
</style>
