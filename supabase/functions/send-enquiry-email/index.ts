import { withSupabase } from "npm:@supabase/server@^1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

export default {
  fetch: withSupabase({ auth: "none" }, async (req) => {
    try {
      const {
        name,
        email,
        phone,
        company,
        service,
        message,
      } = await req.json();

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "One Space PDC <onboarding@resend.dev>",

  
          to: ["ameerarashid04@gmail.com"],

          subject: `New Website Enquiry - ${service}`,

          html: `
            <h2>New Website Enquiry</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Service:</strong> ${service}</p>

            <hr>

            <h3>Project Details</h3>

            <p>${message}</p>
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return Response.json(data, {
          status: response.status,
        });
      }

      return Response.json({
        success: true,
      });
    } catch (error) {
      return Response.json(
        {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        },
        {
          status: 500,
        }
      );
    }
  }),
};
