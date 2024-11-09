import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Student } from './studentsModel/student';
import { StudentDTO } from './studentsModel/studentDTO/studentDTO';
import { uid } from 'uid';

@Injectable()
export class StudentService {
    //teste
    private students : Student[] = [];

    addStudent(name: string, age: number, course: string) : Student {
        const studentNameAlreadyExists = this.students.find((element) => {
            element.name === name
        });

        if(studentNameAlreadyExists){
            throw new HttpException("Nome já existe", HttpStatus.BAD_REQUEST)
        }

        let newStudentDTO : StudentDTO = {
            name, 
            age ,
            course
        };

        newStudentDTO.id = uid(9);
        let studentToSave : Student = {
            id : newStudentDTO.id,
            name : newStudentDTO.name,
            age : newStudentDTO.age,
            course : newStudentDTO.course
        }

        this.students.push(studentToSave);
        return studentToSave;
    }

    getStudents() : Array<Student> {
        return this.students
    }

    getStudentById(id: string) : Student{
        return this.students.find((i => i.id == id));
    }

    updateStudent(id: string, data: Partial<Student>) : Student | undefined {
        const student = this.students.find(element => element.id === id);
        if (student) {
            let updatedStudent = {...student, ...data}; 
            return updatedStudent
        }
        return undefined;
    }

    deleteStudent(id: string) : boolean {
        const studentIndex = this.students.findIndex(element => element.id === id);
        if (studentIndex !== -1){
            this.students.splice(studentIndex, 1)
            return true;
        }

        return false;
    }
}
 