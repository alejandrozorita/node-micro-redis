const {nanoid} = require('nanoid');


const auth = require('../auth');

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

    async function upsert(body) {
        const user = {
            userName: body.userName,
            name: body.name
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if (body.password || body.userName) {
            await auth.upsert({
                id: user.id,
                userName: user.userName,
                password: body.password
            })
        }

        return injectedStore.upsert(TABLA, user)
    }
    

    return {
        list,
        get,
        upsert,
    };
}