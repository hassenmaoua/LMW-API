const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema(
  {
    _id: Number,

    intitule: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Aucun Descriptions',
    },

    typeActivite: {
      type: Object,

      _id: Number,
      code: String,
      label: String,
      style: String,

      default: {
        _id: 0,
        code: '',
        label: 'Aucun',
        style: '#000000',
      },
    },
    quantite: {
      type: Number,
      default: 1,
    },
    bugetConsomme: {
      type: String,
      default: '0 TND',
    },
    bugetVente: {
      type: String,
      default: '0 TND',
    },
    dateCreation: {
      type: String,
      default: new Date(Date.now())
        .toLocaleDateString()
        .replace('/', '-')
        .replace('/', '-'),
    },

    tempsEstime: {
      type: Object,
      temps: Number,
      unit: String,

      default: {
        temps: 1,
        unit: '',
      },
    },
    etat: {
      type: Object,

      _id: Number,
      code: String,
      label: String,
      style: String,

      default: { _id: 1 },
    },

    client: {
      type: Object,
      default: null,
    },

    responsable: {
      type: Object,
      default: null,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Produit', produitSchema);
