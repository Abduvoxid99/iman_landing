export const afterOneMonth = () => {
  const date = new Date();
  const nMonth = date.getMonth() + 1;
  switch (nMonth) {
    case 0:
    case 12:
      return "january";
    case 1:
      return "february";
    case 2:
      return "march";
    case 3:
      return "april";
    case 4:
      return "may";
    case 5:
      return "june";
    case 6:
      return "july";
    case 7:
      return "august";
    case 8:
      return "september";
    case 9:
      return "october";
    case 10:
      return "november";
    case 11:
      return "december";
    default:
      return null;
  }
};

export const afterTwoMonth = () => {
  const dt = new Date();
  const nTwoMonth = dt.getMonth() + 2;
  switch (nTwoMonth) {
    case 0:
      return "january";
    case 1:
    case 13:
      return "february";
    case 2:
      return "march";
    case 3:
      return "april";
    case 4:
      return "may";
    case 5:
      return "june";
    case 6:
      return "july";
    case 7:
      return "august";
    case 8:
      return "september";
    case 9:
      return "october";
    case 10:
      return "november";
    case 11:
      return "december";
    default:
      return null;
  }
};
