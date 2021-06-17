"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/instalaciones' });
        //res.sendFile(path.join(__dirname, './../view/index.html'))
    }
}
exports.indexController = new IndexController();
