import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalid" }, { status: 400 });
    }

    // TODO: Integrate with Mailchimp/ConvertKit:
    // const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    // const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `apikey ${MAILCHIMP_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: "subscribed",
    //     merge_fields: { FNAME: name || "" },
    //   }),
    // });

    // For now, log and return success
    console.log(`Newsletter signup: ${email} (${name || "no name"})`);

    return NextResponse.json({
      success: true,
      message: "Te-ai abonat cu succes! Vei primi săptămânal mesajul angelic al numărului tău.",
    });
  } catch {
    return NextResponse.json({ error: "Eroare internă. Încearcă din nou." }, { status: 500 });
  }
}
