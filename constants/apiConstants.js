const base = "https://beefriend-backend.onrender.com";

const magazyn = {
  getMagazyn: `${base}/magazyn`,
  addFodder: `${base}/magazyn/addFodder`,
  addTools: `${base}/magazyn/addTools`,
  substractFodder: `${base}/magazyn/deleteFodder/`,
  substractTool: `${base}/magazyn/deleteTool/`,
};

const user = {
  register: `${base}/auth/signup`,
  login: `${base}/auth/login`,
  changePassword: `${base}/user/changepassword`,
  changeEmail: `${base}/user/changeemail`,
  addEvent: `${base}/event/addEvent`,
  getCalendar: `${base}/event`,
};

const beeGarden = {
  getBeeGarden: `${base}/beeGarden`,
  postBeeHave: `${base}/addBeeHave`,
  deleteBeeHave: `${base}/delete/`,
  setBeeHavePosition: `${base}/setPosition`,
  addData: `${base}/addData/`,
  addNote: `${base}/notes/addNote/`,
  deleteNote: `${base}/notes/deleteNote/`,
  updateNote: `${base}/notes/updateNote/`,
};

const apiConstants = {
  base,
  user,
  beeGarden,
  magazyn,
};

export default apiConstants;
