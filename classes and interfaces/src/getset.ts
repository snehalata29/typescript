// function combine(n1: number|string, n2: number){
//     const result = n1+n2;
//     return result;
// }
// function sendRequest(data: string, cb: (response: any) => void) {
//     // ... sending a request with "data"
//     return cb({data: 'Hi there!'});
//   }
   
//   sendRequest('Send this!', (response) => { 
//     console.log(response);
//     return true;
//    });

class DEpartment{
  private lastreport: string
  
  get lastReport(){
    return this.lastreport;
  }
  set lastReport(report: string){
    this.reports.push(report)
  }
  constructor(private reports: string[]){
    this.lastreport = reports[0]
  }
}
const d = new DEpartment(['weather'])
d.lastReport = 'mathematics';
console.log(d.lastReport);