"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('base', () => {
    return {
        database: {
            host: process.env.TYPEORM_HOST,
            port: process.env.TYPEORM_PORT,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE
        },
    };
});
//# sourceMappingURL=base-config.js.map