let hotelIds = [80, 90, 92, 96, 101, 106, 110, 116, 117, 120];

let findHotel = (arr, key) => {
    for(let id of hotelIds){
        if(id === key){
            return true;
        }
    }
    return false;
}

console.log(findHotel(hotelIds, 120));