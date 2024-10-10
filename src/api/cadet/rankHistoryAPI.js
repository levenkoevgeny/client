import BaseAPI from "@/api/baseAPIClass"

class RankHistoryAPI extends BaseAPI {}

export default function getRankHistoryAPIInstance() {
  return new RankHistoryAPI("rank-history", {
    cadet: "",
    rank: "",
    rank_date__gte: "",
    rank_date__lte: "",
    extra_data__icontains: "",
  })
}
