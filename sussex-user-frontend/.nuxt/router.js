import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cfdfa728 = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\index.vue' /* webpackChunkName: "pages/user/applied-course-lists/index" */))
const _b931ecba = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\index.vue' /* webpackChunkName: "pages/user/applied-event-lists/index" */))
const _5aa6225c = () => interopDefault(import('..\\pages\\user\\approval\\index.vue' /* webpackChunkName: "pages/user/approval/index" */))
const _e06fd2aa = () => interopDefault(import('..\\pages\\user\\confirm-password.vue' /* webpackChunkName: "pages/user/confirm-password" */))
const _31264006 = () => interopDefault(import('..\\pages\\user\\courses\\index.vue' /* webpackChunkName: "pages/user/courses/index" */))
const _19b54081 = () => interopDefault(import('..\\pages\\user\\dashboard.vue' /* webpackChunkName: "pages/user/dashboard" */))
const _0101f1f4 = () => interopDefault(import('..\\pages\\user\\events\\index.vue' /* webpackChunkName: "pages/user/events/index" */))
const _29f74058 = () => interopDefault(import('..\\pages\\user\\job\\index.vue' /* webpackChunkName: "pages/user/job/index" */))
const _5bc4964c = () => interopDefault(import('..\\pages\\user\\news\\index.vue' /* webpackChunkName: "pages/user/news/index" */))
const _47e811e6 = () => interopDefault(import('..\\pages\\user\\organizations.vue' /* webpackChunkName: "pages/user/organizations" */))
const _14f62f74 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\index.vue' /* webpackChunkName: "pages/user/organizations/clinics/index" */))
const _53390e25 = () => interopDefault(import('..\\pages\\user\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/user/organizations/invitations/index" */))
const _9cf7ec6c = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\create.vue' /* webpackChunkName: "pages/user/organizations/clinics/create" */))
const _091d0248 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\_id.vue' /* webpackChunkName: "pages/user/organizations/clinics/_id" */))
const _ded2c354 = () => interopDefault(import('..\\pages\\user\\profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _c759ed28 = () => interopDefault(import('..\\pages\\user\\profile\\index.vue' /* webpackChunkName: "pages/user/profile/index" */))
const _c4985aca = () => interopDefault(import('..\\pages\\user\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/user/profile/2fa/index" */))
const _20354eae = () => interopDefault(import('..\\pages\\user\\profile\\certification\\index.vue' /* webpackChunkName: "pages/user/profile/certification/index" */))
const _59ddf041 = () => interopDefault(import('..\\pages\\user\\profile\\educations\\index.vue' /* webpackChunkName: "pages/user/profile/educations/index" */))
const _120d93fc = () => interopDefault(import('..\\pages\\user\\profile\\general.vue' /* webpackChunkName: "pages/user/profile/general" */))
const _82ef9224 = () => interopDefault(import('..\\pages\\user\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/user/profile/invitations/index" */))
const _97cd6d1e = () => interopDefault(import('..\\pages\\user\\profile\\password.vue' /* webpackChunkName: "pages/user/profile/password" */))
const _f4656a9c = () => interopDefault(import('..\\pages\\user\\profile\\projects\\index.vue' /* webpackChunkName: "pages/user/profile/projects/index" */))
const _3a37f2c6 = () => interopDefault(import('..\\pages\\user\\profile\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/user/profile/skills-and-hobbies/index" */))
const _50328bbf = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\index.vue' /* webpackChunkName: "pages/user/profile/work-experiences/index" */))
const _0e28d1d0 = () => interopDefault(import('..\\pages\\user\\profile\\certification\\create.vue' /* webpackChunkName: "pages/user/profile/certification/create" */))
const _0994629d = () => interopDefault(import('..\\pages\\user\\profile\\educations\\create.vue' /* webpackChunkName: "pages/user/profile/educations/create" */))
const _5b90564c = () => interopDefault(import('..\\pages\\user\\profile\\projects\\create.vue' /* webpackChunkName: "pages/user/profile/projects/create" */))
const _44599242 = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\create.vue' /* webpackChunkName: "pages/user/profile/work-experiences/create" */))
const _9fc0907c = () => interopDefault(import('..\\pages\\user\\profile\\certification\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/certification/_id/general" */))
const _0cfcbacf = () => interopDefault(import('..\\pages\\user\\profile\\educations\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/educations/_id/general" */))
const _6a58ef3e = () => interopDefault(import('..\\pages\\user\\profile\\projects\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/projects/_id/general" */))
const _f1b054de = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/work-experiences/_id/general" */))
const _25ac76d4 = () => interopDefault(import('..\\pages\\user\\profile\\_id.vue' /* webpackChunkName: "pages/user/profile/_id" */))
const _5bc41946 = () => interopDefault(import('..\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _4485b163 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\index.vue' /* webpackChunkName: "pages/user/settings/collections/index" */))
const _6f7e394e = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/index" */))
const _05db02d0 = () => interopDefault(import('..\\pages\\user\\settings\\products\\index.vue' /* webpackChunkName: "pages/user/settings/products/index" */))
const _6767f9bb = () => interopDefault(import('..\\pages\\user\\settings\\roles\\index.vue' /* webpackChunkName: "pages/user/settings/roles/index" */))
const _eb493c7a = () => interopDefault(import('..\\pages\\user\\settings\\tags\\index.vue' /* webpackChunkName: "pages/user/settings/tags/index" */))
const _63220d90 = () => interopDefault(import('..\\pages\\user\\settings\\users\\index.vue' /* webpackChunkName: "pages/user/settings/users/index" */))
const _73e4c5bb = () => interopDefault(import('..\\pages\\user\\settings\\collections\\create.vue' /* webpackChunkName: "pages/user/settings/collections/create" */))
const _b00589a0 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/user/settings/consultations/create" */))
const _661cc1b4 = () => interopDefault(import('..\\pages\\user\\settings\\products\\create.vue' /* webpackChunkName: "pages/user/settings/products/create" */))
const _a568ef3a = () => interopDefault(import('..\\pages\\user\\settings\\roles\\create.vue' /* webpackChunkName: "pages/user/settings/roles/create" */))
const _2e75bd4a = () => interopDefault(import('..\\pages\\user\\settings\\tags\\create.vue' /* webpackChunkName: "pages/user/settings/tags/create" */))
const _6be65b6a = () => interopDefault(import('..\\pages\\user\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/user/settings/users/invitation" */))
const _48f29eea = () => interopDefault(import('..\\pages\\user\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/user/settings/collections/_id" */))
const _596fb48c = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/index" */))
const _47df4700 = () => interopDefault(import('..\\pages\\user\\settings\\products\\_id.vue' /* webpackChunkName: "pages/user/settings/products/_id" */))
const _c2e1a23a = () => interopDefault(import('..\\pages\\user\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/user/settings/roles/_id" */))
const _cc660e2a = () => interopDefault(import('..\\pages\\user\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/user/settings/tags/_id" */))
const _57f633f8 = () => interopDefault(import('..\\pages\\user\\settings\\users\\_id.vue' /* webpackChunkName: "pages/user/settings/users/_id" */))
const _b687420c = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/form" */))
const _2bef3ccc = () => interopDefault(import('..\\pages\\user\\student\\index.vue' /* webpackChunkName: "pages/user/student/index" */))
const _0c9a0fca = () => interopDefault(import('..\\pages\\user\\auth\\forgot-password.vue' /* webpackChunkName: "pages/user/auth/forgot-password" */))
const _da0d8124 = () => interopDefault(import('..\\pages\\user\\auth\\login.vue' /* webpackChunkName: "pages/user/auth/login" */))
const _36712fb8 = () => interopDefault(import('..\\pages\\user\\auth\\reset-password.vue' /* webpackChunkName: "pages/user/auth/reset-password" */))
const _18889b63 = () => interopDefault(import('..\\pages\\user\\auth\\signup.vue' /* webpackChunkName: "pages/user/auth/signup" */))
const _6b6b94d1 = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge" */))
const _9c85db7e = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge-recovery" */))
const _9510968a = () => interopDefault(import('..\\pages\\user\\student\\cv-print.vue' /* webpackChunkName: "pages/user/student/cv-print" */))
const _10dd6eae = () => interopDefault(import('..\\pages\\user\\auth\\registration\\education-steps.vue' /* webpackChunkName: "pages/user/auth/registration/education-steps" */))
const _95641814 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\signup-steps.vue' /* webpackChunkName: "pages/user/auth/registration/signup-steps" */))
const _26539c17 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\skill-steps.vue' /* webpackChunkName: "pages/user/auth/registration/skill-steps" */))
const _2ed6bbdb = () => interopDefault(import('..\\pages\\user\\auth\\registration\\student-steps-old.vue' /* webpackChunkName: "pages/user/auth/registration/student-steps-old" */))
const _731f4fde = () => interopDefault(import('..\\pages\\user\\auth\\registration\\welcome-page.vue' /* webpackChunkName: "pages/user/auth/registration/welcome-page" */))
const _6375e66a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _21a949cb = () => interopDefault(import('..\\pages\\user\\mentors\\_id.vue' /* webpackChunkName: "pages/user/mentors/_id" */))
const _2e479e2d = () => interopDefault(import('..\\pages\\user\\mentors\\_id\\general.vue' /* webpackChunkName: "pages/user/mentors/_id/general" */))
const _5bb20eac = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-course-lists/_id/application" */))
const _01899915 = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-event-lists/_id/application" */))
const _a5d3b30a = () => interopDefault(import('..\\pages\\user\\courses\\_id\\application.vue' /* webpackChunkName: "pages/user/courses/_id/application" */))
const _e997205c = () => interopDefault(import('..\\pages\\user\\events\\_id\\application.vue' /* webpackChunkName: "pages/user/events/_id/application" */))
const _b3ec456a = () => interopDefault(import('..\\pages\\user\\feedbacks\\_id\\create.vue' /* webpackChunkName: "pages/user/feedbacks/_id/create" */))
const _ab14e180 = () => interopDefault(import('..\\pages\\user\\job\\_id\\application.vue' /* webpackChunkName: "pages/user/job/_id/application" */))
const _d07a8e68 = () => interopDefault(import('..\\pages\\user\\news\\_id\\application.vue' /* webpackChunkName: "pages/user/news/_id/application" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user/applied-course-lists",
    component: _cfdfa728,
    name: "user-applied-course-lists"
  }, {
    path: "/user/applied-event-lists",
    component: _b931ecba,
    name: "user-applied-event-lists"
  }, {
    path: "/user/approval",
    component: _5aa6225c,
    name: "user-approval"
  }, {
    path: "/user/confirm-password",
    component: _e06fd2aa,
    name: "user-confirm-password"
  }, {
    path: "/user/courses",
    component: _31264006,
    name: "user-courses"
  }, {
    path: "/user/dashboard",
    component: _19b54081,
    name: "user-dashboard"
  }, {
    path: "/user/events",
    component: _0101f1f4,
    name: "user-events"
  }, {
    path: "/user/job",
    component: _29f74058,
    name: "user-job"
  }, {
    path: "/user/news",
    component: _5bc4964c,
    name: "user-news"
  }, {
    path: "/user/organizations",
    component: _47e811e6,
    name: "user-organizations",
    children: [{
      path: "clinics",
      component: _14f62f74,
      name: "user-organizations-clinics"
    }, {
      path: "invitations",
      component: _53390e25,
      name: "user-organizations-invitations"
    }, {
      path: "clinics/create",
      component: _9cf7ec6c,
      name: "user-organizations-clinics-create"
    }, {
      path: "clinics/:id",
      component: _091d0248,
      name: "user-organizations-clinics-id"
    }]
  }, {
    path: "/user/profile",
    component: _ded2c354,
    children: [{
      path: "",
      component: _c759ed28,
      name: "user-profile"
    }, {
      path: "2fa",
      component: _c4985aca,
      name: "user-profile-2fa"
    }, {
      path: "certification",
      component: _20354eae,
      name: "user-profile-certification"
    }, {
      path: "educations",
      component: _59ddf041,
      name: "user-profile-educations"
    }, {
      path: "general",
      component: _120d93fc,
      name: "user-profile-general"
    }, {
      path: "invitations",
      component: _82ef9224,
      name: "user-profile-invitations"
    }, {
      path: "password",
      component: _97cd6d1e,
      name: "user-profile-password"
    }, {
      path: "projects",
      component: _f4656a9c,
      name: "user-profile-projects"
    }, {
      path: "skills-and-hobbies",
      component: _3a37f2c6,
      name: "user-profile-skills-and-hobbies"
    }, {
      path: "work-experiences",
      component: _50328bbf,
      name: "user-profile-work-experiences"
    }, {
      path: "certification/create",
      component: _0e28d1d0,
      name: "user-profile-certification-create"
    }, {
      path: "educations/create",
      component: _0994629d,
      name: "user-profile-educations-create"
    }, {
      path: "projects/create",
      component: _5b90564c,
      name: "user-profile-projects-create"
    }, {
      path: "work-experiences/create",
      component: _44599242,
      name: "user-profile-work-experiences-create"
    }, {
      path: "certification/:id/general",
      component: _9fc0907c,
      name: "user-profile-certification-id-general"
    }, {
      path: "educations/:id/general",
      component: _0cfcbacf,
      name: "user-profile-educations-id-general"
    }, {
      path: "projects/:id/general",
      component: _6a58ef3e,
      name: "user-profile-projects-id-general"
    }, {
      path: "work-experiences/:id?/general",
      component: _f1b054de,
      name: "user-profile-work-experiences-id-general"
    }, {
      path: ":id",
      component: _25ac76d4,
      name: "user-profile-id"
    }]
  }, {
    path: "/user/settings",
    component: _5bc41946,
    name: "user-settings",
    children: [{
      path: "collections",
      component: _4485b163,
      name: "user-settings-collections"
    }, {
      path: "consultations",
      component: _6f7e394e,
      name: "user-settings-consultations"
    }, {
      path: "products",
      component: _05db02d0,
      name: "user-settings-products"
    }, {
      path: "roles",
      component: _6767f9bb,
      name: "user-settings-roles"
    }, {
      path: "tags",
      component: _eb493c7a,
      name: "user-settings-tags"
    }, {
      path: "users",
      component: _63220d90,
      name: "user-settings-users"
    }, {
      path: "collections/create",
      component: _73e4c5bb,
      name: "user-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _b00589a0,
      name: "user-settings-consultations-create"
    }, {
      path: "products/create",
      component: _661cc1b4,
      name: "user-settings-products-create"
    }, {
      path: "roles/create",
      component: _a568ef3a,
      name: "user-settings-roles-create"
    }, {
      path: "tags/create",
      component: _2e75bd4a,
      name: "user-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _6be65b6a,
      name: "user-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _48f29eea,
      name: "user-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _596fb48c,
      name: "user-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _47df4700,
      name: "user-settings-products-id"
    }, {
      path: "roles/:id",
      component: _c2e1a23a,
      name: "user-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _cc660e2a,
      name: "user-settings-tags-id"
    }, {
      path: "users/:id",
      component: _57f633f8,
      name: "user-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _b687420c,
      name: "user-settings-consultations-id-form"
    }]
  }, {
    path: "/user/student",
    component: _2bef3ccc,
    name: "user-student"
  }, {
    path: "/user/auth/forgot-password",
    component: _0c9a0fca,
    name: "user-auth-forgot-password"
  }, {
    path: "/user/auth/login",
    component: _da0d8124,
    name: "user-auth-login"
  }, {
    path: "/user/auth/reset-password",
    component: _36712fb8,
    name: "user-auth-reset-password"
  }, {
    path: "/user/auth/signup",
    component: _18889b63,
    name: "user-auth-signup"
  }, {
    path: "/user/auth/two-factor-challenge",
    component: _6b6b94d1,
    name: "user-auth-two-factor-challenge"
  }, {
    path: "/user/auth/two-factor-challenge-recovery",
    component: _9c85db7e,
    name: "user-auth-two-factor-challenge-recovery"
  }, {
    path: "/user/student/cv-print",
    component: _9510968a,
    name: "user-student-cv-print"
  }, {
    path: "/user/auth/registration/education-steps",
    component: _10dd6eae,
    name: "user-auth-registration-education-steps"
  }, {
    path: "/user/auth/registration/signup-steps",
    component: _95641814,
    name: "user-auth-registration-signup-steps"
  }, {
    path: "/user/auth/registration/skill-steps",
    component: _26539c17,
    name: "user-auth-registration-skill-steps"
  }, {
    path: "/user/auth/registration/student-steps-old",
    component: _2ed6bbdb,
    name: "user-auth-registration-student-steps-old"
  }, {
    path: "/user/auth/registration/welcome-page",
    component: _731f4fde,
    name: "user-auth-registration-welcome-page"
  }, {
    path: "/",
    component: _6375e66a,
    name: "index"
  }, {
    path: "/user/mentors/:id?",
    component: _21a949cb,
    name: "user-mentors-id",
    children: [{
      path: "general",
      component: _2e479e2d,
      name: "user-mentors-id-general"
    }]
  }, {
    path: "/user/applied-course-lists/:id?/application",
    component: _5bb20eac,
    name: "user-applied-course-lists-id-application"
  }, {
    path: "/user/applied-event-lists/:id?/application",
    component: _01899915,
    name: "user-applied-event-lists-id-application"
  }, {
    path: "/user/courses/:id/application",
    component: _a5d3b30a,
    name: "user-courses-id-application"
  }, {
    path: "/user/events/:id/application",
    component: _e997205c,
    name: "user-events-id-application"
  }, {
    path: "/user/feedbacks/:id?/create",
    component: _b3ec456a,
    name: "user-feedbacks-id-create"
  }, {
    path: "/user/job/:id/application",
    component: _ab14e180,
    name: "user-job-id-application"
  }, {
    path: "/user/news/:id/application",
    component: _d07a8e68,
    name: "user-news-id-application"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
