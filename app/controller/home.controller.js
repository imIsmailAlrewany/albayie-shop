const userModel = require('../database/models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const isLogin = async (data) => {
  try {
    // data ? true : false;
    const breakPass = jwt.verify(data, process.env.KEY);
    const userData = await userModel.findOne({ _id: breakPass._id, 'tokens.token': data });
    if (!userData) throw new Error('can\'t access token');
    else return { isLogin: true, user: userData };
    // console.log({ isLogin: true, user: userData });
  } catch (err) {
    console.log(err.message);
  }
};
const createCookie = (res, name, data) => {
  res.cookie(name, data, {
    httpOnly: true,
    secure: true
  });
};
class Home {
  static showHome = async (req, res) => {
    createCookie(res, 'lang', 'ar');
    res.render('ar/home.ar.hbs', { pageTitle: 'Albayie - Online Shopping', path: 'ar', data: await isLogin(req.cookies.Authorization) });
  };

  static homeInArabic = async (req, res) => {
    createCookie(res, 'lang', 'ar');
    res.render('ar/home.ar.hbs', { pageTitle: 'Albayie - Online Shopping', path: 'ar', data: await isLogin(req.cookies.Authorization) });
  };

  static homeInEnglish = async (req, res) => {
    createCookie(res, 'lang', 'en');
    res.render('en/home', { pageTitle: 'Albayie - Online Shopping', path: 'en', data: await isLogin(req.cookies.Authorization) });
  };

  static offline = async (req, res) => {
    req.user.online = req.body.online;
    await req.user.save();
  };
}

module.exports = Home;