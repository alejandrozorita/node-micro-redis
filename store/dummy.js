const db = {
    'user': [
        {
            id: '1',
            name: 'Alex'
        }
    ]
};

async function list(table) {
    return db[table];
}
async function get(tabla, id) {
    let col = await list(tabla);
    return col.find(item => item.id === id) || null;
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }

    db[table].push(data);
    console.log(db)
}
async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
} 