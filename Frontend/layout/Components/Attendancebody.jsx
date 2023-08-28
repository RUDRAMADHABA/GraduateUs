import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Attendancebody = (props) => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [subject1, setSubject1] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [presentDates, setPresentDates] = useState([]);
  const [absentDates, setAbsentDates] = useState([]);
  const [holidayDates, setHolidayDates] = useState([]);
  const { data: session } = useSession();
  const generateAttendanceData = (
    name,
    attendanceDates,
    presentDates,
    absentDates,
    holidayDates
  ) => {
    const attendanceData = attendanceDates.map((date) => {
      let status = null;
      if (presentDates.includes(date)) {
        status = "present";
      } else if (absentDates.includes(date)) {
        status = "absent";
      } else if (holidayDates.includes(date)) {
        status = "holiday";
      }
      return { date, status };
    });

    const data = {
      name: name,
      attendance: attendanceData,
    };

    return data;
  };

  const handleSave = async () => {
    // Update the corresponding arrays based on the attendance status
    if (attendanceStatus === "present") {
      setPresentDates((prevDates) => [...prevDates, ...selectedDates]);
    } else if (attendanceStatus === "absent") {
      setAbsentDates((prevDates) => [...prevDates, ...selectedDates]);
    } else if (attendanceStatus === "holiday") {
      setHolidayDates((prevDates) => [...prevDates, ...selectedDates]);
    }

    // Clear the selected dates and reset the attendance status
    setSelectedDates([]);
    setAttendanceStatus(null);

    // Generate and log the attendance data
    const attendanceData = generateAttendanceData(
      "DSA",
      selectedDates,
      presentDates,
      absentDates,
      holidayDates
    );
    console.log(attendanceData);

    const headers = {
      Authorization: `Bearer ${session.user.token}`,
    };
    try {
      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/user/attendance",
        attendanceData,
        { headers }
      );
      toast.success("Attendance updated successfully");
      getPercentageAfterUpdateing()
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPercentageAfterUpdateing = async () => {
    try {
      const response = await axios.get(
        `https://graduate-us-backend-gkli.onrender.com/user/attendance?subjectName=${selectsubject}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      );
      const subjectAttendance = response.data.subjectAttendance;
      if (subjectAttendance.presentPercentage)
        setPresentPercentage(subjectAttendance.presentPercentage);
      if (subjectAttendance.absentPercentage)
        setAbsentPercentage(subjectAttendance.absentPercentage);
      if (subjectAttendance.holidayPercentage)
        setHolidayPercentage(subjectAttendance.holidayPercentage);

      toast.success(
        `Check your Updated Attendance Information`
      );
    } catch (error) {
      toast.error("Error fetching percentage data");
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleCalendarClick = (date) => {
    const selectedDate = new Date(date);

    // Rest of the function remains the same...

    // Update the selected dates based on the attendance status
    const isoDate = selectedDate.toISOString();
    if (attendanceStatus === "present") {
      if (!presentDates.includes(isoDate)) {
        setPresentDates((prevDates) => [...prevDates, isoDate]);
      }
    } else if (attendanceStatus === "absent") {
      if (!absentDates.includes(isoDate)) {
        setAbsentDates((prevDates) => [...prevDates, isoDate]);
      }
    } else if (attendanceStatus === "holiday") {
      if (!holidayDates.includes(isoDate)) {
        setHolidayDates((prevDates) => [...prevDates, isoDate]);
      }
    }

    // Add the selected date to the selectedDates state
    if (!selectedDates.includes(isoDate)) {
      setSelectedDates((prevDates) => [...prevDates, isoDate]);
    }
  };

  const loginname = session?.user?.name;
  const [name, setName] = useState("");
  const [select, setSelect] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [selectsubject, setSelectsubject] = useState("");
  const [presentPercentage, setPresentPercentage] = useState("0");
  const [absentPercentage, setAbsentPercentage] = useState("0");
  const [holidayPercentage, setHolidayPercentage] = useState("0");
  const store = () => {
    if(!name){
      toast.error("Please fill the subject")
    } else{
      setSubjects((prevsubject) => [...prevsubject, name]);
      setName("");
    }
  };

  const savesubject = async () => {
    setSelect(false);
    console.log(subjects);
    try {
      const formattedSubjects = subjects.map((name) => ({ name }));

      const data = { subjects: formattedSubjects };
      const headers = {
        Authorization: `Bearer ${session.user.token}`,
      };

      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/user/subjects",
        data,
        { headers }
      );
      toast.success("Subjects saved successfully!");
      console.log("Subjects saved successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = (id) => {
    setSubjects((prevsubjects) =>
      prevsubjects.filter((subject, index) => index !== id)
    );
  };
  // choose the subject
  const [choosee, setChoosee] = useState({
    subjects: subjects,
  });
  //  display subject in dropdown
  const [display, setDisplay] = useState(subjects);
  // data of the selected subject and attendance
  const [selecting, setSelecting] = useState({
    name: name,
    attendance: attendanceData,
  });

  useEffect(() => {
    if (session && session.user && session.user.token) {
      const fetchSubjects = async () => {
        try {
          const response = await axios.get(
            "https://graduate-us-backend-gkli.onrender.com/user/subjects",
            {
              headers: {
                Authorization: `Bearer ${session.user.token}`,
              },
            }
          );
          if (!response.data.subjects[0]) {
            setSelect(true);
          }
          setSubjects(response.data.subjects);
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      };

      fetchSubjects();
    }
  }, [session]);

  const getPercentage = async (e) => {
    setSelectsubject(e.target.value);
    try {
      const response = await axios.get(
        `https://graduate-us-backend-gkli.onrender.com/user/attendance?subjectName=${e.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      );
      const subjectAttendance = response.data.subjectAttendance;
      if (subjectAttendance.presentPercentage)
        setPresentPercentage(subjectAttendance.presentPercentage);
      if (subjectAttendance.absentPercentage)
        setAbsentPercentage(subjectAttendance.absentPercentage);
      if (subjectAttendance.holidayPercentage)
        setHolidayPercentage(subjectAttendance.holidayPercentage);

      toast.success(
        `Check your Attendance Information in ${subjectAttendance.name}!`
      );
    } catch (error) {
      toast.error("Error fetching percentage data");
    }
  };

  return (
    <>
      <Stack
        marginTop={{ sm: "105px", md: "125px" }}
        marginLeft={{ sm: "106px", md: "303px" }}
        justifyContent="center"
        paddingBottom="20px"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "80px",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "35px", lg: "40px" },
                  fontWeight: "700",
                  color: props.head,
                  whiteSpace: "nowrap",
                }}
              >
                Hi, {loginname}.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "22px", lg: "25px" },
                  fontWeight: "700",
                  color: "#97BCE8",
                  whiteSpace: "nowrap",
                }}
              >
                Welcome to your Class
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5em",
                flexDirection: { lg: "row", xs: "column" },
              }}
            >
              <Paper
                sx={{
                  width: "70%",
                  height: "100%",
                  background: "none",
                  marginTop: "2em",
                  padding: "2em 2em",
                  flexDirection: "column",
                  gap: "1.8em",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                >
                  <Typography
                    color={props.head}
                    sx={{
                      fontWeight: "700",
                      fontSize: "17px",
                      opacity: "0.7",
                      width: "30%",
                    }}
                  >
                    Enter your Subject
                  </Typography>
                  <Select
                    placeholder="Choose the subject"
                    onChange={getPercentage}
                    sx={{
                      width: "80%",
                      background: "#262727",
                      fontWeight: "700",
                    }}
                    value={selectsubject}
                  >
                    {subjects.map((data, index) => (
                      <MenuItem key={index} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                  </Select>
                  <IconButton
                    onClick={() => {
                      setSelect(true);
                    }}
                  >
                    <AddIcon sx={{ color: props.head }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "2em",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                >
                  <Typography
                    color={props.head}
                    sx={{
                      fontWeight: "700",
                      fontSize: "17px",
                      opacity: "0.7",
                    }}
                  >
                    Choose the date
                  </Typography>
                  <Calendar
                    onClickDay={handleCalendarClick}
                    value={selectedDates.map((date) => new Date(date))}
                    view="month"
                    tileContent={({ date }) => {
                      const isoDate = date.toISOString();
                      const isSelected = selectedDates.includes(isoDate);
                      const isPresent = presentDates.includes(isoDate);
                      const isAbsent = absentDates.includes(isoDate);
                      const isHoliday = holidayDates.includes(isoDate);

                      // Define styles for each attendance status
                      const presentStyle = {
                        background:
                          "linear-gradient(to bottom right, #d3ffcc, #6dff55)",
                        borderRadius: "50%",
                        width: "2em",
                        height: "2em",
                        margin: "0 0.5em",
                      };
                      const absentStyle = {
                        background:
                          "linear-gradient(to bottom right, #ffcccc, #ff5555)",
                        borderRadius: "50%",
                        width: "2em",
                        height: "2em",
                        margin: "0 0.5em",
                      };
                      const holidayStyle = {
                        background:
                          "linear-gradient(to bottom right, #000, gray)",
                        borderRadius: "50%",
                        width: "2em",
                        height: "2em",
                        margin: "0 0.5em",
                      };

                      if (isSelected) {
                        // Render different styles based on the attendance status
                        return (
                          <>
                            {isPresent && <div style={presentStyle} />}
                            {isAbsent && <div style={absentStyle} />}
                            {isHoliday && <div style={holidayStyle} />}
                          </>
                        );
                      }
                      return null;
                    }}
                    prevLabel={<FirstPageIcon />}
                    nextLabel={<LastPageIcon />}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                    bottom: "1em",
                    gap: { lg: "7em", xs: "1em" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.7em",
                      flexWrap: { lg: "nowrap", xs: "wrap" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.2em",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setAttendanceStatus("present");
                      }}
                    >
                      <Box
                        sx={{
                          width: "1.2em",
                          height: "1.2em",
                          background:
                            "linear-gradient(to bottom right, #d3ffcc, #6dff55)",
                          borderRadius: "12px",
                        }}
                      />
                      <Button
                        sx={{
                          color: props.head,
                          fontWeight: "700",
                          fontSize: "15px",
                          background:
                            attendanceStatus === "present"
                              ? "linear-gradient(to bottom right, #d3ffcc, #6dff55)"
                              : "none",
                        }}
                      >
                        Present
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.2em",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setAttendanceStatus("absent");
                      }}
                    >
                      <Box
                        sx={{
                          width: "1.2em",
                          height: "1.2em",
                          background:
                            "linear-gradient(to bottom right, #ffcccc, #ff5555)",
                          borderRadius: "12px",
                        }}
                      />
                      <Button
                        sx={{
                          color: props.head,
                          fontWeight: "700",
                          fontSize: "15px",
                          background:
                            attendanceStatus === "absent"
                              ? "linear-gradient(to bottom right, #ffcccc, #ff5555)"
                              : "none",
                        }}
                      >
                        Absent
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.2em",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setAttendanceStatus("holiday");
                      }}
                    >
                      <Box
                        sx={{
                          width: "1.2em",
                          height: "1.2em",
                          background:
                            "linear-gradient(to bottom right, #000, gray)",
                          borderRadius: "12px",
                        }}
                      />
                      <Button
                        sx={{
                          color: props.head,
                          fontWeight: "700",
                          fontSize: "15px",
                          background:
                            attendanceStatus === "holiday"
                              ? "linear-gradient(to bottom right, #000, gray)"
                              : "none",
                        }}
                      >
                        Holiday
                      </Button>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff !important",
                      color: "#000",
                      fontWeight: "700",
                      maxHeight: "3em",
                      width: "7em",
                    }}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Box>
              </Paper>
              <Box
                sx={{
                  height: "100%",
                  width: { lg: "30%", xs: "100%" },
                  flexDirection: { lg: "column", xs: "row" },
                  display: "flex",
                  gap: "1em",
                  marginRight: "1.5em",
                }}
              >
                <Paper
                  sx={{
                    width: "100%",
                    flexGrow: { lg: "0", xs: "1" },
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "1em 1em",
                    height: "10em",
                    background:
                      "linear-gradient(to bottom right, #d3ffcc, #6dff55)",
                    borderRadius: "7px",
                  }}
                >
                  <Typography
                    color="#128000"
                    sx={{ fontWeight: "700", fontSize: "21px" }}
                  >
                    Present
                  </Typography>
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      alignSelf: "center",
                    }}
                  >
                    <CircularProgressbar
                      value={presentPercentage}
                      text={`${presentPercentage}%`}
                      styles={buildStyles({
                        textColor: "#0c5500",
                        pathColor: "#1ed400",
                        trailColor: "#b6ffaa",
                      })}
                    />
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    width: "100%",
                    flexGrow: { lg: "0", xs: "1" },
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "1em 1em",
                    height: "10em",
                    background:
                      "linear-gradient(to bottom right, #ffcccc, #ff5555)",
                  }}
                >
                  <Typography
                    color="#800000"
                    sx={{ fontWeight: "700", fontSize: "21px" }}
                  >
                    Absent
                  </Typography>
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      alignSelf: "center",
                    }}
                  >
                    <CircularProgressbar
                      value={absentPercentage}
                      text={`${absentPercentage}%`}
                      styles={buildStyles({
                        textColor: "red",
                        pathColor: "#d40000",
                        trailColor: "#ffaaaa",
                      })}
                    />
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    width: "100%",
                    flexGrow: { lg: "0", xs: "1" },
                    display: "flex",
                    justifyContent: "center",
                    padding: "1em 1em",
                    flexDirection: "column",
                    height: "10em",
                    background: "linear-gradient(to bottom right, #000, gray)",
                    marginRight: { md: "0em", xs: "1em" },
                  }}
                >
                  <Typography
                    color="gray"
                    sx={{ fontWeight: "700", fontSize: "21px" }}
                  >
                    Holiday
                  </Typography>
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      alignSelf: "center",
                    }}
                  >
                    <CircularProgressbar
                      value={holidayPercentage}
                      text={`${holidayPercentage}%`}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#000",
                        trailColor: "gray",
                      })}
                    />
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
        <Dialog
          open={select}
          sx={{ backdropFilter: "blur(7px)" }}
          PaperProps={{
            sx: {
              background: "#262727",
            },
          }}
        >
          <DialogContent
            sx={{
              minWidth: "300px",
              height: "100%",
              padding: "1em 1em",
              display: "flex",
              flexDirection: "column",
              gap: "0.7em",
            }}
          >
            <DialogContentText
              sx={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1.2em",
              }}
            >
              Fill your course subject{" "}
              <CloseIcon
                onClick={() => setSelect(false)}
                sx={{ color: "#fff", cursor: "pointer" }}
              />
            </DialogContentText>
            <Divider sx={{ borderColor: props.head, width: "100%" }} />
            <TextField
              label="Enter All the Subject"
            
              onChange={(e) => setName(e.target.value)}
              value={name}
              InputLabelProps={{ sx: { color: "#fff"  } }}
              sx={{ borderColor: "#fff", marginTop: "1em" }}
              InputProps={{
                sx: { color: '#fff' },
                endAdornment: (
                  <IconButton onClick={store}>
                    <AddIcon sx={{ color: props.head }} />
                  </IconButton>
                ),
              }}
            />
            <Box
              sx={{
                display: "flex",
                maxWidth: "300px",
                gap: "0.7em",
                flexWrap: "wrap",
              }}
            >
              {subjects.map((data, id) => (
                <Paper
                  key={id}
                  sx={{
                    color: "#fff",
                    background: "#000",
                    flexGrow: "1",
                    padding: "0.5em 0.5em",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {data} <CloseIcon onClick={() => handleDelete(id)} />
                </Paper>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                background: "#fff !important",
                color: "#000",
                fontWeight: "700",
                maxHeight: "3em",
                width: "7em",
                alignSelf: "end",
                marginTop: "0.7em",
              }}
              onClick={savesubject}
            >
              Save
            </Button>
          </DialogContent>
        </Dialog>
      </Stack>
      <ToastContainer />
    </>
  );
};

export default Attendancebody;
