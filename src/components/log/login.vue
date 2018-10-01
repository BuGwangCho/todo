<template>
    <div>
        <table border='1'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>mac</th>
                    <th>device</th>
                    <th>version</th>
                    <th>sip</th>
                    <th>uip</th>
                    <th>login_time</th>
                    <th>logout_time</th>
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
    axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=login&year=2018&id=chosun&month=1&day=12')
        .then(function (response) {
            loginLogData = response.data.Data;
            loginLogCondition = response.data.Header;
            document.getElementById('loginLog').innerHTML = loginLogData.map(function(row){
                return (
                    '<tr>' + 
                        '<td>' + row.id + '</td>' +
                        '<td>' + row.mac + '</td>' +
                        '<td>' + row.device + '</td>' +
                        '<td>' + row.version + '</td>' +
                        '<td>' + row.sip + '</td>' +
                        '<td>' + row.uip + '</td>' +
                        '<td>' + row.login_time + '</td>' +
                        '<td>' + row.logout_time + '</td>' +
                    '</tr>'
                )
            });
        }).catch(function(error){
            console.log(error)
        });
    export default {
        data() {
            return {
                log_attr: ["id", "mac", "device", "version", "sip", "uip", "login_time", "logout_time"],
                loginLogData: loginLogData,
                user_attr: ["id", "name", "phone"],
            }
        },
    }
</script>

<style>
div {
    
    text-align: center;
}
</style>

