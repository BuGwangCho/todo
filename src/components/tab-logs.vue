<template>
    <div>
        <div class="logs-tab">
            <ul class="logs-sidebar">
                <button 
                v-for=" table in tables"
                v-bind:key="table"
                v-bind:class="['kind-button',{ selected: obj[table] === selectedTable}]"
                v-on:click="selectedTable = obj[table]"
                >
                {{table}}
                </button>
            </ul>
        </div>
        <div class="selected-log-container">
                <div 
                v-if="selectedTable"
                class="selected-log"
                >
                    <table>
                        <tr class="cols">
                            <th></th>
                            <th  
                                v-if="selectedTable == obj['LOGIN'] "
                                v-for="col in cols['LOGIN']" 
                                :key="col"> {{col}} </th>
                            <th  
                                v-if="selectedTable == obj['SCRAP']"
                                v-for="col in cols['SCRAP']" 
                                :key="col"> {{col}} </th>
                            <th 
                                v-if="selectedTable == obj['PAGE']"
                                v-for="col in cols['PAGE']" 
                                :key="col"> {{col}} </th>
                        </tr>
                        <tr class="list" v-for="list  in selectedTable" :key="list.seq">
                            <td></td>
                            <td class="one" v-for="value in list" :key="value"> {{value}} </td>
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
let cols = {
    'LOGIN' : ['seq', 'id','mac', 'device','version', 'sip', 'uip', 'login', 'logout'],
    'PAGE' : ['seq', 'id', 'ip', 'version', 'pageSerial', 'regDate'],
    'SCRAP' : ['seq', 'id', 'ip', 'version', 'scrapSerial', 'regDate']
}
let table = ['LOGIN', 'PAGE', 'SCRAP'];
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
            tables : table,
            selectedTable: object['login'],
            obj : object,
            cols : cols
        }
    }
}
</script>
<style >
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
  margin: 0;
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
table {
    width: 100%;
    align-content: center;
}
table tr .cols {
}
table th{
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    
    background:#fffdfd;
    
}
table th:last-child{
    border-right: none;
}
.one {
    padding: 3px 0;
    border-bottom: #e0e0e0;
}


</style>
