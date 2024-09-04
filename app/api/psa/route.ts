import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const serialNumber = searchParams.get('serialNumber');
  const url = `https://www.psacard.com/cert/${serialNumber}`;
  
  const scraperApiKey = '55d0301e218465f346fbb2bebc026ddf';
  const apiUrl = `http://api.scraperapi.com?api_key=${scraperApiKey}&url=${encodeURIComponent(url)}`;

  try {
    // Fetch the page content through ScraperAPI
    const response = await axios.get(apiUrl);
    const html = response.data;

    const $ = cheerio.load(html);
    const gradeText = $('#mainContent > div > table').text().trim();
    const data: any = {};
    const lines = gradeText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line);

    lines.forEach(line => {
      if (line.startsWith('Certification Number')) {
        data['Certification_Number'] = parseInt(line.replace(/\D/g, ''));
      } else if (line.startsWith('Label Type')) {
        data['Label Type'] = line.split('Label Type')[1].trim();
      } else if (line.startsWith('Reverse Cert Number/Barcode')) {
        data['Reverse Cert Number / Barcode'] = line
          .split('Reverse Cert Number/Barcode')[1]
          .trim();
      } else if (line.startsWith('Year')) {
        data['Year'] = parseInt(line.replace(/\D/g, ''));
      } else if (line.startsWith('Brand')) {
        data['Brand'] = line.split('Brand')[1].trim();
      } else if (line.startsWith('Sport')) {
        data['Sport'] = line.split('Sport')[1].trim();
      } else if (line.startsWith('Card Number')) {
        data['Card Number'] = parseInt(line.replace(/\D/g, ''));
      } else if (line.startsWith('Player')) {
        data['Player'] = line.split('Player')[1].trim();
      } else if (line.startsWith('Variety/Pedigree')) {
        data['Variety / Pedigree'] = line.split('Variety/Pedigree')[1].trim();
      } else if (line.startsWith('Grade')) {
        data['Grade'] = line.split('Grade')[1].trim(); // Ensure the whole grade string is captured
      }
    });

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    console.error('Error fetching HTML:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
