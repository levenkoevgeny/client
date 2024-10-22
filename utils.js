export function getLoadListFunction(modelName) {
  return async (cadetId) => {
    if (cadetId) {
      this[`${modelName}APIInstance`].searchObj.cadet = cadetId
    }
    const res =
      await this[`${modelName}APIInstance`].getItemsList("token is here!!!")
    return res.data
  }
}
