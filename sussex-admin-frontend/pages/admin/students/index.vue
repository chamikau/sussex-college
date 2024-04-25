<template>
  <div class="page">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <ul class="breadcrumb mb-1">
          <li><a>Students</a></li>
        </ul>
        <div class="row g-2 align-items-center">
          <div class="col d-flex align-items-center">
            <span class="fw-bold fs-1">Students</span>
          </div>
          <div class="card">
            <div class="card-body"><h3 class="card-title">Filters</h3>
              <div class="row test-1">
                <div class="col-md-4">
                  <lable class="form-label">PRG No</lable>
                  <input
                    v-model="attributes.filters['filter[prg_no]']"
                    @keyup="filterUpdates"
                    type="text"
                    class="form-control"
                    placeholder="Search prg no">
                </div>
                <div class="col-md-4">
                  <lable class="form-label">Name</lable>
                  <input
                    v-model="attributes.filters['filter[search]']"
                    @keyup="filterUpdates"
                    type="text"
                    class="form-control"
                    placeholder="Search name">
                </div>
                <div class="col-md-4">
                  <lable class="form-label">Grade</lable>
                  <Select
                    :attributes="grade_attributes"
                    @selectUpdates="selectGradeState"
                    @queryUpdates="getGradeList"
                    placeholder="Search grade"
                  >
                  </Select>{{grade_attributes}}
                </div>
              </div>
            </div>
            <div class="card-footer text-end">
              <div class="d-flex">
                <a
                  class="btn btn-outline-secondary ms-auto"
                  @click="filterClear()">Reset</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header row">
                <div class="col mt-md-0 mt-2">
                  <h3 class="card-title">
                    Students List
                  </h3>
                </div>
              </div>
              <div class="contents">
                <Table :attributes="attributes" @inputUpdates="inputUpdates">
                  <template v-slot:name="props">
                    {{props.record.first_name + ' ' + props.record.last_name}}
                  </template>
                  <template v-slot:action="props">
                    <button
                      data-bs-placement="bottom" data-bs-toggle="tooltip" title="View"
                      @click.stop="goToViewDetails(props)" class="btn  w-25 btn-icon" aria-label="">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                      </svg>
                    </button>
                  </template>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {state_with_colors, grade_list} from '@/constants/constants.js';


export default {
  name: "students",
  layout: 'dashboard-admin',
  data() {
    return {
      state_with_colors,
      grade_list,
      grade_attributes: {
        data: [],
        selected: {}
      },
      jobs: "",
      filters: {},
      attributes: {
        table_id: 'students_table',
        cache: false,
        loading: false,
        labels: [
          {key: 'prg_no', name: 'PRG No', sort: true},
          {key: 'name', name: 'Name', sort: true},
          {key: 'email', name: 'Email', sort: true},
          {key: 'grade', name: 'Grade', sort: true},
          {key: 'action', name: 'Action'},
        ],
        api_response: {},
        filters: {},
        table_component_values: {}
      },
    }
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    async goToViewDetails(props) {
      await this.$router.push(`/admin/students/student-view/${props.record.id}/general`)
    },
    async getStudents(page = 1, sort = '', search = '', per_page = 15,) {
      try {
        this.attributes.api_response = await this.$axios.$get('/api/admin/students',
          {
            params: {
              per_page: per_page,
              page: page,
              sort: sort,
              'filter[search]': search,
              ...this.attributes.filters
            }
          }
        );
        this.data = this.attributes.api_response;
        this.jobs = this.data.data
      } catch (error) {
        return error;
      }
    },
    selectGradeState() {
      this.attributes.filters['filter[grade]'] = this.grade_attributes.selected.value;
      this.filterUpdates()
    },
    getGradeList() {
      console.log('sdfs')
      this.grade_attributes.data = this.grade_list
    },
    inputUpdates(values) {
      this.attributes.table_component_values = values;
      this.getStudents(values.page, values.sort.sort_input, values.search, values.per_page)
    },
    filterUpdates() {
      const values = this.attributes.table_component_values
      this.getStudents(1, values.sort.sort_input, values.search, values.per_page)
    },
    filterClear() {
      this.attributes.filters = {}
      this.grade_attributes.selected = {}
      this.getStudents()
    }
  },

}
</script>

<style scoped>
.breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: inline;
  color: #888;
}

.breadcrumb li:not(:last-child)::after {
  content: ">";
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  color: #888;
}

.breadcrumb li:last-child {
  color: #888;
}
</style>
