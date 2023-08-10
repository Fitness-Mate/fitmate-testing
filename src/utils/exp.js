const ValidateTest = (name) => {
  const usernameExp = /^[가-힣]{2,10}$/;
  const passwordExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const birthDateExp = /^\d{4}-\d{2}-\d{2}$/;
  const loginEmailExp = /^(.+)@(\S+)$/;
  const bodyinfoExp = /^\d{2,3}$/;

  switch (name) {
    case "userName":
      return usernameExp;

    case "birthDate":
      return birthDateExp;

    case "password":
      return passwordExp;

    case "password2":
      return passwordExp;

    case "loginEmail":
      return loginEmailExp;

    case "height":
      return bodyinfoExp;

    case "weight":
      return bodyinfoExp;

    default:
      break;
  }
};

export default ValidateTest;
