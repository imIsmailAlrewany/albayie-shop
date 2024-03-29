const router = require('express').Router();
const user = require('../../controller/en/dashboard.user.controller');
const admin = require('../../middleware/admin.middleware');
const upload = require('../../middleware/upload.middleware');

router.get('/login', user.login);
router.post('/login', user.loginLogic);
router.get('/logout', admin, user.logout);

router.get('/users/overview', admin, user.overview);
router.get('/users/getAllNewUsers', admin, user.newUsers);

router.get('/users/create-user', admin, user.createUser);
router.post('/users/create-user', admin, user.createUserLogic);

router.get('/users/getAllAdmins', admin, user.admins);
router.get('/users/admin', admin, user.adminsTable);
router.get('/users/admin/profile/:id', admin, user.getProfile);
router.post('/users/admin/profile/:id', admin, user.editData);
router.post('/users/admin/profile/:id/newPass', admin, user.changeAdminPassword);
router.post('/users/admin/profile/:id/delete', admin, user.deleteAdmin);
router.post('/users/admin/profile/:id/upload', admin, upload.single('profilePic'), user.uploadImg);

router.get('/users/getAllCustomers', admin, user.customers);
router.get('/users/customer', admin, user.customersTable);
router.get('/users/customer/profile/:id', admin, user.getProfile);
router.post('/users/customer/profile/:id', admin, user.editData);
router.post('/users/customer/profile/:id/newPass', admin, user.changeCustomerPassword);
router.post('/users/customer/profile/:id/delete', admin, user.deleteCustomer);
router.post('/users/customer/profile/:id/block', admin, user.block);
router.post('/users/customer/profile/:id/upload', admin, upload.single('profilePic'), user.uploadImg);


module.exports = router;