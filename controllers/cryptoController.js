const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res, next) => {
  try {
    const cryptos = await Crypto.find().sort({ name: 1 });
    res.json({ success: true, count: cryptos.length, data: cryptos });
  } catch (error) {
    next(error);
  }
};

exports.getTopGainers = async (req, res, next) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 });
    res.json({ success: true, count: gainers.length, data: gainers });
  } catch (error) {
    next(error);
  }
};

exports.getNewListings = async (req, res, next) => {
  try {
    const latest = await Crypto.find().sort({ createdAt: -1 });
    res.json({ success: true, count: latest.length, data: latest });
  } catch (error) {
    next(error);
  }
};

exports.addCrypto = async (req, res, next) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ success: true, data: crypto });
  } catch (error) {
    next(error);
  }
};
