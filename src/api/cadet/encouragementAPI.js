import BaseAPI from "@/api/baseAPIClass"

class EncouragementAPI extends BaseAPI {}

let encouragementAPIInstance = new EncouragementAPI("encouragement", {
  encouragement_cadet: "",
  encouragement_kind: "",
  encouragement_date__gte: "",
  encouragement_date__lte: "",
  encouragement_extra_data__icontains: "",
})

export default encouragementAPIInstance