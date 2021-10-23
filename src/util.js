export const getRedirectPath = ({ identity, avatar }) => {
  let url = identity === "employer" ? "/employer" : "/employee";
  if (!avatar) {
    url += "info";
  }
  return url;
};
