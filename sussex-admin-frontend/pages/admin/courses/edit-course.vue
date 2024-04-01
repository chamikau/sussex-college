<template>
  <div>
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <ul class="breadcrumb mb-1">
          <li><a href="#" @click.prevent="backToPage">Courses</a></li>
          <li><a>View</a></li>
        </ul>
        <div class="row g-2 align-items-center">
          <div class="col">
            <div class="d-flex align-items-center">
              <span class="fw-bold fs-1">{{ course.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-body">
      <div class="container-xl">
        <div class="row">
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="card">
              <div class="list-group list-group-flush" data-bs-toggle="tabs">
                <NuxtLink class="list-group-item list-group-item-action" :to="`/admin/courses/edit-course/${course.id}/general`">
                  Primary Details
                </NuxtLink>
                <NuxtLink class="list-group-item list-group-item-action" :to="`/admin/courses/edit-course/${course.id}/edit-contents`">
                  Content
                </NuxtLink>
                <NuxtLink class="list-group-item list-group-item-action" :to="`/admin/courses/edit-course/${course.id}/student-applied-courses`">
                  Students
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-md-9">
            <NuxtChild/>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "_id",
  layout: 'dashboard-admin',

  data(){
    return {
      course:{},

    }
  },

  mounted(){
    this.getCourses();
  },
  methods:{
    async getCourses() {
      this.course = (await this.$axios.$get(`/api/admin/courses/${this.$route.params.id}`)).data
    },
    backToPage(){
      this.$router.push(`/admin/courses`);
    },
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
