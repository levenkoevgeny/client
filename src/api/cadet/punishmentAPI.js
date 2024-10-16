import BaseAPI from "@/api/baseAPIClass"

class PunishmentAPI extends BaseAPI {}

export default function getPunishmentAPIInstance() {
  return new PunishmentAPI("punishment", {
    cadet: "",
    punishment_kind: "",
    punishment_start_date__gte: "",
    punishment_start_date__lte: "",
    punishment_start_order_date__gte: "",
    punishment_start_order_date__lte: "",
    punishment_start_order_number__icontains: "",
    punishment_start_order_owner: "",
    punishment_start_extra_data__icontains: "",
    punishment_expiration_date__gte: "",
    punishment_expiration_date__lte: "",
    punishment_expiration_order_date__gte: "",
    punishment_expiration_order_date__lte: "",
    punishment_expiration_order_number__icontains: "",
    punishment_expiration_order_owner: "",
    punishment_expiration_extra_data__icontains: "",
  })
}
