export class ExamData {
   idExam : number;
   nameExam : string;
   amountExam : number;
   dateExam : Date;

   constructor(idExam: number, nameExam : string, amountExam : number, dateExam : Date) {
      this.idExam = idExam;
      this.nameExam = nameExam;
      this.amountExam = amountExam;
      this.dateExam = dateExam;
   }
}
