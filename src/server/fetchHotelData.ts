export   async function fetchHotelData(req:any, res:any) {
    const hotelId = req.params.id;

    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]; // Add 24 hours for tomorrow
  
    const {
      check_in = today,
      check_out = tomorrow,
      rooms = 1,
      currency = 'USD',
      room0_adults = 2,
      room0_children = 0
    } = req.query;

    const url = `https://www.mobytrip.com/apis/hotels/${hotelId}/?check_in=${check_in}&check_out=${check_out}&rooms=${rooms}&currency=${currency}&room0_adults=${room0_adults}&room0_children=${room0_children}`;
  
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