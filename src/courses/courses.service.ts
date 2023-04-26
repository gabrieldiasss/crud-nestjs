import { Injectable } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentoa do frameworl NestJS',
      tags: ['node.js', 'nestjs', 'js'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course: Course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (courses) => courses.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (courses) => courses.id === Number(id),
    );

    if (indexCourse > 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
