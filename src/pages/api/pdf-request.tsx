import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // URL del PDF en Dropbox (cambia esto por tu enlace)
    const pdfUrl =
      "https://www.dropbox.com/scl/fi/8uk8j67q3s6qcq8xiht37/ASC-2024-02-Cap-tulo.pdf?rlkey=jbb4vqh6i7rz5qj5r76c7ebvt&e=1&dl=1";

    // Hacer la solicitud al PDF en Dropbox
    const response = await axios.get(pdfUrl, {
      responseType: "arraybuffer", // Para manejar archivos binarios
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    // // Enviar el PDF como respuesta
    // res.setHeader("Content-Type", "application/pdf");
    res.send(response.data);
  } catch (error) {
    console.error("Error en el proxy:", error);
    res.status(500).json({ error: "Error al obtener el PDF" });
  }
}
