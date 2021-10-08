const { firestore, studentsCollection } = require('../../firebase/config');

const students = async (_req, res) => {
  try {
    const studentDocuments = await firestore.getDocs(studentsCollection);

    const students = studentDocuments.docs.map((doc) => doc.data());
    res.json({ students }).status(200);
  } catch (error) {
    res.json({ msg: error }).status(401);
  }
};

const studentPost = async (req, res) => {
  const { name, age, degree, university } = req.body;

  try {
    await firestore.addDoc(studentsCollection, {
      name,
      age,
      degree,
      university,
    });

    res.json({ msg: 'Success add new student' }).status(200);
  } catch (error) {
    res.json({ msg: error }).status(401);
  }
};

const studentDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await firestore.doc(studentsCollection, id);

    await firestore.deleteDoc(student);
    res.json({ msg: 'Delete success' }).status(200);
  } catch (error) {
    res.json({ msg: error }).status(401);
  }
};

module.exports = { students, studentPost, studentDelete };
