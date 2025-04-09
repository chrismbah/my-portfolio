import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;
  console.log("ENV CHECK", process.env.GOOGLE_FORM_LINK);

  console.log({
    formLink,
    fieldIdName,
    fieldIdEmail,
    fieldIdMessage,
    fieldIdSocial,
  });

  if (
    !formLink ||
    !fieldIdName ||
    !fieldIdEmail ||
    !fieldIdMessage ||
    !fieldIdSocial
  ) {
    return NextResponse.json(
      { message: "Please configure the env variables" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, message, social, email } = body;
    console.log("Body:", body);
    await fetch(
      `${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`
    );
    

    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
