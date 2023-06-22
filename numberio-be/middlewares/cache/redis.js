const redis = require('redis');
const { REDIS_URL } = require('../../utils/config');
const client = redis.createClient(REDIS_URL);

const setAsync = (key, value) => {
    return new Promise((resolve, reject) => {
        client.set(key, value, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}

const getAsync = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}
const delAsync = (key) => {
    return new Promise((resolve, reject) => {
        client.del(key, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}

module.exports = {
    setAsync,
    getAsync,
    delAsync
}