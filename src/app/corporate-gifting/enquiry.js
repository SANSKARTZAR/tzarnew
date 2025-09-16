// pages/api/enquiry.js
import { promises as fs } from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, services, city, country } = req.body;

  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'enquiries.xlsx');

  try {
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    const workbook = new ExcelJS.Workbook();
    let worksheet;

    // Check if the Excel file already exists
    try {
      await fs.access(filePath);
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet('Enquiries') || workbook.addWorksheet('Enquiries');
    } catch {
      worksheet = workbook.addWorksheet('Enquiries');
      worksheet.addRow(['Name', 'Phone', 'Email', 'Services', 'City', 'Country', 'Date']);
    }

    worksheet.addRow([name, phone, email, services, city, country, new Date().toLocaleString()]);

    await workbook.xlsx.writeFile(filePath);

    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving to Excel:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
