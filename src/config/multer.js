const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const storageUser = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'icone-virtual/users',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => uuidv4() ,
    },
  });

  const storageProdutos = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'icone-virtual/protucts',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => uuidv4(),
    },
  });


module.exports = {
    storageUser,
    storageProdutos
}