export async function sendOTP() {
  try {
    const generatedOTP = Math.floor(10000 + Math.random() * 90000).toString();
    await fetch("/api/otp/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: generatedOTP }),
    });
    console.log("Expected OTP:", generatedOTP);
  } catch (error) {
    console.error("sendOTP error: ", error);
  }
}
