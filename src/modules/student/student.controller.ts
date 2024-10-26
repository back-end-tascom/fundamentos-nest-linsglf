import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Student } from './studentsModel/student';
import { StudentService } from './student.service';
import { StudentDTO } from './studentsModel/studentDTO/studentDTO';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}

    @Post()

    createStudent(
        @Body() body: StudentDTO
    ) : Student {
        return this.studentService.addStudent(body.name, body.age, body.course);
    }

    @Get()
    getAllStudents() : Array<Student> {
        return this.studentService.getStudents();
    }

    @Get("/{id}")
    getStudentById(
        @Param() id : string
    ) : Student {
        return this.studentService.getStudentById(id);
    }

    @Patch("/{id}")
    updateStudent(
        @Param() id : string,
        @Body() body: StudentDTO
    ) : Student {
        return this.studentService.updateStudent(id, body);
    }

    @Delete("/{id}")
    deleteStudent(
        @Param() id : string
    ) : boolean {
        return this.studentService.deleteStudent(id);
    }
}
