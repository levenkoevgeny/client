import BaseAPI from "@/api/baseAPIClass"

class rewardHistoryAPI extends BaseAPI {}

export default function getRewardHistoryAPIInstance() {
  return new rewardHistoryAPI("reward-history", {
    cadet: "",
    reward: "",
    reward_date__gte: "",
    reward_date__lte: "",
    order_number: "",
    order_owner: "",
    reason__icontains: "",
  })
}
