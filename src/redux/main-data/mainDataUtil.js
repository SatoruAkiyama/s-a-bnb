import axios from "axios";

export const getMainData = async () => {
  const citiesUrl = `${window.apiHost}/cities/recommended`;
  const europeUrl = `${window.apiHost}/cities/europe`;
  const asiaUrl = `${window.apiHost}/cities/asia`;
  const exoticUrl = `${window.apiHost}/cities/exotic`;
  const activitiesUrl = `${window.apiHost}/activities/today`;
  const recVenuesUrl = `${window.apiHost}/venues/recommended`;
  const activitiesDivingUrl = `${window.apiHost}/activities/diving`;
  const activitiesBakingUrl = `${window.apiHost}/activities/baking`;
  const activitiesSceneryUrl = `${window.apiHost}/activities/scenery`;

  const promiseArray = [];

  promiseArray.push(axios.get(citiesUrl));
  promiseArray.push(axios.get(europeUrl));
  promiseArray.push(axios.get(asiaUrl));
  promiseArray.push(axios.get(exoticUrl));
  promiseArray.push(axios.get(activitiesUrl));
  promiseArray.push(axios.get(recVenuesUrl));
  promiseArray.push(axios.get(activitiesDivingUrl));
  promiseArray.push(axios.get(activitiesBakingUrl));
  promiseArray.push(axios.get(activitiesSceneryUrl));

  const data = Promise.all(promiseArray).then((data) => {
    const activitiesDiving = data[6].data;
    const activitiesBaking = data[7].data;
    const activitiesScenery = data[8].data;

    const activityMore = [
      ...activitiesBaking.slice(1, 2),
      ...activitiesDiving,
      ...activitiesScenery.slice(1, 2),
    ];

    const allRes = {
      cities: data[0].data,
      europe: data[1].data,
      asia: data[2].data,
      exotic: data[3].data,
      activities: data[4].data,
      recVenues: data[5].data,
      activityMore,
    };

    return allRes;
  });

  return data;
};
