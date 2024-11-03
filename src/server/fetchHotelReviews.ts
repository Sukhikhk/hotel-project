export   async function fetchHotelReviews(req:any, res:any) {
    const hotelId = req.params.id;

    const url = `
https://www.mobytrip.com/apis/reviews/${hotelId}`;

  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
      res.status(500).json({ error: error.message });
    }
  }