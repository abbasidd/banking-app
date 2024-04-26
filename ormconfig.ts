'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.dataSource = void 0;
var typeorm_1 = require('typeorm');
exports.dataSource = new typeorm_1.DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  entities: ['src/app/**/*.entity{.ts,.js}'],
  synchronize: true,
});
