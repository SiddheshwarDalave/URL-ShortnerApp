const mongoose = require('mongoose');
const shortid = require('shortid');
const { URL } = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: 'URL is required' });

    const newId = shortid.generate();

    try {
        await URL.create({
            shortId: newId,
            redirectURL: body.url,
            visitHistory: []
        });
        return res.json({ id: newId });
    } catch (error) {
        console.error('Error creating new short URL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handleGetRedirectUrl(req,res){
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
  }

module.exports = { handleGenerateNewShortURL,handleGetRedirectUrl };
