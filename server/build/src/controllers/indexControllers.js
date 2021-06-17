"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const path = require('path');
class IndexController {
    index(req, res) {
        // res.json({text: 'API is /api/instalaciones'});
        res.sendFile(path.join(__dirname, 'view/proyecto/index.html'));
    }
}
exports.indexController = new IndexController();
