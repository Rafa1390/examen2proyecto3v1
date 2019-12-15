import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.Examen2Proyecto3V1StudentModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.Examen2Proyecto3V1CourseModule)
      },
      {
        path: 'professor',
        loadChildren: () => import('./professor/professor.module').then(m => m.Examen2Proyecto3V1ProfessorModule)
      },
      {
        path: 'period',
        loadChildren: () => import('./period/period.module').then(m => m.Examen2Proyecto3V1PeriodModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Examen2Proyecto3V1EntityModule {}
