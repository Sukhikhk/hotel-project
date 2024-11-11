import { remult, withRemult } from 'remult';
import { Hotel } from '../shared/hotel';

export   async function fetchHotelData(req:any, res:any) {
    const hotelId = req.params.id;

    const queryParams = new URLSearchParams(req.query).toString();
    const url = `https://www.mobytrip.com/apis/hotels/${hotelId}/?${queryParams}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      res.json(data);


      await withRemult(async () => {
        const hotelRepo = remult.repo(Hotel);
        if (await hotelRepo.findId(data.code)) {
        const hotelRecord = await hotelRepo.update(data.code, data); 
        }
        else {
          const hotelRecord = await hotelRepo.insert(data);
        }
      });


    } catch (error:any) {
      console.error("Error fetching hotel data:", error);
      res.status(500).json({ error: error.message });
    }
  }