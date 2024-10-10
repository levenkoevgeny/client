import BaseAPI from "@/api/baseAPIClass"

class RankAPI extends BaseAPI {}

export default function getRankAPIInstance() {
  return new RankAPI("rank", {})
}
