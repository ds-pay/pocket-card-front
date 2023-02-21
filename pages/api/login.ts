import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, idpocket, passwordpock, password } = req.body;

    // Validate the user's credentials here
    if (idpocket === "Anderson" && passwordpock === "password") {
      return res.status(200).json({ message: `Hola ${idpocket}` });
    } if (email === "correo@correo.com" && password === "12345") {
      return res.status(200).json({ message: `Hola convenio ${email}` })
    } else {
      return res.status(401).json({ message: "Usuario o contraseña invalido" });
    }
    
  } catch (err) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}