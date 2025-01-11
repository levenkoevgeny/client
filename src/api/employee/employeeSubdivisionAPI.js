import BaseAPI from "@/api/baseAPIClass"

class EmployeeSubdivisionAPI extends BaseAPI {}

export default function getEmployeeSubdivisionAPIInstance() {
  return new EmployeeSubdivisionAPI("employee-subdivision", {})
}
