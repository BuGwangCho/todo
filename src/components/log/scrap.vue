<template>
    <div>

        <table border='1'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>ip</th>
                    <th>version</th>
                    <th>scrap_serial</th>
                    <th>reg_date</th>
                </tr>
            </thead>
            <tbody id="loginLog">
            </tbody>
        </table>
    </div>
</template>
<script>
    var loginLogData = [];
    var loginLogCondition = [];
    const axios = require('axios');
    axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=scrap&year=2018&id=chosun&month=1&day=12')
        .then(function (response) {
            loginLogData = response.data.Data;
            loginLogCondition = response.data.Header;
            document.getElementById('loginLog').innerHTML = loginLogData.map(function(row){
                return (
                    '<tr>' + 
                        '<td>' + row.id + '</td>' +
                        '<td>' + row.ip + '</td>' +
                        '<td>' + row.version + '</td>' +
                        '<td>' + row.scrap_serial + '</td>' +
                        '<td>' + row.reg_date + '</td>' +
                    '</tr>'
                )
            });
        }).catch(function(error){
            console.log(error)
        });
    export default {
        data() {
            return {
                loginLogData : loginLogData
            }
        }
    }
</script>

<style>
div {
    
    text-align: center;
}
</style>

