"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validTokens = {
    'localhost': '71c62986-2640-4e96-a7a6-95f6195bb226',
};
var authMiddleware = function (req, res, next) {
    var token = req.headers.authorization;
    var origin = req.body.origin;
    if (token && validTokens[origin] === token) {
        next();
    }
    else {
        res.status(401).json({ message: 'Token inválido.' });
    }
};
exports.default = authMiddleware;
