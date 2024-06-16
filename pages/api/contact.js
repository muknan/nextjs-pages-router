import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Please make a post request!",
    });
  }

  const contactData = {
    fullName: "Gojo Satoru",
    email: "gojo@satoru.com",
    subject: "booking",
    message: "Hey!",
  };

  const { data, error } = await supabase.from("contact").insert([contactData]);

  if (error) {
    res.status(500).json({
      success: fale,
      message: "Could not your message, please try again!",
    });
  }

  // Success message
  res.status(200).json({
    success: true,
    message: "Thanks for your message, we will be in touch soon!",
  });
}
