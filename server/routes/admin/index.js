const express = require('express')
const {
    handleGetAdminData,
    handleLoginAdmin,
    handleEditPassword,
    handleGetAdminDataV2
} = require('../../controller/admin')


const router = express.Router();

router.route("/alldata").post(handleGetAdminData)
router.route("/").post(handleLoginAdmin).put(handleEditPassword)
router.route("/v2").get(handleGetAdminDataV2)


module.exports = router;
