const nanoid = import('nanoid');

const TABLA = 'user'

module.exports = function (injectedStore) {

    if (!injectedStore) {
        injectedStore = require('../../../store/dummy')
    }
    function list() {
        return injectedStore.list(TABLA);
    }

    function get(id) {
        return injectedStore.get(TABLA, id);
    }

    function upsert(body) {
        const user = {
            name: body.name
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid()
        }

        return injectedStore.upsert(TABLA, user)
    }

    return {
        list,
        get,
        upsert,
    };
}