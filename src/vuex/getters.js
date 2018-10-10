export default {
    getUid: state => state.uid,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
    counter: state => state.counter,
    doubleCounter: state => state.counter * 2,
    tripleCounter: state => state.counter * 3,
    getTable: state => state.table,
    getCols: state => state.cols,
    getColsNum: state => state.colsNum,
    getObject: state => state.object,
    getStoredLogs: state => state.storedLogs,
    getLoginLogData: state =>
        state.axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=login&year=2018&page=1')
        .then(function(response) {
            let loginLogData = response.data.Data;
            console.log(loginLogData);
            return loginLogData;
        }).catch(function(err) {
            console.log(err);
        }),
    getPageLogData: state =>
        state.axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=page&year=2018&page=1')
        .then(function(response) {
            let pageLogData = response.data.Data;
            return pageLogData;
        }).catch(function(err) {
            console.log(err);
        }),
    getScrapLogData: state =>
        state.axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=scrap&year=2018&page=1')
        .then(function(response) {
            let scrapLogData = response.data.Data;
            return scrapLogData;
        }).catch(function(err) {
            console.log(err);
        }),
    getLogData: (state, data) => {
        state.axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=' + data + '&year=2018&page=1')
            .then(function(response) {
                let scrapLogData = response.data.Data;
                return scrapLogData;
            }).catch(function(err) {
                console.log(err);
            })
    },
    // getStoredLogs: (state, data) => {
    //     state.axios.get('http://222.231.4.31/~lucy1010/storage/get_stored_logs_test1.php?table=' + data.table + '&year=' + data.year + '&id=1234')
    //         .then(function(response) {
    //             return response
    //         }).catch(function(err) {
    //             console.log(err);
    //         })
    // }
}