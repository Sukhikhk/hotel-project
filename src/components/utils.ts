export const getAllRoomOffers = (rooms:any, externalLinks:any) => {
    const allRooms: any[] = [];
  
    rooms.map((room:any) => {
    const updatedRoom = room;
    updatedRoom.baseRate = room.rates.reduce((min: number, rate: any) => {
      if (rate.baseRate < min) {
        return rate.baseRate;
      }
      return min;
    }, room.rates[0].baseRate);
    allRooms.push(updatedRoom);
  });
  
  Object.keys(externalLinks).forEach((key: string) => {
    const updatedLink = externalLinks[key];
    updatedLink.externalProvider = key;
    allRooms.push(updatedLink);
  });
  
  return allRooms
  }

  export const findLowestRateForRoom = (room: any) => {
    if (room.link) return room;
    return room.rates.reduce((min: any, rate: any) => {
      if (rate.baseRate < min.baseRate) {
        return rate;
      }
      return min;
    }, room.rates[0]);
  };

  export const findLowestRoom = (rooms:any[]) => {
    return rooms.reduce((min: any, room: any) => {
      const lowestRate = findLowestRateForRoom(room);
      if (lowestRate.baseRate === min.baseRate) {
        if (lowestRate.chargeAmount < min.chargeAmount) {
          return lowestRate;
        }
      }
      else if (lowestRate.baseRate < min.baseRate) {
        return lowestRate;
      }

      return min;
    }, rooms[0]);
  }

  export const sortRooms = (rooms:any[]) => {
    return rooms.sort((a: any, b: any) => {
      const lowestRateA = findLowestRateForRoom(a);
      const lowestRateB = findLowestRateForRoom(b);
      if (lowestRateA.baseRate === lowestRateB.baseRate) {
        return lowestRateA.chargeAmount - lowestRateB.chargeAmount;
      }
      return lowestRateA.baseRate - lowestRateB.baseRate;
    });
  }