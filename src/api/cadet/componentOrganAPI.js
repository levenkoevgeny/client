import BaseAPI from "@/api/baseAPIClass"

class ComponentOrganAPI extends BaseAPI {}

export default function getComponentOrganAPIInstance() {
  return new ComponentOrganAPI("component-organ", {})
}
