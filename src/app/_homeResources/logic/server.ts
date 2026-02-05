export const NomineesServer = {
  GetNomineeByCode: (code: string) => {
    console.log("🚀 ~ code:", code);
    return {
      method: "GET",
      url: `/award/nominations/code/${code}`,
    };
  },
  GetAllAwards: () => {
    return {
      method: "GET",
      url: `/awards`,
    };
  },
  GetAwardById: (id: number) => {
    return {
      method: "GET",
      url: `/awards/${id}`,
    };
  },
};
