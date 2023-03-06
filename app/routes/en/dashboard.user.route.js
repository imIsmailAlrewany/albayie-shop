const router = require('express').Router();
const user = require('../../controller/en/dashboard.user.controller');
const admin = require('../../middleware/admin.middleware');

router.get('/login', user.login);
router.post('/login', user.loginLogic);
router.get('/logout', admin, user.logout);
router.get('/create-user', admin, user.createUser);
router.post('/create-user', admin, user.createUserLogic);
router.get('/users/getAllAdmins', admin, user.admins);
router.get('/users/admin', admin, user.adminsTable);
router.get('/users/getAllCustomers', admin, user.customers);
router.get('/users/customer', admin, user.customersTable);

module.exports = router;