const ValidateTest = (name) => {
  const usernameExp = /^[가-힣]{2,10}$/;
  const passwordExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  const birthdateExp = /^\d{4}-\d{2}-\d{2}$/;
  const emailExp = /^(.+)@(\S+)$/;
  const bodyinfoExp = /^\d{2,3}$/;

  switch (name) {
    case "username":
      return usernameExp;

    case "birthdate":
      return birthdateExp;

    case "password":
      return passwordExp;

    case "password2":
      return passwordExp;

    case "email":
      return emailExp;

    case "height":
      return bodyinfoExp;

    case "weight":
      return bodyinfoExp;

    default:
      break;
  }
};

export default ValidateTest;
