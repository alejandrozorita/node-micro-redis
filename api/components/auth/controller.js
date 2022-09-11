const TABLA = 'auth'

module.exports = function (injectedStore) {

    if (!injectedStore) {
        injectedStore = require('../../../store/dummy')
    }

    function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.userName) {
            authData.userName = data.userName
        }

        if (data.password) {
            authData.password = data.password
        }

        return injectedStore.upsert(TABLA, authData)
    }

    return {
        upsert,
    }
};