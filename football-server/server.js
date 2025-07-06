const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/api/players', upload.single('photo'), (req, res) => {
  
  const { id, nom, prenom, age, sexe, score } = req.body;
  const photo = req.file ? req.file.filename : null;

  
  res.json({
    message: "Joueur ajouté avec succès",
    player: { id, nom, prenom, age, sexe, score, photo }
  });
});

app.use('/uploads', express.static('uploads'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
