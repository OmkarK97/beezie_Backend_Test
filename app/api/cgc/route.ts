import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const serialNumber = searchParams.get("serialNumber");
  const url = `https://www.cgccards.com/certlookup/${serialNumber}`;

  const scraperApiKey = "55d0301e218465f346fbb2bebc026ddf";
  const apiUrl = `http://api.scraperapi.com?api_key=${scraperApiKey}&url=${encodeURIComponent(
    url
  )}`;

  try {
    const response = await axios.get(apiUrl);
    const html = response.data;

    const $ = cheerio.load(html);
    const data: any = {};

    data['Cert #'] = $('dl:has(dt:contains("Cert #")) dd').text().trim();
    data['Card Name'] = $('dl:has(dt:contains("Card Name")) dd').text().trim();
    data['Game'] = $('dl:has(dt:contains("Game")) dd').text().trim();
    data['Year'] = parseInt($('dl:has(dt:contains("Year")) dd').text().trim(), 10);
    data['Language'] = $('dl:has(dt:contains("Language")) dd').text().trim();
    data['Card Set'] = $('dl:has(dt:contains("Card Set")) dd').text().trim();
    data['Card Number'] = parseInt($('dl:has(dt:contains("Card Number")) dd').text().trim(), 10);
    data['Variant 1'] = $('dl:has(dt:contains("Variant 1")) dd').text().trim();
    data['Grade'] = $('dl:has(dt:contains("Grade")) dd').text().replace(/\t+/g, ' ').trim();
    data['Grader Notes'] = $('dl:has(dt:contains("Grader Notes")) dd').text().trim();


    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    console.error("Error fetching HTML:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
