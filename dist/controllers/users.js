"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const express_1 = require("express");
const getUsers = (req = express_1.request, res = express_1.response) => {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req = express_1.request, res = express_1.response) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req = express_1.request, res = express_1.response) => {
    const { body } = req;
    res.json({
        msg: 'postUsers',
        body
    });
};
exports.postUser = postUser;
const putUser = (req = express_1.request, res = express_1.response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'putUsers',
        id,
        body
    });
};
exports.putUser = putUser;
const deleteUser = (req = express_1.request, res = express_1.response) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsers',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map