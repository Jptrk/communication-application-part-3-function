/*-------------------------*/
/*---- Format pathname ----*/
/*-------------------------*/
export function formatPathName(path) {
  const index = path.lastIndexOf("/");
  const pathname = path.substring(index + 1);

  return pathname;
}

/*-------------------------------------*/
/*---- Fetch single data by userID ----*/
/*-------------------------------------*/
