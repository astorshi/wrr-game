const { Router } = require("express");
const router = Router();
const Tracks = require("../models/unitModel");

router.get("/new", (req, res) => {
  res.send("trackNew");
});
//
// router.post("/new", async (req, res) => {
//   if (res.locals.id) {
//     const { title, image } = req.body;
//     if (!title || !image) {
//       res.render("trckNew", {
//         errorMessage: "Ошибка при добавлении, проверьте все поля",
//       });
//     } else {
//       try {
//         const newTrack = await Tracks.create({
//           title,
//           image,
//           user: res.locals.id,
//         });
//         res.redirect("/");
//       } catch (error) {
//         res.render("TrackNew", { errorMessage: "У нас проблема!" });
//       }
//     }
//   } else res.redirect("/");
// });
//
// router.get("/personal/:id", async (req, res) => {
//   try {
//     const editTrack = await Tracks.findById({_id: req.params.id});
//     if (editTrack.user == res.locals.id) {
//       res.render("trackBook", { trackBook });
//     } else res.redirect("/");
//   } catch (err) {
//     res.redirect("/");
//   }
// });
//
// router.post("/personal/:id", async (req, res) => {
//     const { title, image } = req.body;
//     if (!title || !image) {
//       res.render("trackBook", {
//         errorMessage: "Ошибка при добавлении, проверьте все поля",
//       });
//     } else {
//       try {
//         const editTrack = await Tracks.findByIdAndUpdate(req.params.id, {
//           title,
//           image,
//         });
//         res.redirect("/");
//       } catch (error) {
//         res.render("trackNew", { errorMessage: "У нас проблема!" });
//       }
//     }
// });
//
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const trackDb = await Tracks.findById(id).populate("user")
//   if (trackDb) {
//     res.render('track', { trackDb })
//   } else {
//     res.redirect('/');
//   }
// });
//
// router.delete("/:id", async (req, res) => {
//   const postId = req.params.id;
//   try {
//     await Tracks.findOneAndDelete({ _id: postId })
//     res.sendStatus(200);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// })
//
// router.post('/comment', async (req, res) => {
//   try {
//     await Tracks.findByIdAndUpdate(req.body.cardId, { $push: { comments: req.body.inputComment } })
//     res.sendStatus(200)
//   } catch (error) {
//     res.sendStatus(500)
//   }
// });
//
// router.post('/like', async (req, res) => {
//   const { id } = req.body
//   try {
//     const trackDb = await Tracks.findById(id);
//     if (trackDb.likes.includes(res.locals.id)) {
//       await Tracks.findByIdAndUpdate(id, { $pull: { likes: res.locals.id } });
//     } else {
//       await Tracks.findByIdAndUpdate(id, { $push: { likes: res.locals.id } });
//     }
//     const trackDbUp = await Tracks.findById(id);
//     res.status(200).json({ counter: trackDbUp.likes.length })
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500)
//   }
// });

module.exports = router;
