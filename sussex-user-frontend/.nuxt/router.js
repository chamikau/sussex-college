import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _375875e0 = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\index.vue' /* webpackChunkName: "pages/user/applied-course-lists/index" */))
const _21bbcc7f = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\index.vue' /* webpackChunkName: "pages/user/applied-event-lists/index" */))
const _cba2de00 = () => interopDefault(import('..\\pages\\user\\approval\\index.vue' /* webpackChunkName: "pages/user/approval/index" */))
const _414d7c87 = () => interopDefault(import('..\\pages\\user\\confirm-password.vue' /* webpackChunkName: "pages/user/confirm-password" */))
const _2b8a0cd9 = () => interopDefault(import('..\\pages\\user\\courses\\index.vue' /* webpackChunkName: "pages/user/courses/index" */))
const _094e7a25 = () => interopDefault(import('..\\pages\\user\\dashboard.vue' /* webpackChunkName: "pages/user/dashboard" */))
const _b24a62ac = () => interopDefault(import('..\\pages\\user\\events\\index.vue' /* webpackChunkName: "pages/user/events/index" */))
const _2d853b34 = () => interopDefault(import('..\\pages\\user\\job\\index.vue' /* webpackChunkName: "pages/user/job/index" */))
const _6c141220 = () => interopDefault(import('..\\pages\\user\\news\\index.vue' /* webpackChunkName: "pages/user/news/index" */))
const _f930829e = () => interopDefault(import('..\\pages\\user\\organizations.vue' /* webpackChunkName: "pages/user/organizations" */))
const _5eb62f18 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\index.vue' /* webpackChunkName: "pages/user/organizations/clinics/index" */))
const _902ec86e = () => interopDefault(import('..\\pages\\user\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/user/organizations/invitations/index" */))
const _c07802b4 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\create.vue' /* webpackChunkName: "pages/user/organizations/clinics/create" */))
const _47b51780 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\_id.vue' /* webpackChunkName: "pages/user/organizations/clinics/_id" */))
const _888c1e0c = () => interopDefault(import('..\\pages\\user\\profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _3f1f9370 = () => interopDefault(import('..\\pages\\user\\profile\\index.vue' /* webpackChunkName: "pages/user/profile/index" */))
const _1f476182 = () => interopDefault(import('..\\pages\\user\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/user/profile/2fa/index" */))
const _69f54e52 = () => interopDefault(import('..\\pages\\user\\profile\\certification\\index.vue' /* webpackChunkName: "pages/user/profile/certification/index" */))
const _4f9a99c6 = () => interopDefault(import('..\\pages\\user\\profile\\educations\\index.vue' /* webpackChunkName: "pages/user/profile/educations/index" */))
const _af02c844 = () => interopDefault(import('..\\pages\\user\\profile\\general.vue' /* webpackChunkName: "pages/user/profile/general" */))
const _0acbcf92 = () => interopDefault(import('..\\pages\\user\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/user/profile/invitations/index" */))
const _33409f15 = () => interopDefault(import('..\\pages\\user\\profile\\password.vue' /* webpackChunkName: "pages/user/profile/password" */))
const _4ced148e = () => interopDefault(import('..\\pages\\user\\profile\\projects\\index.vue' /* webpackChunkName: "pages/user/profile/projects/index" */))
const _14262d79 = () => interopDefault(import('..\\pages\\user\\profile\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/user/profile/skills-and-hobbies/index" */))
const _a36e8cca = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\index.vue' /* webpackChunkName: "pages/user/profile/work-experiences/index" */))
const _072e72a8 = () => interopDefault(import('..\\pages\\user\\profile\\certification\\create.vue' /* webpackChunkName: "pages/user/profile/certification/create" */))
const _55d7fb41 = () => interopDefault(import('..\\pages\\user\\profile\\educations\\create.vue' /* webpackChunkName: "pages/user/profile/educations/create" */))
const _7869c7f0 = () => interopDefault(import('..\\pages\\user\\profile\\projects\\create.vue' /* webpackChunkName: "pages/user/profile/projects/create" */))
const _4282c483 = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\create.vue' /* webpackChunkName: "pages/user/profile/work-experiences/create" */))
const _cd18d0c4 = () => interopDefault(import('..\\pages\\user\\profile\\certification\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/certification/_id/general" */))
const _71ac4873 = () => interopDefault(import('..\\pages\\user\\profile\\educations\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/educations/_id/general" */))
const _441795e2 = () => interopDefault(import('..\\pages\\user\\profile\\projects\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/projects/_id/general" */))
const _1eb79835 = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/work-experiences/_id/general" */))
const _7da72ab0 = () => interopDefault(import('..\\pages\\user\\profile\\_id.vue' /* webpackChunkName: "pages/user/profile/_id" */))
const _d5e9c9bc = () => interopDefault(import('..\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _fe95a582 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\index.vue' /* webpackChunkName: "pages/user/settings/collections/index" */))
const _5dbe2e2a = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/index" */))
const _19ebf03c = () => interopDefault(import('..\\pages\\user\\settings\\products\\index.vue' /* webpackChunkName: "pages/user/settings/products/index" */))
const _6c688a97 = () => interopDefault(import('..\\pages\\user\\settings\\roles\\index.vue' /* webpackChunkName: "pages/user/settings/roles/index" */))
const _56517532 = () => interopDefault(import('..\\pages\\user\\settings\\tags\\index.vue' /* webpackChunkName: "pages/user/settings/tags/index" */))
const _68229e6c = () => interopDefault(import('..\\pages\\user\\settings\\users\\index.vue' /* webpackChunkName: "pages/user/settings/users/index" */))
const _84b67542 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\create.vue' /* webpackChunkName: "pages/user/settings/collections/create" */))
const _fc883c58 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/user/settings/consultations/create" */))
const _4b466202 = () => interopDefault(import('..\\pages\\user\\settings\\products\\create.vue' /* webpackChunkName: "pages/user/settings/products/create" */))
const _485d1307 = () => interopDefault(import('..\\pages\\user\\settings\\roles\\create.vue' /* webpackChunkName: "pages/user/settings/roles/create" */))
const _24749b92 = () => interopDefault(import('..\\pages\\user\\settings\\tags\\create.vue' /* webpackChunkName: "pages/user/settings/tags/create" */))
const _16506aef = () => interopDefault(import('..\\pages\\user\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/user/settings/users/invitation" */))
const _59db7367 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/user/settings/collections/_id" */))
const _50726930 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/index" */))
const _3a1e5cb8 = () => interopDefault(import('..\\pages\\user\\settings\\products\\_id.vue' /* webpackChunkName: "pages/user/settings/products/_id" */))
const _be137282 = () => interopDefault(import('..\\pages\\user\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/user/settings/roles/_id" */))
const _271514e2 = () => interopDefault(import('..\\pages\\user\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/user/settings/tags/_id" */))
const _5a5d4bd4 = () => interopDefault(import('..\\pages\\user\\settings\\users\\_id.vue' /* webpackChunkName: "pages/user/settings/users/_id" */))
const _5402f454 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/form" */))
const _2e258e76 = () => interopDefault(import('..\\pages\\user\\student\\index.vue' /* webpackChunkName: "pages/user/student/index" */))
const _5715f36e = () => interopDefault(import('..\\pages\\user\\auth\\forgot-password.vue' /* webpackChunkName: "pages/user/auth/forgot-password" */))
const _012aa012 = () => interopDefault(import('..\\pages\\user\\auth\\login.vue' /* webpackChunkName: "pages/user/auth/login" */))
const _31a30000 = () => interopDefault(import('..\\pages\\user\\auth\\reset-password.vue' /* webpackChunkName: "pages/user/auth/reset-password" */))
const _70834f3f = () => interopDefault(import('..\\pages\\user\\auth\\signup.vue' /* webpackChunkName: "pages/user/auth/signup" */))
const _2c7f50a6 = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge" */))
const _ae807236 = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge-recovery" */))
const _349f0a5f = () => interopDefault(import('..\\pages\\user\\student\\cv-print.vue' /* webpackChunkName: "pages/user/student/cv-print" */))
const _07e02352 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\education-steps.vue' /* webpackChunkName: "pages/user/auth/registration/education-steps" */))
const _136421d2 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\signup-steps.vue' /* webpackChunkName: "pages/user/auth/registration/signup-steps" */))
const _001242bb = () => interopDefault(import('..\\pages\\user\\auth\\registration\\skill-steps.vue' /* webpackChunkName: "pages/user/auth/registration/skill-steps" */))
const _6ffed77f = () => interopDefault(import('..\\pages\\user\\auth\\registration\\student-steps-old.vue' /* webpackChunkName: "pages/user/auth/registration/student-steps-old" */))
const _5d95048c = () => interopDefault(import('..\\pages\\user\\auth\\registration\\welcome-page.vue' /* webpackChunkName: "pages/user/auth/registration/welcome-page" */))
const _25581d0e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _79a3fda7 = () => interopDefault(import('..\\pages\\user\\mentors\\_id.vue' /* webpackChunkName: "pages/user/mentors/_id" */))
const _78c381d1 = () => interopDefault(import('..\\pages\\user\\mentors\\_id\\general.vue' /* webpackChunkName: "pages/user/mentors/_id/general" */))
const _3f8d6788 = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-course-lists/_id/application" */))
const _42b1b4b9 = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-event-lists/_id/application" */))
const _6c20cfc2 = () => interopDefault(import('..\\pages\\user\\courses\\_id\\application.vue' /* webpackChunkName: "pages/user/courses/_id/application" */))
const _525439ae = () => interopDefault(import('..\\pages\\user\\events\\_id\\application.vue' /* webpackChunkName: "pages/user/events/_id/application" */))
const _a9eb23b2 = () => interopDefault(import('..\\pages\\user\\feedbacks\\_id\\create.vue' /* webpackChunkName: "pages/user/feedbacks/_id/create" */))
const _161d1a38 = () => interopDefault(import('..\\pages\\user\\job\\_id\\application.vue' /* webpackChunkName: "pages/user/job/_id/application" */))
const _c6796cb0 = () => interopDefault(import('..\\pages\\user\\news\\_id\\application.vue' /* webpackChunkName: "pages/user/news/_id/application" */))

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
    component: _375875e0,
    name: "user-applied-course-lists"
  }, {
    path: "/user/applied-event-lists",
    component: _21bbcc7f,
    name: "user-applied-event-lists"
  }, {
    path: "/user/approval",
    component: _cba2de00,
    name: "user-approval"
  }, {
    path: "/user/confirm-password",
    component: _414d7c87,
    name: "user-confirm-password"
  }, {
    path: "/user/courses",
    component: _2b8a0cd9,
    name: "user-courses"
  }, {
    path: "/user/dashboard",
    component: _094e7a25,
    name: "user-dashboard"
  }, {
    path: "/user/events",
    component: _b24a62ac,
    name: "user-events"
  }, {
    path: "/user/job",
    component: _2d853b34,
    name: "user-job"
  }, {
    path: "/user/news",
    component: _6c141220,
    name: "user-news"
  }, {
    path: "/user/organizations",
    component: _f930829e,
    name: "user-organizations",
    children: [{
      path: "clinics",
      component: _5eb62f18,
      name: "user-organizations-clinics"
    }, {
      path: "invitations",
      component: _902ec86e,
      name: "user-organizations-invitations"
    }, {
      path: "clinics/create",
      component: _c07802b4,
      name: "user-organizations-clinics-create"
    }, {
      path: "clinics/:id",
      component: _47b51780,
      name: "user-organizations-clinics-id"
    }]
  }, {
    path: "/user/profile",
    component: _888c1e0c,
    children: [{
      path: "",
      component: _3f1f9370,
      name: "user-profile"
    }, {
      path: "2fa",
      component: _1f476182,
      name: "user-profile-2fa"
    }, {
      path: "certification",
      component: _69f54e52,
      name: "user-profile-certification"
    }, {
      path: "educations",
      component: _4f9a99c6,
      name: "user-profile-educations"
    }, {
      path: "general",
      component: _af02c844,
      name: "user-profile-general"
    }, {
      path: "invitations",
      component: _0acbcf92,
      name: "user-profile-invitations"
    }, {
      path: "password",
      component: _33409f15,
      name: "user-profile-password"
    }, {
      path: "projects",
      component: _4ced148e,
      name: "user-profile-projects"
    }, {
      path: "skills-and-hobbies",
      component: _14262d79,
      name: "user-profile-skills-and-hobbies"
    }, {
      path: "work-experiences",
      component: _a36e8cca,
      name: "user-profile-work-experiences"
    }, {
      path: "certification/create",
      component: _072e72a8,
      name: "user-profile-certification-create"
    }, {
      path: "educations/create",
      component: _55d7fb41,
      name: "user-profile-educations-create"
    }, {
      path: "projects/create",
      component: _7869c7f0,
      name: "user-profile-projects-create"
    }, {
      path: "work-experiences/create",
      component: _4282c483,
      name: "user-profile-work-experiences-create"
    }, {
      path: "certification/:id/general",
      component: _cd18d0c4,
      name: "user-profile-certification-id-general"
    }, {
      path: "educations/:id/general",
      component: _71ac4873,
      name: "user-profile-educations-id-general"
    }, {
      path: "projects/:id/general",
      component: _441795e2,
      name: "user-profile-projects-id-general"
    }, {
      path: "work-experiences/:id?/general",
      component: _1eb79835,
      name: "user-profile-work-experiences-id-general"
    }, {
      path: ":id",
      component: _7da72ab0,
      name: "user-profile-id"
    }]
  }, {
    path: "/user/settings",
    component: _d5e9c9bc,
    name: "user-settings",
    children: [{
      path: "collections",
      component: _fe95a582,
      name: "user-settings-collections"
    }, {
      path: "consultations",
      component: _5dbe2e2a,
      name: "user-settings-consultations"
    }, {
      path: "products",
      component: _19ebf03c,
      name: "user-settings-products"
    }, {
      path: "roles",
      component: _6c688a97,
      name: "user-settings-roles"
    }, {
      path: "tags",
      component: _56517532,
      name: "user-settings-tags"
    }, {
      path: "users",
      component: _68229e6c,
      name: "user-settings-users"
    }, {
      path: "collections/create",
      component: _84b67542,
      name: "user-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _fc883c58,
      name: "user-settings-consultations-create"
    }, {
      path: "products/create",
      component: _4b466202,
      name: "user-settings-products-create"
    }, {
      path: "roles/create",
      component: _485d1307,
      name: "user-settings-roles-create"
    }, {
      path: "tags/create",
      component: _24749b92,
      name: "user-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _16506aef,
      name: "user-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _59db7367,
      name: "user-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _50726930,
      name: "user-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _3a1e5cb8,
      name: "user-settings-products-id"
    }, {
      path: "roles/:id",
      component: _be137282,
      name: "user-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _271514e2,
      name: "user-settings-tags-id"
    }, {
      path: "users/:id",
      component: _5a5d4bd4,
      name: "user-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _5402f454,
      name: "user-settings-consultations-id-form"
    }]
  }, {
    path: "/user/student",
    component: _2e258e76,
    name: "user-student"
  }, {
    path: "/user/auth/forgot-password",
    component: _5715f36e,
    name: "user-auth-forgot-password"
  }, {
    path: "/user/auth/login",
    component: _012aa012,
    name: "user-auth-login"
  }, {
    path: "/user/auth/reset-password",
    component: _31a30000,
    name: "user-auth-reset-password"
  }, {
    path: "/user/auth/signup",
    component: _70834f3f,
    name: "user-auth-signup"
  }, {
    path: "/user/auth/two-factor-challenge",
    component: _2c7f50a6,
    name: "user-auth-two-factor-challenge"
  }, {
    path: "/user/auth/two-factor-challenge-recovery",
    component: _ae807236,
    name: "user-auth-two-factor-challenge-recovery"
  }, {
    path: "/user/student/cv-print",
    component: _349f0a5f,
    name: "user-student-cv-print"
  }, {
    path: "/user/auth/registration/education-steps",
    component: _07e02352,
    name: "user-auth-registration-education-steps"
  }, {
    path: "/user/auth/registration/signup-steps",
    component: _136421d2,
    name: "user-auth-registration-signup-steps"
  }, {
    path: "/user/auth/registration/skill-steps",
    component: _001242bb,
    name: "user-auth-registration-skill-steps"
  }, {
    path: "/user/auth/registration/student-steps-old",
    component: _6ffed77f,
    name: "user-auth-registration-student-steps-old"
  }, {
    path: "/user/auth/registration/welcome-page",
    component: _5d95048c,
    name: "user-auth-registration-welcome-page"
  }, {
    path: "/",
    component: _25581d0e,
    name: "index"
  }, {
    path: "/user/mentors/:id?",
    component: _79a3fda7,
    name: "user-mentors-id",
    children: [{
      path: "general",
      component: _78c381d1,
      name: "user-mentors-id-general"
    }]
  }, {
    path: "/user/applied-course-lists/:id?/application",
    component: _3f8d6788,
    name: "user-applied-course-lists-id-application"
  }, {
    path: "/user/applied-event-lists/:id?/application",
    component: _42b1b4b9,
    name: "user-applied-event-lists-id-application"
  }, {
    path: "/user/courses/:id/application",
    component: _6c20cfc2,
    name: "user-courses-id-application"
  }, {
    path: "/user/events/:id/application",
    component: _525439ae,
    name: "user-events-id-application"
  }, {
    path: "/user/feedbacks/:id?/create",
    component: _a9eb23b2,
    name: "user-feedbacks-id-create"
  }, {
    path: "/user/job/:id/application",
    component: _161d1a38,
    name: "user-job-id-application"
  }, {
    path: "/user/news/:id/application",
    component: _c6796cb0,
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
