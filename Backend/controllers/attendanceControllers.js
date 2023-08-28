const User = require("../models/userModel");

const addSubjects = async (req, res) => {
  const { subjects } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Get the names of all the subjects present in the database
    const existingSubjects = user.subjects.map((subj) => subj.name);

    // Filter subjects that are in both the database and the new data
    const subjectsToUpdate = subjects.filter((subject) =>
      existingSubjects.includes(subject.name)
    );

    // Filter subjects that are not in the database
    const subjectsToAdd = subjects.filter(
      (subject) => !existingSubjects.includes(subject.name)
    );

    // Filter subjects that are in the database but not in the new data
    const subjectsToRemove = existingSubjects.filter(
      (subjectName) => !subjects.some((subject) => subject.name === subjectName)
    );

    // Remove subjects not present in the new data
    user.subjects = user.subjects.filter(
      (subj) => !subjectsToRemove.includes(subj.name)
    );

    // Add new subjects to the user's subjects array
    subjectsToAdd.forEach((subject) => {
      user.subjects.push({ name: subject.name, attendance: [] });
    });

    // Update existing subjects with new data
    subjectsToUpdate.forEach((subject) => {
      const existingSubject = user.subjects.find(
        (subj) => subj.name === subject.name
      );
    });

    await user.save();

    return res.status(200).json({ message: "Subjects updated successfully" });
  } catch (error) {
    console.error("Error updating subjects:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const subjectsPresent = user.subjects.map((subject) => subject.name);

    return res.status(200).json({ subjects: subjectsPresent });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const markAttendance = async (req, res) => {
  const { name, attendance } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const subjectIndex = user.subjects.findIndex((subj) => subj.name === name);

    if (subjectIndex !== -1) {
      attendance.forEach((entry) => {
        const { date, status } = entry;
        const attendanceIndex = user.subjects[
          subjectIndex
        ].attendance.findIndex(
          (att) => att.date.toISOString() === new Date(date).toISOString()
        );

        if (attendanceIndex !== -1) {
          user.subjects[subjectIndex].attendance[attendanceIndex].status =
            status;
        } else {
          user.subjects[subjectIndex].attendance.push({ date, status });
        }
      });
    } else {
      user.subjects.push({ name, attendance });
    }

    await user.save();

    const updatedSubjectData = calculateSubjectAttendancePercentage(user, name);

    return res
      .status(200)
      .json({ message: "Attendance marked successfully", updatedSubjectData });
  } catch (error) {
    console.error("Error marking attendance:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

function calculateSubjectAttendancePercentage(user, subjectName) {
  const subject = user.subjects.find((subj) => subj.name === subjectName);

  if (!subject) {
    return null;
  }

  const attendanceData = subject.attendance;
  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter(
    (entry) => entry.status === "present"
  ).length;
  const absentDays = attendanceData.filter(
    (entry) => entry.status === "absent"
  ).length;
  const holidayDays = attendanceData.filter(
    (entry) => entry.status === "holiday"
  ).length;
  const presentPercentage = (presentDays / totalDays) * 100;
  const absentPercentage = (absentDays / totalDays) * 100;
  const holidayPercentage = (holidayDays / totalDays) * 100;

  return {
    name: subjectName,
    presentPercentage,
    absentPercentage,
    holidayPercentage,
  };
}

const getSubjectWiseAttendance = async (req, res) => {
  const { subjectName } = req.query;
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const subject = user.subjects.find(
      (subject) => subject.name === subjectName
    );
    console.log(user.subjects);

    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }

    const totalDays = subject.attendance.length;
    let presentDays = 0;
    let absentDays = 0;
    let holidayDays = 0;

    subject.attendance.forEach((entry) => {
      if (entry.status === "present") {
        presentDays++;
      } else if (entry.status === "absent") {
        absentDays++;
      } else if (entry.status === "holiday") {
        holidayDays++;
      }
    });

    const presentPercentage = ((presentDays / totalDays) * 100).toFixed(2);
    const absentPercentage = ((absentDays / totalDays) * 100).toFixed(2);
    const holidayPercentage = ((holidayDays / totalDays) * 100).toFixed(2);

    const subjectAttendance = {
      name: subjectName,
      presentPercentage,
      absentPercentage,
      holidayPercentage,
    };

    return res.status(200).json({ subjectAttendance });
  } catch (error) {
    console.error("Error fetching subject-wise attendance:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addSubjects,
  getAllSubjects,
  markAttendance,
  getSubjectWiseAttendance,
};
