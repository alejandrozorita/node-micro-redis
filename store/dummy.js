const db = {
    'user': {
        id: 1,
        name: 'Alex'
    }
};

function list(table) {
    return db[table];
}
function get(table, id) {
    let col = list(table)
    return col.filter(item => item.id === id) [0] || null;
}
function upset(table, data) {
    db[collection].push(data);
}
function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upset,
    remove,
} 