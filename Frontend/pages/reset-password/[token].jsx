import { useEffect, useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordResetPage() {
  const [loading1, setLoading1] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { token } = router.query;

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Handle password reset logic here
    if (newPassword !== confirmPassword) {
      // Passwords don't match, show error
      console.error("Passwords don't match!");
      return;
    }
    // Simulating loading state for 2 seconds
    setLoading1(true);
    try {
      const response = await axios.post(
        `https://graduate-us-backend-gkli.onrender.com/user/reset-password?token=${token}`,
        {
          password: newPassword,
        }
      );

      // Handle the response data
      const data = response.data;
      if (data.success) {
        console.log("User password updated:", data.message);
        toast.success("Password reset successful! Please log in again with your new password.");
        // Redirect to login page or any other appropriate action
      } else {
        console.log("Error:", data.message);
        toast.error("Password reset failed. Please try again.");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
    setLoading1(false);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#151515",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#fff",
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: 300,
        }}
      >
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: "#3d3d3d",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#3d3d3d",
            },
          }}
          onClick={handleResetPassword}
          disabled={loading1}
        >
          {loading1 ? "Resetting..." : "Reset Password"}
        </Button>
      </Stack>
      <ToastContainer position="top-center" autoClose={5000} />
    </Stack>
  );
}
