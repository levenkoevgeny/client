import BaseAPI from "@/api/baseAPIClass"

class CadetAPI extends BaseAPI {}

let cadetAPIInstance = new CadetAPI("cadet", {
  last_name_rus: "",
})

export default cadetAPIInstance
