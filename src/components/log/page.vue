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
            <tbody id="pageLog">
            </tbody>
        </table>
    </div>
</template>
<script>
    var pageLogData = [];
    var pageLogCondition = [];
    const axios = require('axios');
    axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=page&year=2018&id=chosun&month=1&day=12&page=1')
        .then(function (response) {
            pageLogData = response.data.Data;
            pageLogCondition = response.data.Header;
            document.getElementById('pageLog').innerHTML = pageLogData.map(function(row){
                return (
                    '<tr>' + 
                        '<td>' + row.id + '</td>' +
                        '<td>' + row.ip + '</td>' +
                        '<td>' + row.version + '</td>' +
                        '<td>' + row.page_serial + '</td>' +
                        '<td>' + row.reg_date + '</td>' +
                    '</tr>'
                )
            });
            console.log(pageLogData)
        }).catch(function(error){
            console.log(error)
        });
    export default {
        data() {
            return {
                pageLogData : pageLogData
            }
        }
    }
</script>

<style>
div {
    
    text-align: center;
}
</style>

