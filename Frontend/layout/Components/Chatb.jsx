import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Button, Stack } from "@mui/material";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const ChatsPage = (props) => {
  const [chats, setChats] = useState([]);
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const userSession = await getSession();
        setSession(userSession);
        const headers = {
          Authorization: `Bearer ${userSession.user.token}`,
        };

        const response = await axios.get(
          "https://graduate-us-backend-gkli.onrender.com/chat",
          { headers }
        );
        setChats(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChats();
  }, []);

  const handleChatClick = (chatId) => {
    router.push(`/messages/?chatId=${chatId}`);
  };

  const handleCommunityChat = async () => {
    const userSession = await getSession();
    try {
      const headers = {
        Authorization: `Bearer ${userSession.user.token}`,
      };
      const response = await axios.put(
        "https://graduate-us-backend-gkli.onrender.com/chat/groupAdd",
        {
          chatId: "63e26216cac59dee1ad19c17",
          userId: userSession.user._id,
        },
        { headers: headers }
      );
      console.log(response.data);
      router.push(`/chatglobal`);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  // Filter out chats with no messages (no latestmessage)
  const filteredChats = chats.filter((chat) => chat.latestMessage);

  return (
    <Box
      sx={{ maxWidth: 800, padding: 4 }}
      marginTop={{ sm: "105px", md: "125px" }}
      marginLeft={{ sm: "106px", md: "303px" }}
    >
      <Typography variant="h4" align="center" sx={{ color: props.letter }}>
        Available Chats
      </Typography>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          gap="12px"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="/comchat.jpg"
            alt="User Avatar"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />{" "}
          <Typography variant="h6" sx={{ color: props.letter }}>
            Community
          </Typography>
        </Stack>
        <Button variant="contained" onClick={handleCommunityChat}>
          Chat
        </Button>
      </Box>
      {filteredChats.map((chat) => {
        if (chat.users.length === 1) {
          return (
            <Box
              key={chat._id}
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                gap="12px"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={chat.users[0].pic}
                  alt="User Avatar"
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                />{" "}
                <Typography variant="h6" sx={{ color: props.letter }}>
                  You
                </Typography>
              </Stack>
              <Button
                variant="contained"
                onClick={() => handleChatClick(chat._id)}
              >
                Chat
              </Button>
            </Box>
          );
        }
        const otherUser = chat.users.find(
          (user) => user._id !== session.user._id
        );

        return (
          <Box
            key={chat._id}
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              gap="12px"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={otherUser.pic}
                alt="User Avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />{" "}
              <Typography variant="h6" sx={{ color: props.letter }}>
                {otherUser.name}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              onClick={() => handleChatClick(chat._id)}
            >
              Chat
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default ChatsPage;
