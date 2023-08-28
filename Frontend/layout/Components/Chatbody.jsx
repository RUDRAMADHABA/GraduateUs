import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import io from "socket.io-client";

const ENDPOINT = "https://graduate-us-backend-gkli.onrender.com";
var socket;
const ChatPage = (props) => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [session, setSession] = useState(null); // Add session state
  const scrollContainerRef = useRef(null); // Ref to the scrollable container
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userSession = await getSession();
        setSession(userSession); // Save the session in state
        const headers = {
          Authorization: `Bearer ${userSession.user.token}`,
        };

        const response = await axios.get(
          "https://graduate-us-backend-gkli.onrender.com/message/63e26216cac59dee1ad19c17",
          { headers }
        );

        setMessages(response.data);
        socket.emit("join chat", "63e26216cac59dee1ad19c17");
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, []);

  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  const formatDate = (timestamp) => {
    const now = new Date();
    const messageDate = new Date(timestamp);

    if (now.toDateString() === messageDate.toDateString()) {
      return "Today";
    }

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday.toDateString() === messageDate.toDateString()) {
      return "Yesterday";
    }

    return messageDate.toLocaleDateString([], {
      // year: 'numeric',
      month: "long",
      day: "numeric",
    });
  };

  const sendMessage = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${session.user.token}`,
      };

      const messageData = {
        content: userMessage,
        chatId: "63e26216cac59dee1ad19c17",
      };

      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/message",
        messageData,
        { headers }
      );
      // Assuming the server responds with the newly created message
      const newMessage = response.data;
      socket.emit("new message", response.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear the input field after sending the message
      setUserMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // Scroll to the bottom of the container when the messages update
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (session) {
      socket = io(ENDPOINT);
      socket.emit("setup", session.user);
      socket.on("connected", () => setSocketConnected(true));
    }
  });

  useEffect(() => {
    console.log("socket:",socket);
    if (socket) {
      socket.on("message recieved", (newMessageRecieved) => {
        setMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
      });
    }
    return () => {
      if (socket) {
        socket.off("message recieved");
      }
    };
  });

  const handleUsernameClick = async (userId) => {
    try {
      const headers = {
        Authorization: `Bearer ${session.user.token}`,
      };

      const data = {
        userId,
      };

      const response = await axios.post(
        "https://graduate-us-backend-gkli.onrender.com/chat",
        data,
        { headers }
      );
      const chatId = response.data._id;

      // Navigate to the MessagesPage with the chatId as a query parameter
      router.push(`/messages?chatId=${chatId}`);
      // Handle the response as needed, maybe show a success message or update the UI accordingly
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{ maxWidth: 800, padding: 4 }}
        marginTop={{ sm: "105px", md: "125px" }}
        marginLeft={{ sm: "106px", md: "303px" }}
      >
        <Link href="/chat">
          <Typography
            sx={{
              marginBottom: 2,
              color: props.letter,
              fontStyle: "italic",
              display: "flex",
              justufyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {" "}
            <KeyboardBackspaceIcon sx={{ fontSize: "16px" }} /> Back to chats
          </Typography>
        </Link>
        {/* <Typography variant="h4" align="center" sx={{ marginBottom: 2 ,color:props.letter}} >
        Community Chat
      </Typography> */}
        <Box
          ref={scrollContainerRef} // Assign the ref to the scrollable container
          sx={{
            border: "1px solid #ccc",
            padding: 2,
            maxHeight: 500,
            overflowY: "scroll",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={message._id}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection:
                  message.sender._id === session.user._id
                    ? "row-reverse"
                    : "row",
                marginBottom: 2,
              }}
            >
              {index === 0 ||
              messages[index - 1].sender._id !== message.sender._id ? (
                <Box
                  onClick={() => handleUsernameClick(message.sender._id)} // Call the click handler on username click
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      message.sender._id === session.user._id
                        ? "flex-end"
                        : "flex-start",
                    cursor: "pointer", // Add cursor style to indicate clickability
                  }}
                >
                  <img
                    src={message.sender.pic}
                    alt="User Avatar"
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Box>
              ) : null}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  borderRadius: 4,
                  padding: "10px 15px", // Increase horizontal padding
                  backgroundColor:
                    message.sender._id === session.user._id
                      ? "#DCF8C6"
                      : "#F0F0F0",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Box sx={{ marginLeft: 2 }}>
                  {index === 0 ||
                  messages[index - 1].sender._id !== message.sender._id ? (
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color:
                          message.sender._id === session.user._id
                            ? "green"
                            : "blue",
                      }}
                    >
                      {message.sender.name.toUpperCase()}
                    </Typography>
                  ) : null}

                  <Typography variant="body1">{message.content}</Typography>
                  <Typography variant="caption">
                    {formatDate(message.createdAt)}{" "}
                    {new Date(message.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="Enter your message"
            variant="outlined"
            fullWidth
            value={userMessage}
            onChange={handleChange}
            sx={{
              "& label": {
                color: props.letter,
                opacity: 0.7,
                "&.Mui-focused": {
                  color: props.letter, // Set the label color to white when focused
                }, // Set the label color to white
              },

              "& input": {
                color: props.letter,
              }, // Set the text color using the provided prop
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: props.letter, // Set the outline color using the provided prop
                },
                "&:hover fieldset": {
                  borderColor: props.letter, // Set the outline color to white on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: props.letter, // Set the outline color to white when focused
                },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={sendMessage}
            sx={{
              marginTop: 2,
              color: props.letter1,
              background: props.button,
              "&:hover": {
                background: props.button,
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChatPage;
