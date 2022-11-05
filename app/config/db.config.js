module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'password',
  DB: 'test_db',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// parameters for MYSQL connection - pool is optional max- max # of connections in pool,
//  min- min # connections in pool
//  idle- max time (ms) that a connection can be idle before being released,
// acquire- max time 9ms) that pool will try to get connection before throwing error
