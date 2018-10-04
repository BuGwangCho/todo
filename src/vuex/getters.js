export default {
    getUid: state => state.uid,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
    counter: state => state.counter,
    doubleCounter: state => state.counter * 2,
    tripleCounter: state => state.counter * 3
}