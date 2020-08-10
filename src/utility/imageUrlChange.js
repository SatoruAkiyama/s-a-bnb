export const imageUrlChange = (id, image) => {
  let imageUrl;
  // eslint-disable-next-line
  if (id == 3) {
    imageUrl =
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  } // eslint-disable-next-line
  else if (id == 11) {
    imageUrl =
      "https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  } // eslint-disable-next-line
  else if (id == 12) {
    imageUrl =
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 13) {
    imageUrl =
      "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 14) {
    imageUrl =
      "https://images.pexels.com/photos/2101087/pexels-photo-2101087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 15) {
    imageUrl =
      "https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 16) {
    imageUrl =
      "https://images.pexels.com/photos/2893177/pexels-photo-2893177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 17) {
    imageUrl =
      "https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 18) {
    imageUrl =
      "https://images.pexels.com/photos/296109/pexels-photo-296109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  // eslint-disable-next-line
  else if (id == 19) {
    imageUrl =
      "https://images.pexels.com/photos/2155202/pexels-photo-2155202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  } else {
    imageUrl = image;
  }
  return imageUrl;
};
