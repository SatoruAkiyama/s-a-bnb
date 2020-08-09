export const RECRUIT_DATA = {
  backendDeveloper: {
    link: "backendDeveloper",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Backend Developer",
    id: 1,
  },
  frontendDeveloper: {
    link: "frontendDeveloper",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Frontend Developer",
    id: 2,
  },
  dataAnalyst: {
    link: "dataAnalyst",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Data Analyst",
    id: 3,
  },
  designer: {
    link: "designer",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/05/31/13/45/young-791849_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Designer",
    id: 4,
  },
  manager: {
    link: "manager",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Management",
    id: 5,
  },
  trainigManager: {
    link: "trainigManager",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678_1280.jpg",
    salary: "$600/ month",
    location: "New York",
    jobtype: "Full-time",
    experienceLevel: "Senior",
    role: "Trainig Manager",
    id: 6,
  },
};

export const RECRUIT_DATA_FOR_PREVIEW = Object.keys(RECRUIT_DATA).map(
  (key) => RECRUIT_DATA[key]
);

export const getWorkData = (workUrlParam) => {
  return RECRUIT_DATA[workUrlParam];
};
