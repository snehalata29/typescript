class AccountDepartment{
    private lastReport: string
    private static instance: AccountDepartment;
    private constructor(lastR: string){
        this.lastReport = lastR;
    }
     describe(){
        console.log('the last report is of ... ',this.lastReport)
    }
    static getInstance(){
        if(AccountDepartment.instance){
            return this.instance;
        }
        this.instance= new AccountDepartment('accounting');
        return this.instance;
    }
}
const instance = AccountDepartment.getInstance();
instance.describe();
