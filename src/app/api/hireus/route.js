// app/api/hireus/route.js
import formidable from 'formidable';
import { NextResponse } from 'next/server';
import fs from 'fs';
import Hireus from '@/models/hireus';
import dbConnect from '@/utils/db'; // Make sure this exists

// Required for file parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  await dbConnect();

  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return resolve(NextResponse.json({ message: 'Form parsing failed' }, { status: 500 }));
      }

      try {
        const {
          email,
          firstname,
          phone,
          lastname,
          position,
          experience,
          location,
          coverLetter,
          checkbox,
        } = fields;

        const resumeFile = files.resumeFile?.[0];

        const newEntry = new Hireus({
          email: email?.[0],
          firstname: firstname?.[0],
          phone: phone?.[0],
          lastname: lastname?.[0],
          position: position?.[0],
          experience: experience?.[0] || '',
          location: location?.[0] || '',
          coverLetter: coverLetter?.[0] || '',
          checkbox: checkbox?.[0],
          resumeFile: resumeFile?.originalFilename || '',
        });

        await newEntry.save();

        return resolve(NextResponse.json({ message: 'Submitted successfully' }, { status: 200 }));
      } catch (error) {
        console.error('DB Save Error:', error);
        return resolve(NextResponse.json({ message: 'Database error' }, { status: 500 }));
      }
    });
  });
}
