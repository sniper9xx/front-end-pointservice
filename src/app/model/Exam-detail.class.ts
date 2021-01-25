export class ExamDetail {
  name : string;
  classExam : string;
  testMark1 : number;
  testMark2 : number;
  pointProcess : number;
  testFinal : number;

  constructor(name : string, classExam : string, testMark1 : number, testMark2 : number, pointProcess : number, testFinal : number) {
      this.name = name;
      this.classExam = classExam;
      this.testMark1 = testMark1;
      this.testMark2 = testMark2;
      this.pointProcess = pointProcess;
      this.testFinal = testFinal;
  }

}

