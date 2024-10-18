<template>
  <div class="container-fluid">
    <div class="my-3"></div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Категория</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Факультет</th>
          <th scope="col">Дата рождения</th>

          "date_of_birth", "place_of_birth", "photo", "address_residence",
          "address_registration", "phone_number", "personal_number_mvd",
          "passport_number", "passport_issue_date", "passport_validity_period",
          "passport_issue_authority", "identification_number",
          "father_last_name", "father_first_name", "father_patronymic",
          "father_date_of_birth", "father_place_of_work", "father_phone_number",
          "mother_last_name", "mother_first_name", "mother_patronymic",
          "mother_date_of_birth", "mother_place_of_work", "mother_phone_number",
          "foreign_language_was", "foreign_language_will_be", "subdivision",
          "academy_start_year", "academy_end_year", "component_organ",
          "entrance_category", "arrived_from_go_rovd", "social_status",
          "region_for_medical_examination", "military_office", "extra_data",
          "vpk", "vpk_data", "aims_to_graduate_with_honors", "is_class_vpn",
          "is_class_pn", "is_class_other", "has_achievements_in_sports",
          "is_olympiad_winner", "health_group", "ppfl_test",
          "medical_age_group", "needs_increased_attention",
          "needs_psychological_support", "is_risk_group", "has_conviction",
          "has_dactocard", "has_gusb_check", "has_employee_in_family",
          "is_orphan", "passed_medical_examination",
          "passed_medical_examination_extra_data",
          "has_certificate_ideas_for_Belarus", "has_certificate_kind_heart",
          "is_employee"
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            <div>
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div>
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div>
              <input type="text" class="form-control" />
            </div>
          </th>
          <th></th>
          <th></th>
          <th scope="col">
            <div class="d-flex justify-content-between">
              <div class="me-1">
                <input type="date" class="form-control" />
              </div>
              <div>
                <input type="date" class="form-control" />
              </div>
            </div>
          </th>
          <th scope="col">
            <div>
              <select name="" id="" class="form-select">
                <option value="">-----</option>
                <option value="">-----</option>
                <option value="">-----</option>
              </select>
            </div>
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CadetListOkView",
  components: {},
  data() {
    return {}
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
