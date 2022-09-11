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

async function upset(table, data) {
    db[collection].push(data);
}
async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upset,
    remove,
} 