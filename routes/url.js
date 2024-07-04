const express = require('express');

const router=express.Router();

const {handleGenerateNewShortURL,handleGetRedirectUrl}=require("../controllers/url")

router.post('/',handleGenerateNewShortURL).get('/:shortId',handleGetRedirectUrl);



module.exports=router;