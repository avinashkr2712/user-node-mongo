const config = require('config.json');
const db = require('_helpers/db');
const Permission = db.Permission;

module.exports = {
    getAll,
    getById,
    create
};


async function getAll() {
    return await Permission.find().select('-hash');
}

async function getById(id) {
    return await Permission.findById(id).select('-hash');
}

async function create(permissionParam) {
    // validate
    if (await Permission.findOne({ per_name: permissionParam.per_name })) {
        throw 'Permission "' + permissionParam.per_name + '" already exists';
    }

    const permission = new Permission(permissionParam);

    // save user
    await permission.save();
}
