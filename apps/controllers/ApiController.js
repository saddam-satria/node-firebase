const { firestore, studentsCollection } = require('../../firebase/config');

const students = async (_req, res) => {
  try {
    const studentDocuments = await firestore.getDocs(studentsCollection);

    const students = studentDocuments.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

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

const studentDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const doc = await firestore.doc(studentsCollection, id);
    const student = await await firestore.getDoc(doc);

    res.json({ student: { id: student.id, ...student.data() } }).status(200);
  } catch (error) {
    res.json({ msg: error }).status(401);
  }
};

const studentUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, degree, age, university } = req.body;

  try {
    const doc = await firestore.doc(studentsCollection, id);
    const student = await firestore.updateDoc(doc, {
      name,
      degree,
      age,
      university,
    });

    res.json({ student }).status(200);
  } catch (error) {
    res.json({ msg: error }).status(401);
  }
};

module.exports = { students, studentPost, studentDelete, studentDetail, studentUpdate };
