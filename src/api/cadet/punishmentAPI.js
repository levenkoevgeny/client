import BaseAPI from "@/api/baseAPIClass"

class PunishmentAPI extends BaseAPI {}

export default function getPunishmentAPIInstance() {
  return new PunishmentAPI("punishment", {
    punishment_cadet: "",
    punishment_kind: "",
    punishment_start_date__gte: "",
    punishment_start_date__lte: "",
    punishment_expiration_date__gte: "",
    punishment_expiration_date__lte: "",
    punishment_extra_data__icontains: "",
  })
}
