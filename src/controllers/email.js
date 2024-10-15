import { main } from "../email/email.js";

export const postData = async (req, res) => {
  const {sender,to,subject,content} = req.body

  try {
    const result = await main(sender, to, subject, content)

    if (result) {
      res.status(200).json(result)
    } else {
      res.status(500).json("Error")
    }
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}