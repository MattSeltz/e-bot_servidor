import brevo from "@getbrevo/brevo"

import {API_KEY} from "../configs/configs.js"

export const main = async (sender,to,subject,content) => {
  let apiInstance = new brevo.TransactionalEmailsApi();

  let apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = API_KEY;

  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = `<html><body><p>${content}</p></body></html>`;
  sendSmtpEmail.sender = { "name": sender.name, "email": sender.email };
  sendSmtpEmail.to = to;

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
    return data
  } catch (error) {
    console.error(error.message)
  }
}