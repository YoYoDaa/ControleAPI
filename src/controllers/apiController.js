//const router = express.Router();

exports.getUsers = (req, res) => {
    // Logique pour récupérer les utilisateurs depuis le modèle
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
  
    // Renvoyer les utilisateurs au format JSON
    res.json(users);
  };

//   router.get('/posts', feedController.getPosts);

//   router.post(
//     '/post',
//     [
//       body('title')
//         .trim()
//         .isLength({ min: 5 }),
//       body('content')
//         .trim()
//         .isLength({ min: 5 })
//     ],
//     feedController.createPost
//   );