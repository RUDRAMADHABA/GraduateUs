import React from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SecurityIcon from '@mui/icons-material/Security';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import PeopleIcon from '@mui/icons-material/People';

const FaqQues = [
	{
		icon: <SentimentSatisfiedAltIcon />,
		ques: "How to search for new opportunities?",
		ans: "Try out our internship section it's refreshed every second with a new placement opportunity.",
	},
	{
		icon: <HorizontalSplitIcon />,
		ques: "How can we get referrals?",
		ans: "Ping into our chat section where you can join groups and have chats with interns from top MNC's.",
	},
	{
		icon: <ChatBubbleOutlineIcon/>,
		ques: "What are the options available for career goals?",
		ans: "We got you covered with our curated pyq's and notes for your easy syllabus coverage",
	},
	{
		icon: <LibraryBooksIcon />,
		ques: "How is the attendance calculated?",
		ans: "We have our daily attendance tracker that keeps an eye and alarms you of maintaining a minimum of 75% attendance.",
	},
	{
		icon: <WorkspacePremiumIcon />,
		ques: "Why premium?",
		ans: "Because it helps you with personalised chats and resume review that increases your success chances.",
	},
	{
		icon: <SecurityIcon  />,
        ques: "Why we need to login once again after a duration?",
		ans: "It's a safety feature to ensure account security.",
	},
	{
		icon: <DinnerDiningIcon  />,
		ques: "Can we really order food on app?",
		ans: "Ya to tackle your hunger we got you delivery at your doorstep on ordering from the app",
	},
	{
		icon: <PeopleIcon  />,
		ques: "Is the community section open to all?",
		ans: "Yes, we have your back at all times.",
	},
];

export default FaqQues;
